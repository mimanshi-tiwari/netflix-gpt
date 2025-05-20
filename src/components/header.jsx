import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../slice/userSlice";
import { NETFLIX_LOGO } from "../shared/constants";
import { toggleGPTSearch } from "../slice/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        if (!user) {
          const { uid, email, displayName, photoURL } = u;
          dispatch(addUser({uid, email, displayName, photoURL}))
        }
        // navigate to browse page when user lands to login screen
        if (location.pathname === '/')
          navigate("/browse");
      } else {
        navigate("/");
        if (user) {
          dispatch(removeUser())
        }
      }
    });
    return () => unsubscribe();
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Failed to logiut user", error);
      });
  };

  return (
    <div className="absolute h-[68px] w-full flex justify-between gap items-center gap-8 px-2 py-1 bg-gradient-to-b from-black z-50">
      <img className="h-full" alt="netflix-logo" src={NETFLIX_LOGO} />
      {user && (
        <>
          <img
            alt="profile-image"
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="mr-3 cursor-pointer"
            src={user?.photoURL}
          />
          {showUserMenu && (
            <div className="absolute right-5 top-[54px] flex bg-black text-white p-2 rounded">
              <ul className="flex flex-col items-start gap-2">
                <li className="px-2 w-full">{user?.displayName}</li>
                <li className="px-2 w-full cursor-pointer" onClick={() => {
                  dispatch(toggleGPTSearch(false))
                  if (location.pathname !== 'browse')
                    navigate("/browse")
                  }}>Home</li>
                <li className="px-2 pb-2 border-b w-full cursor-pointer" onClick={() => dispatch(toggleGPTSearch(true))}>GPT Search</li>
                <li
                  className="w-full p-2 pt-0 cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign out of Netflix
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;

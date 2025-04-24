import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../slice/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Failed to logiut user", error);
      });
  };

  return (
    <div className="absolute h-[68px] w-full flex justify-between gap items-center gap-8 px-2 py-1 bg-gradient-to-b from-black">
      <img
        className="h-full"
        alt="netflix-logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
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
                <li className="p-2 border-b w-full">{user?.displayName}</li>
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

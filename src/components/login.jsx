import { useEffect, useRef, useState } from "react";
import Header from "./header";
import { checkValidLoginForm } from "../shared/validate";
import ErrorMessage from "../shared/ErrorMessage";
import {
  validatePassword,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { CircleCheck, CircleX } from "lucide-react";
import { addUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    checkPasswordValidation(password);
  }, [password]);

  const checkPasswordValidation = async (password) => {
    const debounceCheck = (() => {
      let timer;
      return (callback, delay) => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
      };
    })();
    let status = false;
    debounceCheck(async () => {
      status = await validatePassword(auth, password);
      setIsValidPassword(status.isValid);
    }, 300);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = () => {
    const errormMessage = checkValidLoginForm(
      email.current.value,
      password,
      isSignIn ? "User" : name.current.value
    );
    setErrorMessage(errormMessage);
    if (errormMessage) return;
    if (isSignIn) {
      //* Singn In
      signInWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          // Signed in
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      //* Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          // Signed up
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e",
          })
            .then(() => {
              // Profile updated!
              const { uid, email,displayName,  photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
          // ..
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <img
        alt="backdrop-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 w-3/12 absolute top-[30%] left-[35%] p-6 bg-black text-white rounded bg-opacity-80"
      >
        <p className="text-2xl font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
        />
        <span className="absolute right-1 bottom-32 ">
          {password?.length > 0 &&
            (isValidPassword ? (
              <CircleCheck className="w-4 h-4 text-green-500" />
            ) : (
              <CircleX className="h-4 w-4 text-[#e50914]" />
            ))}
        </span>

        <ErrorMessage error={errorMessage} />
        <button
          className="px-4 py-2 bg-[#e50914] rounded font-semibold"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-xs">
          {isSignIn ? (
            <div className="flex gap-1">
              New to Netflix?
              <span
                className="font-semibold underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign up now.
              </span>
            </div>
          ) : (
            <div className="flex gap-1">
              Already a user?
              <span
                className="font-semibold underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const SignoutButton = () => {
  const [signOut] = useSignOut(auth);
  return (
    <button
      className=" bg-red-400 px-6 py-2 text-white transition hover:scale-105 hover:bg-red-600"
      onClick={async () => {
        const success = await signOut();
        if (success) {
          alert("You are sign out");
        }
      }}
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;

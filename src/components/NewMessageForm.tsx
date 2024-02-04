import React from "react";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import clsx from "clsx";

type NewMessageFormProps = {
  scrollComponentRef: React.RefObject<HTMLDivElement>;
  classname?: string;
};

const NewMessageForm = ({
  scrollComponentRef,
  classname,
}: NewMessageFormProps) => {
  const [formText, setFormText] = useState("");
  const [user] = useAuthState(auth);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "messages"), {
        text: formText,
        createdAt: serverTimestamp(),
        uid: user?.uid,
        photoUrl: user?.photoURL,
      });
      scrollComponentRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }

    setFormText("");
  };

  return (
    <form onSubmit={submitHandler} className={clsx("flex w-full", classname)}>
      <input
        type="text"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
        placeholder="Say Something"
        className="basis-3/4 "
      />
      <button
        type="submit"
        className="basis-1/4  bg-green-400 px-4 py-6 transition hover:bg-green-600"
      >
        Send
      </button>
    </form>
  );
};

export default NewMessageForm;

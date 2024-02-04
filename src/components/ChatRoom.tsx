import SignoutButton from "./SignoutButton";
import { collection, query, limit, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { TChatMessage } from "../types";
import NewMessageForm from "./NewMessageForm";
import { useRef } from "react";

const ChatRoom = () => {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, limit(25), orderBy("createdAt"));
  const scrollRef = useRef<HTMLDivElement>(null);

  const [messages, loading, error] = useCollection(q, {});
  //   if (!messages) {
  //     return null;
  //   }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("empty messages are ", messages);

  return (
    <div className="bg-zinc-900">
      {/* <div className="background-gradient absolute inset-0 z-0  max-h-screen"></div> */}
      <div className="pointer-events-none absolute inset-0 z-10 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      <div className="narrow-container">
        <div className="mx-auto flex-col border">
          <header className="sticky top-0 flex justify-between border-b-4 bg-gray-900 px-4 py-6">
            <span className="text-3xl font-bold text-white">Free Talk ❤️‍🔥</span>
            <SignoutButton />
          </header>
          <div className=" bg-gray-900">
            {loading && (
              <div className="flex min-h-screen flex-col items-center justify-start">
                <span className="text-white">Loading Messages..........</span>
              </div>
            )}
            {messages && !messages.empty ? (
              messages.docs.map((msg) => {
                const msgData = msg.data() as TChatMessage;
                return (
                  <ChatMessage
                    text={msgData.text}
                    key={msg.id}
                    photoUrl={msgData.photoUrl}
                    uid={msgData.uid}
                  />
                );
              })
            ) : (
              <div className="flex min-h-screen flex-col items-center justify-start">
                <span className="text-white">No new Messages</span>
              </div>
            )}
            <div ref={scrollRef}></div>
          </div>

          <NewMessageForm
            scrollComponentRef={scrollRef}
            classname="sticky bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

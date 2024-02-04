import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import clsx from "clsx";

type ChatMessageProps = {
  uid: string;
  text: string;
  photoUrl: string;
};

const ChatMessage = ({ text, photoUrl, uid }: ChatMessageProps) => {
  const [user] = useAuthState(auth);

  const msgClass = uid === user?.uid ? "sent" : "recieved";

  return (
    <div
      className={clsx("flex items-center justify-start gap-2 p-4", {
        "flex-row-reverse justify-start ": msgClass === "sent",
      })}
    >
      <img
        src={photoUrl}
        alt={`Image of currently logged In User`}
        className="aspect-1 h-[2.5rem] rounded-full object-cover md:h-[3rem]"
      />
      <span
        className={clsx(
          "rounded-xl px-4 py-2 text-sm  md:text-base lg:text-xl",
          {
            "bg-blue-600 text-white": msgClass === "sent",
            "bg-gray-400": msgClass === "recieved",
          },
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default ChatMessage;

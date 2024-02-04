import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import ChatRoom from "./components/ChatRoom";
import Signin from "./components/Signin";

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  return <>{user ? <ChatRoom /> : <Signin />}</>;
}

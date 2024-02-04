import { Timestamp } from "firebase/firestore";

export type TChatMessage = {
  uid: string;
  text: string;
  photoUrl: string;
  createdAt: Timestamp;
};

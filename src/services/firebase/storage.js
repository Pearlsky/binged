import firebase from "./firebase";
import { getStorage } from "firebase/storage";

const storage = getStorage(firebase);
export default storage;
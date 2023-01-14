import firebase from "./firebase";
import { getStorage } from "firebase/storage";
import { createContext } from "react";

const storage = getStorage(firebase);
export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};
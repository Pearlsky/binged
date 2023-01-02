import { getDatabase} from "firebase/database";
import { createContext } from "react";
import firebase from "./firebase";

const db = getDatabase(firebase);
const DbContext = createContext();

const DbProvider = ({ children }) => {
  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
};

export { DbContext, DbProvider };

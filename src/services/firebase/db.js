import { getDatabase} from "firebase/database";
import { createContext } from "react";
import firebaseApp from "./firebase";

const db = getDatabase(firebaseApp);
const DbContext = createContext();

const DbProvider = ({ children }) => {
  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
};

export { DbContext, DbProvider };

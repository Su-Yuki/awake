// ---[ import ]----------------------------------------------------------------
import { createContext } from "react";
/* type */
import { User } from '../type/User';

// ---[ type ]------------------------------------------------------------------
type UserContextValue ={
  user:    User | null;
  setUser: (user: User | null) => void;
}

// ---[ process ]---------------------------------------------------------------
export const UserContext = createContext<UserContextValue>({
  user:    null,
  setUser: () => {}
})

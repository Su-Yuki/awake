// ---[ import ]----------------------------------------------------------------
import { createContext } from "react";

// ---[ type ]------------------------------------------------------------------
type AuthContextValue ={
  auth:    boolean;
  setAuth: (auth: boolean) => void;
}

// ---[ process ]---------------------------------------------------------------
export const AuthContext = createContext<AuthContextValue>({
  auth:    false,
  setAuth: () => {}
})

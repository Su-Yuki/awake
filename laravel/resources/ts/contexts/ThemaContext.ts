// ---[ import ]----------------------------------------------------------------
import { createContext } from "react";
/* type */
import { Thema } from '../type/Thema';

// ---[ type ]------------------------------------------------------------------
type ThemaContextValue ={
  themas:    Thema[];
  setThemas: (themas: Thema[]) => void;
}

// ---[ process ]---------------------------------------------------------------
export const ThemaContexts = createContext<ThemaContextValue>({
  themas:    [],
  setThemas: () => {}
})

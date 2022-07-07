// ---[ import ]----------------------------------------------------------------
import { createContext } from "react";
/* type */
import { InnerWord } from '../type/InnerWord';

// ---[ type ]------------------------------------------------------------------
type InnerWordContextValue ={
  innerWords:     InnerWord[];
  setInnerWords:  (innerWords: InnerWord[]) => void;
}

// ---[ process ]---------------------------------------------------------------
export const InnerWordContexts = createContext<InnerWordContextValue>({
  innerWords:     [],
  setInnerWords:  () => {}
})

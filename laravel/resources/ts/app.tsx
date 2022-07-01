// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { ThemaContexts } from './contexts/ThemaContext'

/* type */
import { Thema } from './type/Thema';


/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
/* material-ui icon */

/* components */
/* screens */
import { WelcomeScreen } from './screens/WelcomeScreen';
import { TopScreen } from './screens/TopScreen';

// ---[ process ]---------------------------------------------------------------
export default function App() {
  // style
  // const classes = useStyles();
  const user = null;
  // const user = 'TestUser';

  const [themas, setThemas] = useState<Thema[]>([]);

  return (
    <>
      <ThemaContexts.Provider value={{ themas, setThemas }}>
        {!user ? <WelcomeScreen /> : <TopScreen />}
      </ThemaContexts.Provider>
    </>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

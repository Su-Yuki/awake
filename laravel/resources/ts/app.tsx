// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

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
import { CreateThemaForm } from './components/form/thema';
import { ThemaList } from './components/ThemaList';

// ---[ type ]------------------------------------------------------------------

// ---[ style ]-----------------------------------------------------------------


// ---[ process ]---------------------------------------------------------------
export default function App() {
  // style
  // const classes = useStyles();

  return (
    <>
      <CreateThemaForm />
      <ThemaList />
    </>
  );
}


if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

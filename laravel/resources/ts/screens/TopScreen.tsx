// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* components */
import { ThemaList } from '../components/ThemaList';
import { ThemaForm } from '../components/ThemaForm';

/* type */
import { Thema } from '../type/Thema';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      width: "80%"
		},
  })
);

// ---[ styles ]----------------------------------------------------------------
export const TopScreen = () => {
  // style
  const classes = useStyles();

  const [themas, setThemas] = useState<Thema[]>([]);

  return (
    <Container className={classes.container}>
      <ThemaContexts.Provider value={{ themas, setThemas }}>
        <ThemaForm />
        <ThemaList />
      </ThemaContexts.Provider>
    </Container>
  );
}

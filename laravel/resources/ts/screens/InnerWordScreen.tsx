// ---[ import ]----------------------------------------------------------------
import React, { useState } from 'react';

/* contexts */
import { InnerWordContexts } from '../contexts/InnerWordContext';

/* components */
import { InnerWordForm } from '../components/InnerWordForm';
import { InnerWordList } from '../components/InnerWordList';
import { InnerWordHeader } from '../components/InnerWordHeader';

/* type */
import { InnerWord } from '../type/InnerWord';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      width: "80%"
		},
  })
);

// ---[ styles ]----------------------------------------------------------------
export const InnerWordScreen = () => {
  // style
  const classes  = useStyles();

  const [innerWords, setInnerWords] = useState<InnerWord[]>([]);

  return (
    <Container className={classes.container}>
      <InnerWordContexts.Provider value={{ innerWords, setInnerWords }}>
        <InnerWordHeader />
        <InnerWordForm />
        <InnerWordList />
      </InnerWordContexts.Provider>
    </Container>
  );
}

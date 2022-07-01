// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { ThemaContexts } from './contexts/ThemaContext'

/* type */
import { Thema } from './type/Thema';

/* routes */
import { NotLoginRouter } from './roots/NotLoginRouter';
/* components */

/* screens */
import { TopScreen } from './screens/TopScreen';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      height: "100vh"
		},
  })
);

// ---[ process ]---------------------------------------------------------------
export default function App() {
  // style
  const classes = useStyles();

  const user = null;
  // const user = 'TestUser';

  const [themas, setThemas] = useState<Thema[]>([]);

  return (
    <Container className={classes.container}>
      <ThemaContexts.Provider value={{ themas, setThemas }}>
        {!user ? <NotLoginRouter /> : <TopScreen />}
      </ThemaContexts.Provider>
    </Container>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

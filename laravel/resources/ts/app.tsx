// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { UserContext } from './contexts/UserContext';

/* type */
import { User } from './type/User';

/* routes */
import { NotLoginRouter } from './routes/NotLoginRouter';
import { LoggedRouter } from './routes/LoggedRouter';

/* screens */
import { TopScreen } from './screens/TopScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      height: "100%"
		},
  })
);

// ---[ process ]---------------------------------------------------------------
export default function App() {
  // style
  const classes = useStyles();

  const [user, setUser]     = useState<User | null>(null);

  useEffect(() => {
    if (localStorage.getItem("loginUser")){
      const userStrageText: any    = localStorage.getItem('loginUser')
      const loginUser: User | null = JSON.parse(userStrageText)

      setUser(loginUser)
    }
  }, [])

  return (
    <Container className={classes.container}>
      <UserContext.Provider value={{user, setUser}}>
        {!user ? <WelcomeScreen /> : <LoggedRouter />}
      </UserContext.Provider>
    </Container>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

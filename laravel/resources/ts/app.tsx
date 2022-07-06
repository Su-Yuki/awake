// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { ThemaContexts } from './contexts/ThemaContext';
import { UserContext } from './contexts/UserContext';

/* type */
import { Thema } from './type/Thema';
import { User } from './type/User';

/* routes */
import { NotLoginRouter } from './routes/NotLoginRouter';
import { LoggedRouter } from './routes/LoggedRouter';

/* screens */
import { TopScreen } from './screens/TopScreen';

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
  const [themas, setThemas] = useState<Thema[]>([]);

  // useEffect(() => {
  //   if (localStorage.getItem("loginUser")){
  //     const userStrageText: any    = localStorage.getItem('loginUser')
  //     const loginUser: User | null = JSON.parse(userStrageText)

  //     setUser(loginUser)
  //   }
  // }, [])

  return (
    <Container className={classes.container}>
      <UserContext.Provider value={{user, setUser}}>
        <ThemaContexts.Provider value={{ themas, setThemas }}>
          {!user ? <NotLoginRouter /> : <TopScreen />}
        </ThemaContexts.Provider>
      </UserContext.Provider>
    </Container>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

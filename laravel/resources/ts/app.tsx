// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { UserContext } from './contexts/UserContext';
import { AuthContext } from './contexts/AuthContext';

/* type */
import { User } from './type/User';

/* lib */
import { getUser } from './lib/Api';

/* routes */
import { NotLoginRouter } from './routes/NotLoginRouter';
import { LoggedRouter } from './routes/LoggedRouter';

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

  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState(false);

  // auto login
  function toBoolean (loginCheck: string) {
    return loginCheck.toLowerCase() === 'true';
  }

  const getLoginUser = async() => {
    const getLoginDocRef = await getUser();
    setUser({userId: getLoginDocRef.userId, name: getLoginDocRef.userName});
  }

  useEffect(() => {
    if (localStorage.getItem("login_check")){
      const value = toBoolean(localStorage.getItem('login_check')!);

      setAuth(value);
      getLoginUser();
    }
  }, []);

  return (
    <Container className={classes.container}>
      <AuthContext.Provider value={{auth, setAuth}}>
        <UserContext.Provider value={{user, setUser}}>
          {auth ? <LoggedRouter /> : <NotLoginRouter />}
        </UserContext.Provider>
      </AuthContext.Provider>
    </Container>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

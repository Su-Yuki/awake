// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';


import axios from 'axios';

/* contexts */
import { UserContext } from '../contexts/UserContext';

/* type */
import { User } from '../type/User';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
/* material-ui icon */
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      display:                'flex',
      flex:                   1,
      alignItems:             'center',
      justifyContent:         'center',
      marginTop:              80,
		},
		login_container: {
      display:                'flex',
      alignItems:             'center',
      justifyContent:         'center',
      flexDirection:          'column',
      padding:                16,
      width:                  '500px',
      border:                 '1px solid black',
      borderRadius:           15,
      backgroundColor:        '#fff',
		},
    container_title : {
      marginBottom:           40,
		},
    container_item : {
      display:               'flex',
      alignItems:            'center',
      marginBottom:           16,
      width:                 '80%',
		},
    container_item_icon : {
      marginRight:           16,
      height:                '64px',
		},
    container_item_text_field : {
      width: '100%',
      border: 'none',
		},
    container_item_button : {
      marginTop:             80,
      marginBottom:          8,
      width:                '80%',
      borderRadius:          50,
		},
    container_item_navigate : {
      margin:                0
		},
		error_message : {
      margin:                8,
      width:                 '80%',
      color:                 '#a94442',
      backgroundColor:       '#ebccd1',
		},
  })
);

// ---[ types ]-----------------------------------------------------------------
type LoginPram = {
	email:     string;
	password: string;
}

// ---[ process ]---------------------------------------------------------------
export const LoginScreen = () => {
  const classes = useStyles();

  // state
  const {user, setUser}                   = useContext(UserContext);
  const [formData, setFormData]           = useState<LoginPram>({email: '', password: ''});
  const [errorMessage, setErrorMessage]   = useState<string[]>([]);

  const login = async() => {
    try {
      await axios.get('/sanctum/csrf-cookie').then(res => {
        axios.post('api/login', {
            email:    formData.email,
            password: formData.password
          })
          .then((res) => {
            if(res.data.status === 200){
              // Anset form
              setFormData({email: '', password: ''});
              // Set user
              setUser({userId: res.data.userId, name: res.data.userName});
              // local strage
              localStorage.setItem('loginUser', JSON.stringify(
                {userId: res.data.userId, name: res.data.userName}
              ));
            } else {
              setErrorMessage(res.data.message)
            }
          })
          .catch(error => {
            console.log(error);
            setErrorMessage(['ログインに失敗しました'])
          });
        })
    } catch (error) {
      console.error(error);
    }
  }

  // input state onChange logic
	const inputChangeForm = (input: React.ChangeEvent<any>): void => {
		const key: keyof LoginPram = input.target.name;
		const value                = input.target.value;
		formData[key]              = value;
		let data                   = Object.assign({}, formData);

		setFormData(data);
	}

  return (
    <>
      <Container className={classes.container}>
        <Box
          className={classes.login_container}
          component="form"
        >
          <Typography
            className={classes.container_title}
            variant='h5'
          >
            Awakeにログイン
          </Typography>
          <Box className={classes.container_item}>
            <EmailIcon className={classes.container_item_icon} />
            <TextField
              className={classes.container_item_text_field}
              label='メールアドレス'
              name='email'
              variant='outlined'
              size='small'
              onChange={inputChangeForm}
            />
          </Box>
          <Box className={classes.container_item}>
            <KeyIcon className={classes.container_item_icon} />
            <TextField
              className={classes.container_item_text_field}
              label='パスワード'
              name='password'
              variant='outlined'
              type='password'
              size='small'
              onChange={inputChangeForm}
            />
          </Box>
          <Box className={classes.error_message} component='ul'>
            {
              errorMessage?.map(error => (
                <Box component='li'>{error}</Box>
              ))
            }
          </Box>
          <Button
            className={classes.container_item_button}
            variant='contained'
            color='primary'
            onClick={login}
          >
            ログイン
          </Button>
          <Box
            className={classes.container_item_navigate}
            component='p'
          >
            アカウントをお持ちでない方は登録
          </Box>
        </Box>
      </Container>
    </>
  );
}


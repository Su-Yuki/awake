// ---[ import ]----------------------------------------------------------------
import React from 'react';

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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
      marginTop:              80,
      marginBottom:           8,
      width:                 '80%',
      borderRadius:           50,
		},
    container_item_navigate : {
      margin:                 0
		},
		template : {

		},
  })
);

// ---[ types ]-----------------------------------------------------------------

// ---[ process ]---------------------------------------------------------------
export const RegisterScreen = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Box className={classes.login_container}>
          <Typography
            className={classes.container_title}
            variant='h5'
          >
            Awakeを始めましょう
          </Typography>
          <Box className={classes.container_item}>
            <AccountCircleIcon className={classes.container_item_icon} />
            <TextField
              className={classes.container_item_text_field}
              label='名前'
              variant='outlined'
              size='small'
            />
          </Box>
          <Box className={classes.container_item}>
            <EmailIcon className={classes.container_item_icon} />
            <TextField
              className={classes.container_item_text_field}
              label='メールアドレス'
              variant='outlined'
              size='small'
            />
          </Box>
          <Box className={classes.container_item}>
            <KeyIcon className={classes.container_item_icon} />
            <TextField
              className={classes.container_item_text_field}
              label='パスワード'
              variant='outlined'
              type='password'
              size='small'
            />
          </Box>
          <Button
            className={classes.container_item_button}
            variant='contained'
          >
            登録
          </Button>
          <Box
          className={classes.container_item_navigate}
           component='p'
          >
            アカウントをお持ちの方はログインしてください
          </Box>
        </Box>
      </Container>
    </>
  );
}


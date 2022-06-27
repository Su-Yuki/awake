// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button,  TextField } from '@material-ui/core';

// ---[ type ]------------------------------------------------------------------

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			display:         'flex',
			flexDirection:   'column',
			padding:         16,
			borderBottom:    '1px solid black',
		},
		container_innner_top: {

		},
		container_innner_bottom: {
			marginTop :      8,
			display:        'flex',
			flexDirection:  'row-reverse'
		},
		input_thema: {
			width:          '100%',
		},
		thema_submit: {
			borderRadius:   50,
		},
		})
);

// ---[ types ]-----------------------------------------------------------------
type PostThema = {
	user_id: number | string;
	thema:   string;
}

// ---[ process ]---------------------------------------------------------------
export const CreateThemaForm: React.FC = () => {
	const classes = useStyles();

	// Set state
  // ユーザ認証をするまでひとまず１をセット
  const [user, setuser]           = useState<string>('1');
	const [themaName, setThemaName] = useState<string>('');
	const [formData, setFormData]   = useState<PostThema>({user_id: user, thema: ''});

	const themaPost = async() => {
		//
		if(themaName === ''){
			return;
		}

		try {
      await axios
        .post('api/thema/store', {
          // ユーザ認証をするまでひとまず１をセット
          user_id: "1",
          thema:   formData.thema
        })
        .then((res) => {
          // const tempPosts = themaName
          // // tempPosts.push();
          setThemaName('')
          setFormData({user_id: '', thema: ''});
        })
        .catch(error => {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
	}

	// Thema input type onChange logic
	const inputChangeForm = (input: React.ChangeEvent<any>): void => {
		const key: keyof PostThema = input.target.name;
		const value: typeof key    = input.target.value;
		formData[key]              = value;
		let data                   = Object.assign({}, formData);
    setThemaName(value);
		setFormData(data);
	}

	// action check(test)
	const aaa = () => {
		alert("aaa")
	}

	return (
		<>
      <form className={classes.container} method='post'>
        <TextField
          className={classes.input_thema}
          label='テーマを入力してください'
          variant='outlined'
          onChange={inputChangeForm}
          value={themaName}
          name='thema'
        />
        <input type="hidden" value="1" name="user_id" />
        <Box className={classes.container_innner_bottom}>
        <Button
          className={classes.thema_submit}
          variant='contained'
          color='primary'
          onClick={themaPost}
        >
          作成する
        </Button>
        </Box>
      </form>
		</>
	);
}

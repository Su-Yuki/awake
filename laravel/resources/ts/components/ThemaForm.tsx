// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { UserContext } from '../contexts/UserContext';

import axios from 'axios';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* types */
import { Thema } from '../type/Thema';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button,  TextField } from '@material-ui/core';

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


// ---[ process ]---------------------------------------------------------------
export const ThemaForm: React.FC = () => {
	const classes = useStyles();

	// Set state
  const {themas, setThemas}       = useContext(ThemaContexts);
  const {user, setUser}           = useContext(UserContext);
	const [themaName, setThemaName] = useState<string>('');

	const themaPost = async() => {
		// フロントで空をひとまずreturnさせとく
		if(themaName === ''){
			return null;
		}

		try {
      await axios
        .post('api/thema/store', {
          user_id: user?.userId,
          thema:   themaName
        })
        .then((res) => {
          const thema = {
            id:               res.data.thema.id,
            user_id:          Number(res.data.thema.user_id),
            thema:            res.data.thema.thema,
            inner_word_count: 0,
            updated_at:       res.data.thema.updated_at,
            created_at:       res.data.thema.created_at,
          } as Thema;
          setThemas([thema, ...themas]);

          // 初期化
          setThemaName('');
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
		const value = input.target.value;

    // setState
    setThemaName(value);
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

// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

/* contexts */
import { UserContext } from '../contexts/UserContext';

import axios from 'axios';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* lib */
import { storeTheme } from '../lib/Api';

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

    const storeThemeDocRef = await storeTheme(user?.userId, themaName);
    const thema = {
      id:               storeThemeDocRef.id,
      user_id:          Number(storeThemeDocRef.user_id),
      thema:            storeThemeDocRef.thema,
      inner_word_count: 0,
      updated_at:       storeThemeDocRef.updated_at,
      created_at:       storeThemeDocRef.created_at,
    } as Thema;

    setThemas([thema, ...themas]);
    setThemaName('');
	}

  // textField.stateのアップデート
	const inputChangeForm = (input: React.ChangeEvent<any>): void => {
		const value = input.target.value;

    setThemaName(value);
	}

	return (
		<>
      <form className={classes.container}>
        <TextField
          className={classes.input_thema}
          label='テーマを入力してください'
          variant='outlined'
          onChange={inputChangeForm}
          value={themaName}
          name='thema'
          onKeyPress={e => {
            if (e.key === 'Enter') {
              // エンターキー押下時の処理
              themaPost()
              e.preventDefault();
            }
          }}
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

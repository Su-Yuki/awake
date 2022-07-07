// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";

/* contexts */
import { UserContext } from '../contexts/UserContext';

import axios from 'axios';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';
import { InnerWordContexts } from '../contexts/InnerWordContext';

/* types */
import { InnerWord } from '../type/InnerWord';

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
export const InnerWordForm: React.FC = () => {
	const classes = useStyles();

	// Set state
  const {innerWords, setInnerWords} = useContext(InnerWordContexts);
  const {user, setUser}             = useContext(UserContext);
	const [innerWord, setInnerWord]   = useState<string>('');

  const themaId = useParams().thema_id;

	const innerWordPost = async() => {
		// フロントで空をひとまずreturnさせとく
		if(innerWord === ''){
			return null;
		}

		try {
      await axios
        .post(`//localhost/api/inner_words/store`, {
          thema_id:   themaId,
          inner_word: innerWord
        })
        .then((res) => {
          const resInnerWord = {
            id:           res.data.inner_word.id,
            thema_id:     Number(res.data.inner_word.user_id),
            inner_word:   res.data.inner_word.inner_word,
            so_word:      res.data.inner_word.so_word,
            really_word:  res.data.inner_word.really_word,
            why_word:     res.data.inner_word.why_word,
            outside_word: res.data.inner_word.outside_word,
            updated_at:   res.data.inner_word.updated_at,
            created_at:   res.data.inner_word.created_at,
          } as InnerWord;
          setInnerWords([resInnerWord, ...innerWords]);

          // 初期化
          setInnerWord('');
        })
        .catch(error => {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
	}

	// input type onChange logic
	const inputChangeForm = (input: React.ChangeEvent<any>): void => {
		const value = input.target.value;

    // setState
    setInnerWord(value);
	}

	return (
		<>
      <form className={classes.container} method='post'>
        <TextField
          className={classes.input_thema}
          label='内なる言葉を入力してください'
          variant='outlined'
          onChange={inputChangeForm}
          value={innerWord}
          name='innerWord'
        />
        <Box className={classes.container_innner_bottom}>
        <Button
          className={classes.thema_submit}
          variant='contained'
          color='primary'
          onClick={innerWordPost}
        >
          作成する
        </Button>
        </Box>
      </form>
		</>
	);
}

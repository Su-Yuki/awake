// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* contexts */
import { UserContext } from '../contexts/UserContext';

/* contexts */
import { InnerWordContexts } from '../contexts/InnerWordContext';

/* lib */
import { storeInnerWord } from '../lib/Api';

/* types */
import { InnerWord } from '../type/InnerWord';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button,  TextField } from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			display:        'flex',
			flexDirection:  'column',
			padding:        16,
			borderBottom:   '1px solid black',
		},
		container_innner_top: {

		},
		container_innner_bottom: {
			marginTop :     8,
			display:       'flex',
			flexDirection: 'row-reverse'
		},
		input_thema: {
			width:         '100%',
		},
		thema_submit: {
			borderRadius:  50,
		},
  })
);

// ---[ process ]---------------------------------------------------------------
export const InnerWordForm: React.FC = () => {
	const classes = useStyles();

	// Set state
  const {innerWords, setInnerWords} = useContext(InnerWordContexts);
  const {user, setUser}             = useContext(UserContext);
	const [innerWord, setInnerWord]   = useState<string>('');

  const themaId = useParams().thema_id;

  /* Api logic */
	const innerWordPost = async() => {
		// フロントで空をひとまずreturnさせとく
		if(innerWord === ''){
			return null;
		}

    const storeInnerWordDocRef = await storeInnerWord(themaId, innerWord);
    const newInnerWord = {
      id:           storeInnerWordDocRef.id,
      thema_id:     Number(storeInnerWordDocRef.user_id),
      inner_word:   storeInnerWordDocRef.inner_word,
      so_word:      storeInnerWordDocRef.so_word,
      really_word:  storeInnerWordDocRef.really_word,
      why_word:     storeInnerWordDocRef.why_word,
      outside_word: storeInnerWordDocRef.outside_word,
      updated_at:   storeInnerWordDocRef.updated_at,
      created_at:   storeInnerWordDocRef.created_at,
    } as InnerWord;

    setInnerWords([newInnerWord, ...innerWords]);
    setInnerWord('');
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
          onKeyPress={e => {
            if (e.key === 'Enter') {
              // エンターキー押下時の処理
              innerWordPost()
              e.preventDefault();
            }
          }}

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

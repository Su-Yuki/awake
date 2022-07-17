// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

/* contexts */
import { UserContext } from '../contexts/UserContext';
import { InnerWordContexts } from '../contexts/InnerWordContext';

/* components */
import { InnerWordListMenu } from '../components/InnerWordListMenu';

/* type */
import { InnerWord } from '../type/InnerWord';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
} from '@material-ui/core';
/* material-ui icon */
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CreateIcon from '@mui/icons-material/Create';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:                 'flex',
      flex:                    1,
      flexDirection:           'column',
      padding:                 16,

    },
    // container_parts
    container_innner_top: {
      display:                 'flex',
      flex:                    1,
      justifyContent:          'space-between',
      alignItems:              'center',
      padding:                 16,
    },
    container_innner_middle: {
      padding:                 16,
    },
    container_innner_bottom: {
      display:                 'flex',
      flexDirection:           'row-reverse',
      marginTop :              16,
    },
    // container_parts_items
    input_search: {
      width:                   '200px',
    },
    list_item: {
      display:                 'flex',
      flex:                    1,
      alignItems:              'center',
      marginBottom:            8,
    },
    list_item_right: {
      display:                 'flex',
      flex:                    1,
      alignItems:              'center',
      justifyContent:          'center',
      height:                  '64px',
      backgroundColor:         '#fff',
      border:                  '1px solid black',
      borderRight:             0,
      borderTopLeftRadius:     5,
      borderBottomLeftRadius:  5,
    },
    list_item_center: {
      display:                 'flex',
      flex:                    10,
      justifyContent:          'space-between',
      alignItems:              'center',
      padding:                 8,
      height:                  '64px',
      backgroundColor:         '#fff',
      border:                  '1px solid black',
    },
    list_item_thema_input: {
        width:                 '100%',
    },
    list_item_inner_prev: {
      display:                 'flex',
      flex:                    1,
      backgroundColor:         '#fff',
      alignItems:              'center',
      justifyContent:          'center',
      height:                  '64px',
      border:                  '1px solid black',
      borderLeft:              0,
      borderTopRightRadius:    5,
      borderBottomRightRadius: 5,
      '&:hover': {
        background:            'steelblue',
        cursor:                'pointer',
      },
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export const InnerWordList: React.FC = () => {
  // style
  const classes  = useStyles();
  const navigate = useNavigate();

  // stateを宣言
  const {user, setUser}             = useContext(UserContext);
  const {innerWords, setInnerWords} = useContext(InnerWordContexts);

  const themaId = useParams().thema_id;

  // 画面マウント時
  useEffect(() => {
    fetchInnerWords()
  }, [])

  // 内なる言葉を取得
  const fetchInnerWords = async () => {
    try {
      const innerWordList = await axios.get(
        `//localhost/api/inner_words?thema_id=${themaId}`
      )
      setInnerWords(innerWordList.data.inner_word);
    } catch (error) {
      console.error(error);
    }
  };

  // 内なる言葉の変更処理
	const onChangeInnerWord = (
    input: React.ChangeEvent<any>,
    index: any
  ): void => {
    setInnerWords(
      innerWords.map((obj, objIndex) => (
        index === objIndex
          ? {...obj, inner_word: input.target.value}
          : obj
      ))
    )
    // feature update api logic
	}

  // フォーカスが外れた時の処理（update）
	const onBlurFunc = async(id: number, inner_word: string) => {
    try {
      await axios
        .put(`//localhost/api/inner_words/update_title/${id}`, {
          inner_word: inner_word
        })
      } catch (error) {
        console.error(error);
      }
	}

  // 内なる言葉の詳細へ
  const prevInnerWordDetail = (
    innerWordID: number
  ) => {
    navigate(`/inner_word/${themaId}/item/${innerWordID}`);
  }


  // returns element
  return (
    <Box className={classes.container}>
        <Box className={classes.container_innner_top}>
          <Typography>内なる言葉</Typography>
          <TextField
            id='filled-search'
            className={classes.input_search}
            label='検索する'
            variant='filled'
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.container_innner_middle}>
            feature: A component of sorts will go in here.
        </Box>
        <Box>
          <List>
            {
              innerWords.map((innerWord, index) => (
                <ListItem
                  key={index.toString()}
                  className={classes.list_item}
                >
                  <Box className={classes.list_item_right} >
                    <StarBorderIcon/>
                  </Box>
                  <Box className={classes.list_item_center}>
                    <TextField
                      className={classes.list_item_thema_input}
                      id='outlined'
                      InputProps={{ disableUnderline: true }}
                      value={innerWord.inner_word}
                      onChange={(e) => (onChangeInnerWord(e, index))}
                      onBlur={() => (
                        onBlurFunc(innerWord.id, innerWord.inner_word)
                      )}
                    />
                    <InnerWordListMenu data={innerWord} index={index}  />
                  </Box>
                  <Box
                    className={classes.list_item_inner_prev}
                    onClick={() => (prevInnerWordDetail(innerWord.id))}
                  >
                    <CreateIcon />
                  </Box>
                </ListItem>
              ))
            }
          </List>
        </Box>
    </Box>
  );
}

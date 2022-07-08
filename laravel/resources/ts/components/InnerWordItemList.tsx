// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios';

/* contexts */
import { UserContext } from '../contexts/UserContext';
import { InnerWordContexts } from '../contexts/InnerWordContext';

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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CreateIcon from '@mui/icons-material/Create';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:                   'flex',
      flex:                      1,
      flexDirection:             'column',
      padding:                   16,

    },
    // container_parts
    container_innner_top: {
      display:                   'flex',
      flex:                      1,
      justifyContent:            'space-between',
      alignItems:                'center',
      padding:                   16,
    },
    container_innner_middle: {
      padding:                   16,
    },
    container_innner_bottom: {
      display:                   'flex',
      flexDirection:             'row-reverse',
      marginTop :                16,
    },
    // container_parts_items
    input_search: {
      width:                     '200px',
    },
    list_item: {
      display:                   'flex',
      flex:                      1,
      alignItems:                'center',
      marginBottom:              8,
    },
    list_item_right: {
      display:                   'flex',
      flex:                      1,
      alignItems:                'center',
      justifyContent:            'center',
      height:                    '64px',
      backgroundColor:           '#fff',
      border:                    '1px solid black',
      borderRight:               0,
      borderTopLeftRadius:       5,
      borderBottomLeftRadius:    5,
    },
    list_item_center: {
      display:                   'flex',
      flex:                      10,
      justifyContent:            'space-between',
      alignItems:                'center',
      padding:                   8,
      height:                    '64px',
      backgroundColor:           '#fff',
      border:                    '1px solid black',
    },
    list_item_thema_input: {
        width:                   '100%',
    },
    list_item_inner_prev: {
      display:                   'flex',
      flex:                      1,
      backgroundColor:           '#fff',
      alignItems:                'center',
      justifyContent:            'center',
      height:                    '64px',
      border:                    '1px solid black',
      borderLeft:                0,
      borderTopRightRadius:      5,
      borderBottomRightRadius:   5,
      "&:hover": {
        background:              "steelblue",
        cursor:                  'pointer',
      },
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export const InnerWordItemList: React.FC = () => {
  // style
  const classes  = useStyles();
  const navigate = useNavigate();

  // stateを宣言
  const {user, setUser}             = useContext(UserContext);

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
    } catch (error) {
      console.error(error);
    }
  };

  // 内なる言葉の変更処理
	const onChangeInnerWord = (
    input: React.ChangeEvent<any>,
    index: any
  ): void => {

	}

  // 内なる言葉の詳細へ
  const prevInnerWordDetail = (
    input: React.ChangeEvent<any>,
    innerWord: number
  ) => {
    navigate(`/inner_word/item/${themaId}`);
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

          </List>
        </Box>
    </Box>
  );
}

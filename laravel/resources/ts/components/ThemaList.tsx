// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

/* contexts */
import { UserContext } from '../contexts/UserContext';
import { ThemaContexts } from '../contexts/ThemaContext';

/* type */
import { User } from '../type/User';
import { Thema } from '../type/Thema';

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
export const ThemaList: React.FC = () => {
  // style
  const classes  = useStyles();
  const navigate = useNavigate();

  // state
  const {user, setUser}     = useContext(UserContext);
  const {themas, setThemas} = useContext(ThemaContexts);

  const userId = user?.userId;

  // effect
  useEffect(() => {
    fetchThemas()
  }, [])

  // get themaList
  const fetchThemas = async () => {
    try {
      const themas = await axios.get(`api/thema?id=${userId}`)
      setThemas(themas.data.thema);
    } catch (error) {
      console.error(error);
    }
  };

  // update Thema
	const onChangeThema = (
    input: React.ChangeEvent<any>,
    index: any
  ): void => {
    setThemas(
      themas.map((obj, objIndex) => (
        index === objIndex
        ? {...obj, thema: input.target.value}
        : obj
      ))
    )
	}

  const prevInnerWord = (
    input: React.ChangeEvent<any>,
    thema_id: number
  ) => {
    navigate(`/inner_word/${thema_id}`);
  }

  // フォーカスが外れた時の処理（update）
	const onBlurFunc = async(id: number, thema: string) => {
    try {
      await axios
        .put(`//localhost/api/thema/update/${id}`, {
          thema: thema
        })
    } catch (error) {
      console.error(error);
    }
	}

  return (
    <>
      <Box className={classes.container}>
          <Box className={classes.container_innner_top}>
            <Typography>テーマ一覧</Typography>
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
                themas.map((thema, index) => (
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
                        value={thema.thema}
                        onChange={(e) => (onChangeThema(e, index))}
                        onBlur={() => (
                          onBlurFunc(thema.id, thema.thema)
                        )}
                        />
                      <MoreHorizIcon />
                    </Box>
                    <Box
                      className={classes.list_item_inner_prev}
                      onClick={(e) => (prevInnerWord(e, thema.id))}
                    >
                      <NavigateNextIcon />
                    </Box>
                  </ListItem>
                ))
              }
            </List>
          </Box>
      </Box>
    </>
  );
}

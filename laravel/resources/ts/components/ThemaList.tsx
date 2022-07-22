// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* components */
import { ThemaListMenu } from '../components/ThemaListMenu';
import { ThemaListSearch } from '../components/ThemaListSearch';

/* lib */
import { listTheme, updateTheme } from '../lib/Api';

/* type */
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
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:                  'flex',
      flex:                     1,
      flexDirection:            'column',
      padding:                  16,

    },
    container_innner_middle: {
      padding:                  16,
    },
    container_innner_bottom: {
      display:                  'flex',
      flexDirection:            'row-reverse',
      marginTop :               16,
    },
    list_item: {
      display:                  'flex',
      flex:                     1,
      alignItems:               'center',
      marginBottom:             8,
    },
    list_item_right: {
      display:                  'flex',
      flex:                     1,
      alignItems:               'center',
      justifyContent:           'center',
      height:                   '64px',
      backgroundColor:          '#fff',
      border:                   '1px solid black',
      borderRight:              0,
      borderTopLeftRadius:      5,
      borderBottomLeftRadius:   5,
    },
    list_item_center: {
      display:                 'flex',
      flex:                     10,
      justifyContent:           'space-between',
      alignItems:               'center',
      padding:                  8,
      height:                   '64px',
      backgroundColor:          '#fff',
      border:                   '1px solid black',
    },
    list_item_thema_input: {
        width:                  '100%',
    },
    list_item_inner_prev: {
      display:                  'flex',
      flex:                     1,
      backgroundColor:          '#fff',
      alignItems:               'center',
      justifyContent:           'center',
      height:                   '64px',
      border:                   '1px solid black',
      borderLeft:               0,
      borderTopRightRadius:     5,
      borderBottomRightRadius:  5,
      '&:hover': {
        background:             'steelblue',
        cursor:                 'pointer',
      },
    },
    not_found_list_item: {
      display:                  'flex',
      flexDirection:            'column',
      justifyContent:           'center',
      alignItems:               'center',
    },
    not_found_list_item_content: {
      fontSize:                 '1.3rem',
      marginBottom:             8,
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export const ThemaList: React.FC = () => {
  // state
  const {themas, setThemas} = useContext(ThemaContexts);

  const classes  = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    fetchThemas()
  }, [])

  /* Api logic */
  // テーマの取得(Top表示)
  const fetchThemas = async () => {
    const listThemeDocRef = await listTheme();
    setThemas(listThemeDocRef.thema);
  };

  // フォーカスが外れた時の処理（update）
	const onBlurFunc = async(id: number, thema: string) => {
    await updateTheme(id, thema);
	}

  /* Components logic */
  // テーマリストstateのアップデート
	const onChangeThema = (
    input: React.ChangeEvent<any>,
    index: number
  ): void => {
    setThemas(
      themas.map((obj, objIndex) => (
        objIndex === index
          ? {...obj, thema: input.target.value}
          : obj
      ))
    )
	}

  // 内なる言葉へ遷移
  const prevInnerWord = (thema_id: number) => {
    navigate(`/inner_word/${thema_id}`);
  }

  return (
    <>
      <Box className={classes.container}>
        <ThemaListSearch />
        <Box className={classes.container_innner_middle}>
            feature: A component of sorts will go in here.
        </Box>
        <Box>
          <List>
            {
              themas.length
                ?
                  themas.map((thema, index: number) => (
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
                          onBlur={() => (onBlurFunc(thema.id, thema.thema))}
                        />
                        <ThemaListMenu data={thema} index={index} />
                      </Box>
                      <Box
                        className={classes.list_item_inner_prev}
                        onClick={() => (prevInnerWord(thema.id))}
                      >
                        <NavigateNextIcon />
                      </Box>
                    </ListItem>
                  ))
                :
                  <ListItem className={classes.not_found_list_item}>
                    <SentimentVeryDissatisfiedIcon className={classes.not_found_list_item_content} />
                    <Typography className={classes.not_found_list_item_content}>
                      テーマはありません
                    </Typography>
                  </ListItem>
            }
          </List>
        </Box>
      </Box>
    </>
  );
}

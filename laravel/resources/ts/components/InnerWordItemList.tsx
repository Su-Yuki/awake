// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';

/* types */
import { InnerWord } from '../type/InnerWord';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {  Box, TextField } from '@material-ui/core';
import { Typography, Accordion, AccordionDetails } from '@mui/material';
/* material-ui icon */
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:         'flex',
      flex:            1,
      flexDirection:   'column',
      padding:         16,
    },
    // container_parts
    container_innner_top: {
      display:         'flex',
      flex:            1,
      justifyContent:  'center',
      alignItems:      'center',
      padding:         16,
    },
    container_innner_middle: {
      padding:         16,
    },
    container_innner_bottom: {
      display:         'flex',
      flexDirection:   'row-reverse',
      marginTop :      16,
    },
    // container_parts_items
    innner_top_title: {
      display:         'flex',
      justifyContent:  'center',
      alignItems:      'center',
      marginBottom:    16,
      width:           '60%',
      fontSize:        '32px',
      borderBottom:    '1px solid black',
    },
    accordion_summary: {
      marginRight:     '16px',
      marginLeft:      '16px'
    },
    accordion_details: {
      margin:          '16px',
      backgroundColor: '#f5f6f6',
    },
    accordion_detail_textfield: {
      width:           '100%',
    },
  })
);
// ---[ types ]-----------------------------------------------------------------
type InnerItemPram = {
  inner_word:   string;
	so_word:      string;
	really_word:  string;
  why_word:     string;
  outside_word: string;
}


// ---[ process ]---------------------------------------------------------------
export const InnerWordItemList: React.FC = () => {
  // style
  const classes = useStyles();

  // stateを宣言
  const [ItemData, setItemData]   = useState<InnerItemPram>({
    inner_word:   '',
    so_word:      '',
    really_word:  '',
    why_word:     '',
    outside_word: '',
  });

  // constrct
  const innerWordID = useParams().inner_word_id;

  // 画面マウント時
  useEffect(() => {
    fetchInnerWordItem()
  }, [])

  // 内なる言葉を取得
  const fetchInnerWordItem = async () => {
    try {
      const getinnerWord = await axios.get(
        `//localhost/api/inner_words/show?inner_word_id=${innerWordID}`
      )
      setItemData({
        inner_word:   getinnerWord.data.inner_word.inner_word,
        so_word:      getinnerWord.data.inner_word.so_word,
        really_word:  getinnerWord.data.inner_word.really_word,
        why_word:     getinnerWord.data.inner_word.why_word,
        outside_word: getinnerWord.data.inner_word.outside_word,
      })
    } catch (error) {
      console.error(error);
    }
  };

  // 内なる言葉の変更処理
	const onChangeInnerWord = (input: React.ChangeEvent<any>): void => {
		const key: keyof InnerItemPram = input.target.name;
		const value: typeof key        = input.target.value;
    ItemData[key]                  = value;
		let data                       = Object.assign({}, ItemData);

    setItemData(data);
	}

  // フォーカスが外れた時の処理（update）
	const onBlurFunc = async() => {
    try {
      await axios
        .put(`//localhost/api/inner_words/update_item/${innerWordID}`, {
          so_word:      ItemData?.so_word,
          really_word:  ItemData?.really_word,
          why_word:     ItemData?.why_word,
          outside_word: ItemData?.outside_word,
        })
      } catch (error) {
        console.error(error);
      }
	}

  // returns element
  return (
    <Box className={classes.container}>
        <Box className={classes.container_innner_top}>
          <Box className={classes.innner_top_title}>
            {ItemData?.inner_word}
          </Box>
        </Box>
        <Box>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              className={classes.accordion_summary}
              id="panel1bh-header"
            >
              <Typography>
                1. それで？
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordion_details}>
              <TextField
                className={classes.accordion_detail_textfield}
                id="standard-multiline-flexible"
                name='so_word'
                defaultValue={ItemData?.so_word}
                placeholder="内なる言葉に「それで？」と質問してみよう"
                multiline
                maxRows={10}
                variant="standard"
                onChange={onChangeInnerWord}
                onBlur={onBlurFunc}
                InputProps={{ disableUnderline: true }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              className={classes.accordion_summary}
              id="panel1bh-header"
            >
              <Typography>
                2. 本当に？
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordion_details}>
              <Box>
                <TextField
                  className={classes.accordion_detail_textfield}
                  id="standard-multiline-flexible"
                  name='really_word'
                  defaultValue={ItemData?.really_word}
                  placeholder="内なる言葉に「本当に？」と質問してみよう"
                  multiline
                  maxRows={10}
                  variant="standard"
                  onChange={onChangeInnerWord}
                  onBlur={onBlurFunc}
                  InputProps={{ disableUnderline: true }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              className={classes.accordion_summary}
              id="panel1bh-header"
            >
              <Typography>
                3. なぜ？
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordion_details}>
              <TextField
                className={classes.accordion_detail_textfield}
                id="standard-multiline-flexible"
                name='why_word'
                defaultValue={ItemData?.why_word}
                placeholder="内なる言葉に「なぜ？」と質問してみよう"
                multiline
                maxRows={10}
                variant="standard"
                onChange={onChangeInnerWord}
                onBlur={onBlurFunc}
                InputProps={{ disableUnderline: true }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              className={classes.accordion_summary}
              id="panel1bh-header"
            >
              <Typography>
                ■ 外に向かう言葉を作ってみよう
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordion_details}>
              <TextField
                className={classes.accordion_detail_textfield}
                id="standard-multiline-flexible"
                name='outside_word'
                defaultValue={ItemData?.outside_word}
                placeholder="「1, 2, 3」の言葉を使い外に向かう言葉を作ってみよう"
                multiline
                maxRows={15}
                variant="standard"
                onChange={onChangeInnerWord}
                onBlur={onBlurFunc}
                InputProps={{ disableUnderline: true }}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
    </Box>
  );
}

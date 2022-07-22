// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState, useContext } from 'react';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* lib */
import { listTheme } from '../lib/Api';

/* type */
import { Thema } from '../type/Thema';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
} from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      display:        'flex',
      flex:           1,
      justifyContent: 'space-between',
      alignItems:     'center',
      padding:        16,
		},
    // container_parts_items
    input_search: {
      width:          '200px',
    },
  })
);

// ---[ styles ]----------------------------------------------------------------
export const ThemaListSearch = () => {
  // construct
  const classes  = useStyles();

  // state
  const {themas, setThemas} = useContext(ThemaContexts);

  /* Components logic */
	const onSearchThema = async (input: React.ChangeEvent<any>) => {
    const listThemeDocRef = await listTheme();

    if(!input.target.value){
      setThemas(listThemeDocRef.thema);
    } else {
      setThemas(
        listThemeDocRef.thema.filter((thema: Thema) => {
          return thema.thema.includes(input.target.value)
        })
      );
    }
	}

  return (
    <Container className={classes.container}>
      <Typography>テーマ一覧</Typography>
      <TextField
        id='filled-search'
        className={classes.input_search}
        label='検索する'
        variant='filled'
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onSearchThema(e)
            e.preventDefault();
          }
        }}
        InputProps={{ disableUnderline: true }}
      />
    </Container>
  );
}

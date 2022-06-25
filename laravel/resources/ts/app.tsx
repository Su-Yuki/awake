// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

/* material-ui */
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Typography,
    Button,
    TextField,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';
import StarBorderIcon from '@mui/icons-material/StarBorder';

/* components */
import { CreateThemaForm } from './components/form/thema';

// ---[ type ]------------------------------------------------------------------
type Thema = {
  id:               number
  user_id:          number
  thema:            string
  inner_word_count: number
  updated_at:       Date
  created_at:       Date
}
// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:         'flex',
      flex:            1,
      flexDirection:   'column',
      padding:         16,
      backgroundColor: "#fff",
    },
    // container_parts
    container_innner_top: {
      display:         'flex',
      flex:            1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    container_innner_middle: {

    },
    container_innner_bottom: {
      marginTop :     8,
      display:       'flex',
      flexDirection: 'row-reverse'
    },
    // container_parts_items
    input_thema: {
      width: 'auto',
    },
    thema_submit: {
      borderRadius: 50,
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export default function App() {
    // style
    const classes = useStyles();

    // state
    const [themas, setThemas] = useState<Thema[]>([]);

    // effect
    useEffect(() => {
        getThema()
    }, [])

    // get themaList
    const getThema = async () => {
        try {
            const themas = await axios.get('api/test')
            setThemas(themas.data.thema);
        } catch (error) {
            console.error(error);
        }
    };
    console.log(themas);

  return (
    <>
      <CreateThemaForm />
      <Box className={classes.container}>
          <Box className={classes.container_innner_top}>
              <Typography>テーマ一覧</Typography>
              <TextField
                className={classes.input_thema}
                size="small"
                label="検索する"
                variant="outlined"
              />
          </Box>
          <Box className={classes.container_innner_middle}>
              feature: A component of sorts will go in here.
          </Box>
          <Box>
              <List>
                {
                  themas.map((thema, index) => (
                    <ListItem key={index.toString()}>
                        <StarBorderIcon />
                        {thema.thema}
                        {thema.inner_word_count}
                    </ListItem>
                  ))
                }
              </List>
          </Box>
      </Box>
    </>
  );
}


if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

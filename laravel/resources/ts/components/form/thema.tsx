// ---[ import ]----------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

/* material-ui */
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Button,  TextField } from '@material-ui/core';

// ---[ type ]------------------------------------------------------------------

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display:         'flex',
      flex:            1,
      flexDirection:   'column',
      padding:         16,
      backgroundColor: "#fff",
      borderBottom:    "1px solid black",
    },
    container_innner_top: {

    },
    container_innner_bottom: {
      marginTop :     8,
      display:       'flex',
      flexDirection: 'row-reverse'
    },
    input_thema: {
      width: "100%",
    },
    thema_submit: {
      borderRadius: 50,
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export const CreateThemaForm: React.FC = () => {
    const classes = useStyles();

    return (
      <>
        <form
          className={classes.container}
          method="POST"
        >
          <TextField
            className={classes.input_thema}
            size="small"
            label="テーマを入力してください"
            variant="outlined"
          />
          <Box className={classes.container_innner_bottom}>
            <Button
              className={classes.thema_submit}
              type="submit"
              variant="contained"
              color="primary"
            >
              作成する
            </Button>
          </Box>
        </form>
      </>
    );
}

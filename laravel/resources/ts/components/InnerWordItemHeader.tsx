// ---[ import ]----------------------------------------------------------------
import React from 'react';
import {Link, useParams } from 'react-router-dom';


/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';

/* material-ui icon */
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      display:         'flex',
      flex:            1,
      flexDirection:   'row',
      justifyContent:  'space-between',
      padding:         16,
      marginBottom:    16,
      borderBottom:    '1px solid black',
		},
    left_container: {
      display:         'flex',
      flex:            1,
      alignItems:      'center',
      justifyContent:  'start',
    },
    center_container: {
      display:         'flex',
      flex:            1,
      alignItems:      'center',
      justifyContent:  'center',
    },
    right_container: {
      display:         'flex',
      flex:            1,
      alignItems:      'center',
      justifyContent:  'end',
    },
  })
);

// ---[ styles ]----------------------------------------------------------------
export const InnerWordItemHeader = () => {
  // style
  const classes     = useStyles();
  const innerWordID = useParams().inner_word_id;

  return (
    <Container className={classes.container}>
      <Box className={classes.left_container}>
        <Link to={`inner_word/${innerWordID}`}>戻る</Link>
      </Box>
      <Box className={classes.center_container}>
        <Typography
          variant="h5"
        >
          内なる言葉
        </Typography>
      </Box>
      <Box className={classes.right_container}>
        <MoreHorizIcon />
      </Box>
    </Container>
  );
}

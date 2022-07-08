// ---[ import ]----------------------------------------------------------------
import React from 'react';

/* components */
import { InnerWordItemHeader } from '../components/InnerWordItemHeader';
import { InnerWordItemList } from '../components/InnerWordItemList';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      width: "80%"
		},
  })
);

// ---[ styles ]----------------------------------------------------------------
export const InnerWordItemScreen = () => {
  // style
  const classes  = useStyles();

  return (
    <Container className={classes.container}>
      <InnerWordItemHeader/>
      <InnerWordItemList/>
    </Container>
  );
}

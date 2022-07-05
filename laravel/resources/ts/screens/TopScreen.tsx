// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* components */
import { CreateThemaForm } from '../components/form/Thema';
import { ThemaList } from '../components/ThemaList';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ---[ style ]-----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
      width: "80%"
		},
  })
);

// ---[ styles ]----------------------------------------------------------------
export const TopScreen = () => {
  // style
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CreateThemaForm />
      <ThemaList />
    </Container>
  );
}

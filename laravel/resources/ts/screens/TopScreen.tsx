// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/* components */
import { CreateThemaForm } from '../components/form/thema';
import { ThemaList } from '../components/ThemaList';

// ---[ styles ]----------------------------------------------------------------
export const TopScreen = () => {
  return (
    <>
      <CreateThemaForm />
      <ThemaList />
    </>
  );
}

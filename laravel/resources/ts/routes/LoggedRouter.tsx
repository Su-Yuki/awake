// ---[ import ]----------------------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* screens */
import { TopScreen } from '../screens/TopScreen';
import { InnerWordScreen } from '../screens/InnerWordScreen';
import { InnerWordItemScreen } from '../screens/InnerWordItemScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { PageNotFound } from '../screens/PageNotFound';

// ---[ styles ]----------------------------------------------------------------
export const LoggedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopScreen />} />
          <Route path="/inner_word/:thema_id" element={<InnerWordScreen />} />
          <Route path="/inner_word/item/:thema_id" element={<InnerWordItemScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

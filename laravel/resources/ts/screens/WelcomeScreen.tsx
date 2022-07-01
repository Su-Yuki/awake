// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { PageNotFound } from './PageNotFound';
import { RegisterScreen } from './RegisterScreen';
import { LoginScreen } from './LoginScreen';

// ---[ styles ]----------------------------------------------------------------
export const WelcomeScreen = () => {
  return (
    <>
      <p>
        Wlellcome!!
        You must be logged in to use this app!
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageNotFound />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

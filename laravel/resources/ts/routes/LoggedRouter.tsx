// ---[ import ]----------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

/* screens */
import { TopScreen } from '../screens/TopScreen';
import { PageNotFound } from '../screens/PageNotFound';

// ---[ styles ]----------------------------------------------------------------
export const LoggedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// ---[ import ]----------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';

// ---[ styles ]----------------------------------------------------------------
export const WelcomeScreen = () => {
  return (
    <>
      <p>WelcomeScreen</p>
      <div>
       <Link to="/login">ログイン</Link>
      </div>
      <div>
        <Link to="/register">登録</Link>
      </div>
    </>
  );
}

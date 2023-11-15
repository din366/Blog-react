import React, {Suspense, useContext, useState} from 'react';
import Count from "./components/Count";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div >
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О нас</Link>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path={'/about'} element={<AboutPageAsync />}/>
              <Route path={'/'} element={<MainPageAsync />}/>
            </Routes>
          </Suspense>
      </div>
      <Count />
    </div>

  );
};

export default App;
import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div >
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О нас</Link>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path={'/about'} element={<AboutPage />}/>
              <Route path={'/'} element={<MainPage />}/>
            </Routes>
          </Suspense>
      </div>
    </div>

  );
};

export default App;
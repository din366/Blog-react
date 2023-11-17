import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div >
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О нас</Link>
        <AppRouter />
      </div>
    </div>

  );
};

export default App;
import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <Suspense fallback="">
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>

      </div>
    </div>

  );
};

export default App;

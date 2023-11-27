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
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Suspense fallback="">
          <Navbar />
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

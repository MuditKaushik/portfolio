import React, { PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import './App.scss';
import { ProfileLinksComponent } from './shared/components/profile-links/profile-links.component';
import { SvgSymbolsComponent } from './shared/components/svg-symbols/svg.symbols.component';

export const App: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <SvgSymbolsComponent />
      <header className='fixed-top d-flex justify-content-center'>
        <div className='nav-scroller my-2'>
          <div className='d-flex flex-wrap justify-content-evenly link-container'>
            <ProfileLinksComponent />
          </div>
        </div>
      </header>
      <main className='container mt-5'>
        <div className='row justify-content-center align-content-center'>
          <div className='col-12 col-md-9 col-lg-10'>
            <ScrollRestoration />
            <Outlet />
          </div>
        </div>
      </main>
      <footer className='fixed-bottom'></footer>
    </React.Fragment>
  );
};

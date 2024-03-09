import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { DrawerComponent } from './shared/components/drawer-modal/drawer.component';
import { ProfileLinksComponent } from './shared/components/profile-links/profile-links.component';
import { UserProfile } from './shared/components/profile/profile.component';
import { SvgSymbolsComponent } from './shared/components/svg-symbols/svg.symbols.component';

const AppHeader: React.FC<PropsWithChildren> = (props) => {
  const targetLinkContainerId = 'app-link-container-target';
  return (
    <nav className="navbar">
      <div className="container-fluid justify-content-end">
        <button className="navbar-toggler focus-ring focus-ring-light" type="button" data-bs-toggle="offcanvas" data-bs-target={`#${targetLinkContainerId}`} aria-controls={targetLinkContainerId}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <DrawerComponent
          drawerChild={<UserProfile />}
          targetElementId={targetLinkContainerId}>
          <ProfileLinksComponent />
        </DrawerComponent>
      </div>
    </nav>
  );
};

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
            <Outlet />
          </div>
        </div>
      </main>
      <footer className='fixed-bottom'></footer>
    </React.Fragment>
  );
};

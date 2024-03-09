import React, { PropsWithChildren, ReactNode } from 'react';
import './drawer.component.scss';

interface IAppLinkProperties {
  targetElementId: string;
  drawerChild?: ReactNode;
};

export const DrawerComponent: React.FC<PropsWithChildren<IAppLinkProperties>> = (props) => {
  const linkContainerId = 'app-link-container';
  return (
    <div className="offcanvas offcanvas-end drawer-custom-bg" data-bs-scroll="true" tabIndex={-1} id={props.targetElementId} aria-labelledby={linkContainerId}>
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="vstack g-3">
          <React.Fragment>
            {props.drawerChild}
          </React.Fragment>
          <React.Fragment>
            {props.children}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};
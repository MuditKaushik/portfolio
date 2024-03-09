import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import './profile-links.component.scss';
import { SvgIconComponent } from '../svg-icons/svg-icon.component';

interface ILinkModel {
  name: string;
  routePath: string;
  icon?: string
};

export const ProfileLinksComponent: React.FC<PropsWithChildren> = (props) => {
  const profileLinks: Array<ILinkModel> = [
    {
      name: 'Home',
      routePath: 'home',
      icon: 'home'
    },
    {
      name: 'About',
      routePath: 'about',
      icon: 'about'
    },
    {
      name: 'Resume',
      routePath: 'resume',
      icon: 'resume'
    },
    {
      name: 'Contact',
      routePath: 'contact',
      icon: 'contact'
    }
  ];
  const createLinks = (link: ILinkModel, keyIndex: number) => {
    const isLinkActive = (active: boolean) => {
      const classList = ['nav-link', 'd-flex', 'justify-content-start', 'align-items-center', 'text-decoration-none'];
      if (active) {
        classList.push('active');
      }
      return classList.join(' ');
    }
    return (
      <NavLink to={{ pathname: link.routePath }} className={({ isActive }) => isLinkActive(isActive)} key={keyIndex}>
        {/* {
          link.icon && <SvgIconComponent className='bi pe-none me-2' width={16} height={16}>
            <use xlinkHref={`#${link.icon}`} />
          </SvgIconComponent>
        } */}
        <span>
          {link.name}
        </span>
      </NavLink>
    );
  };
  return (
    <nav className="nav nav-highlight justify-content-between" id="profile-link-pills-tab" role="tablist" aria-orientation="vertical">
      {
        profileLinks.map((link, index) => createLinks(link, index))
      }
    </nav>
  );
};
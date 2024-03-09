import React, { PropsWithChildren } from 'react';
import { SvgIconComponent } from '../svg-icons/svg-icon.component';
import './profile.component.scss';

export const UserProfile: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
      {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Mudit Kaushik</title>
        <defs>
          <clipPath id="profileImage">
            <rect width="100%" height="100%" fill="#777"/>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </clipPath>
        </defs>
        <image href='profile-img.jpg' width={160} height={215} x={0} y={-32} clipPath='url(#profileImage)'/>
      </svg> */}
      <h4 className='fw-normal'>Mudit Kaushik</h4>
      <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
        <a href="https://github.com/MuditKaushik" target='_blank' className='pe-auto' title='Github'>
          <SvgIconComponent className='pe-none' width={20} height={20}>
            <use xlinkHref={'#github'} />
          </SvgIconComponent>
        </a>
        <a href="https://www.linkedin.com/in/mudit-kaushik-62939a3a" target='_blank'  title='Linkedin'>
          <SvgIconComponent className='pe-none icon-hover' width={20} height={20} fill='currentColor'>
            <use xlinkHref={'#linkedin'} />
          </SvgIconComponent>
        </a>
      </div>
    </div>
  );
};
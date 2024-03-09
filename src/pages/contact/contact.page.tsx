import React from 'react';
import { SvgIconComponent } from '../../shared/components/svg-icons/svg-icon.component';
import './contact.page.scss';

export class ContactPage extends React.Component {
  render() {
    return (
      <div className='my-3'>
        <h4 className='page-heading-title'>Contact</h4>
        <p className='mt-4 mb-3'>
          I'm a developer with a passion for building user-friendly and impactful solutions.
          As a full-stack developer, I love collaborating with businesses to create awesome web applications.
          Whether you need to streamline workflows or boost user engagement, I'm here to help. Let's connect!
        </p>
        <div className='row'>
          <div className='col col-lg'>
            <address className='d-flex justify-content-start'>
              <i className='align-content-start'>
                <SvgIconComponent className='bi pe-none' width={25} height={25}>
                  <use xlinkHref={`#location`} />
                </SvgIconComponent>
              </i>
              <span className='address-location'>
                <h5>Location:</h5>
                <p>Bengaluru</p>
              </span>
            </address>
          </div>
          <div className='col col-lg'>
            <address className='d-flex justify-content-start'>
              <i className='align-content-start'>
                <SvgIconComponent className='bi pe-none' width={25} height={25}>
                  <use xlinkHref={`#mail`} />
                </SvgIconComponent>
              </i>
              <span className='address-location'>
                <h5>Email Address:</h5>
                <p>
                  <a href='mailto:muditm18@gmail.com'>muditm18[at]gmail[dot]com</a>
                </p>
              </span>
            </address>
          </div>
        </div>
        <div className='row'>
          <div className='col col-lg'>
            <address className='d-flex justify-content-start'>
              <i className='align-content-start'>
                <SvgIconComponent className='bi pe-none' width={25} height={25}>
                  <use xlinkHref={`#linkedin`} />
                </SvgIconComponent>
              </i>
              <span className='address-location'>
                <h5>Professional:</h5>
                <p>
                  <a href='https://www.linkedin.com/in/mudit-kaushik-62939a3a' target='_blank' rel='noreferrer'>Linkedin</a>
                </p>
              </span>
            </address>
          </div>
          <div className='col col-lg'>
            <address className='d-flex justify-content-start'>
              <i className='align-content-start'>
                <SvgIconComponent className='bi pe-none' width={25} height={25}>
                  <use xlinkHref={`#github`} />
                </SvgIconComponent>
              </i>
              <span className='address-location'>
                <h5>OpenSource:</h5>
                <p>
                  <a href='https://github.com/MuditKaushik' target='_blank' rel='noreferrer'>Github</a>
                </p>
              </span>
            </address>
          </div>
        </div>
      </div >
    );
  }
};
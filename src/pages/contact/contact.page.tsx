import React from 'react';
import './contact.page.scss';
import { SvgIconComponent } from '../../shared/components/svg-icons/svg-icon.component';

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
        <div className='row row-cols-3'>
          <div className='col col-lg-4'>
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
          <div className='col col-lg-4'>
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
          <div className='col col-lg-4'>
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
        </div>
      </div>
    );
  }
};
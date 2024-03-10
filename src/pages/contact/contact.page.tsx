import React, { ReactNode } from 'react';
import { SvgIconComponent } from '../../shared/components/svg-icons/svg-icon.component';
import './contact.page.scss';
import { IContactDetail, ContactDetailList } from '../../model/contact.model';

export class ContactPage extends React.Component {
  createContactAddress(contact: IContactDetail): ReactNode {
    return (
      <address className='d-flex justify-content-start'>
        <i className='align-content-start'>
          <SvgIconComponent className='bi pe-none' width={25} height={25}>
            <use xlinkHref={`#${contact.icon}`} />
          </SvgIconComponent>
        </i>
        <span className='address-location'>
          <h5>{contact.heading}:</h5>
          {
            contact.text && <p>{contact.text}</p>
          }
          {
            contact.link && <p><a href={contact.link.url}>{contact.link.name}</a></p>
          }
        </span>
      </address>
    );
  };
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
          {
            ContactDetailList.map((contact, index) => {
              return (
                <div className='col col-lg-6' key={index}>
                  {this.createContactAddress(contact)}
                </div>
              );
            })
          }
        </div>
      </div >
    );
  }
};
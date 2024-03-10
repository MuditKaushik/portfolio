import React from 'react';
import { ResumeEducationalDataList, ResumeProfessionalDataList } from '../../model/resume.model';
import { ResumeItemComponent } from './resume-item/resume-item.component';
import './resume.page.scss';

export class ResumePage extends React.Component {
  render() {
    return (
      <div className='my-3'>
        <h3 className='page-heading-title'> Career Objective</h3>
        <p className='my-4'>
          Highly motivated developer seeking a full-stack development role to leverage cloud technologies.
          I possess the skills to create web applications from scratch, ensuring scalability and maintainability for long-term success.
          Eager to contribute to a team environment and build innovative solutions that drive results.
        </p>
        <div className='row resume'>
          <div className='col-12 col-lg-8 mb-3'>
            <h3 className='fw-bold my-1 mb-2'>Professional Experience</h3>
            {
              ResumeProfessionalDataList.map((professionalData, index) => {
                return (
                  <ResumeItemComponent
                    key={index}
                    heading={professionalData.heading}
                    subHeading={professionalData.subHeading}
                    link={professionalData.link}
                    professionalDetails={professionalData.professionalDetails}
                  />
                );
              })
            }
          </div>
          <div className='col-12 col-lg-4'>
            <div className='position-sticky' style={{ top: '5rem' }}>
              <h3 className='fw-bold my-1 mb-2'>Education</h3>
              {
                ResumeEducationalDataList.map((educationData, index) => {
                  return (
                    <ResumeItemComponent
                      key={index}
                      heading={educationData.heading}
                      subHeading={educationData.subHeading}
                      link={educationData.link}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};
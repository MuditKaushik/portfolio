import React from 'react';
import { AboutSkillList } from '../../model/about.model';
export class AboutPage extends React.Component {
  getColorScheme(skillCoved: number) {
    return (skillCoved < 70) ? 'bg-info' : String();
  };
  createSkillsBadge(skill: string, index: number) {
    return (<span key={index} className="badge bg-primary-subtle text-primary-emphasis rounded-pill">{skill}</span>);
  };
  render() {
    return (
      <div className='my-3'>
        <div id="about-summary">
          <h3 className='page-heading-title'>Summary</h3>
          <div className='mt-4 mb-3'>
            <p>
              I'm a passionate developer with 10 years of experience crafting web applications and software solutions.
              Throughout my career, I've honed my skills in various programming languages and frameworks,
              gaining expertise in
              {
                AboutSkillList.map((skill, indx) => this.createSkillsBadge(skill.name, indx))
              }.
            </p>
            <p>
              I thrive in collaborative environments, working effectively with designers, product managers, and other developers to translate ideas into user-friendly and efficient applications.
              I'm constantly seeking new challenges and opportunities to learn and grow as a developer, staying up-to-date with the latest technologies and trends in the ever-evolving world of software development.
            </p>
          </div>
        </div>
        <div id="about-skills">
          <h3 className='page-heading-title'>Skills</h3>
          <p className='mt-4'>
            In my 10 years of experience as a developer,
            I've had the opportunity to work with a variety of programming languages,
            each offering unique strengths and suited to specific aspects of web application development.
          </p>
          <div className='row row-cols-2 mt-3 mb-3'>
            {
              AboutSkillList.map((skill, index) => {
                return (
                  <div className='col-12 col-md-6 col-lg-6' key={index}>
                    <div className='d-flex justify-content-between align-content-between'>
                      <span className='fs-6 fw-semibold mx-1'>{skill.name}</span>
                      <span className='fs-6 fw-semibold mx-1'>{skill.coverage}%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={skill.coverage} aria-valuemin={0} aria-valuemax={100} style={{ height: '10px', marginTop: '5px' }}>
                      <div className={`progress-bar ${this.getColorScheme(skill.coverage)}`} style={{ width: `${skill.coverage}%` }}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
};
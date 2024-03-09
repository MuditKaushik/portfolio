import { Component, FC, Fragment, PropsWithChildren, ReactNode } from 'react';
import { SvgIconComponent } from '../../../shared/components/svg-icons/svg-icon.component';

export interface IUserLink {
  url: string;
  name: string;
};

export interface IProfessionalItem {
  clientProjects: Array<string>;
  highlights: Array<string>;
  responsibilities: Array<string>;
  achievements: Array<string>;
  technology: Array<string>;
};

interface IResumeItemProperty {
  heading: string;
  subHeading: string;
  link?: IUserLink;
  professionalDetails?: IProfessionalItem;
};

const ProfessionalDetailComponent: FC<PropsWithChildren<IProfessionalItem>> = (props) => {
  return (
    <Fragment>
      <h5 className='resume-item-sub-heading'>Client/Project:</h5>
      <ul>
        {
          props.clientProjects.map((projectAndClient, index) => <li className='fst-italic fw-semibold' key={index}>{projectAndClient}</li>)
        }
      </ul>
      <h5 className='resume-item-sub-heading'>Roles and Responsibilities :</h5>
      <ul>
        {
          props.responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)
        }
      </ul>
      {
        props.highlights.length > 0 && <Fragment>
          <h5 className='resume-item-sub-heading'>Highlights:</h5>
          <ul>
            {
              props.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)
            }
          </ul>
        </Fragment>
      }
      {
        props.achievements.length > 0 && <Fragment>
          <h5 className='resume-item-sub-heading'>
            Achievements/Awards
            <SvgIconComponent width={20} height={20}>
              <use xlinkHref={`#medal`} />
            </SvgIconComponent>
            :
          </h5>
          <ul>
            {
              props.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)
            }
          </ul>
        </Fragment>
      }
      <h5 className='resume-item-sub-heading'>Technology :</h5>
      <div className='justify-content-start mx-1'>
        {
          props.technology.map((technology, index) => <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill" key={index}>{technology}</span>)
        }
      </div>
    </Fragment >
  );
};

export class ResumeItemComponent extends Component<IResumeItemProperty>{
  render(): ReactNode {
    return (
      <div className='resume-item'>
        <h4 className='resume-item-heading'>{this.props.heading}</h4>
        <h5 className='resume-item-sub-heading'>
          {this.props.subHeading}
        </h5>
        {
          this.props.link && <p>
            <em>
              <a className='text-decoration-none' href={this.props.link.url} target='_blank' rel="noreferrer">
                {this.props.link.name}
              </a>
            </em>
          </p>
        }
        {
          this.props.professionalDetails && <ProfessionalDetailComponent
            clientProjects={this.props.professionalDetails.clientProjects}
            highlights={this.props.professionalDetails.highlights}
            responsibilities={this.props.professionalDetails.responsibilities}
            achievements={this.props.professionalDetails.achievements}
            technology={this.props.professionalDetails.technology} />
        }
      </div>
    );
  }
}
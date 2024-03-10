export interface IAnchorLink {
  url: string;
  name: string;
};

export interface IResumeProfessionalModel {
  clientProjects: Array<string>;
  highlights: Array<string>;
  responsibilities: Array<string>;
  achievements: Array<string>;
  technology: Array<string>;
};

export interface IResumeModel {
  heading: string;
  subHeading: string;
  link: IAnchorLink;
  professionalDetails?: IResumeProfessionalModel;
};

export const ResumeEducationalDataList: Array<IResumeModel> = [
  {
    heading: 'Bachelor of Technology',
    subHeading: 'Computer Science and Technology (2009 - 2013)',
    link: {
      name: 'Quantum School of Technology, Uttarakhand, 247167',
      url: 'https://www.quantumuniversity.edu.in/'
    }
  },
  {
    heading: 'Senior Secondary School',
    subHeading: 'Computer Science (2007 - 2008)',
    link: {
      name: 'Adarsh Bal Niketan, IIT Campus Roorkee, Uttarakhand, 247667',
      url: 'https://www.abnschool.com/'
    }
  },
  {
    heading: 'High School',
    subHeading: 'Science (2005 - 2006)',
    link: {
      name: 'Adarsh Bal Niketan, IIT Campus Roorkee, Uttarakhand, 247667',
      url: 'https://www.abnschool.com/'
    }
  },
];

export const ResumeProfessionalDataList: Array<IResumeModel> = [
  {
    heading: 'Lead Software Engineer Integration',
    subHeading: 'March 2021 - Present',
    link: { name: 'LeadSquared, Bangalore', url: 'https://www.leadsquared.com/' },
    professionalDetails: {
      clientProjects: ['Poonawalla Finance'],
      responsibilities: [
        'Provide integration solution with LeadSquared System.',
        'Communicate with client on a daily basis for requirements gathering, new development and Integrations.',
        'Collaborating with different teams, helping peer developers, mentoring junior developers and review codes.',
        'Implementing coding best practices.',
        'Deployment and maintaining code on UAT and Production.'
      ],
      achievements: ['Spotlight award.', 'Individual contribution award.'],
      highlights: [
        'Integrate several Government and Non-government organization BFSI related APIs with Poonawalla system.',
        'Setup and Maintaining EC2 Microservice over VPC tunneling for secure exchange of data between third-party and Poonawalla System.',
        'Implemented end-to-end POCs for migrating documents from one system to another system.',
        'Helping cross team members to integrate Salesforce and Setup AWS lambda functions.'
      ],
      technology: ['ReactJs', 'Nodejs', 'Python', 'AWS Lambda', 'AWS EC2']
    }
  },
  {
    heading: 'Senior Fullstack Developer',
    subHeading: 'April 2020 - Feb 2021',
    link: { name: 'Reewa Tech, Bangalore', url: 'https://www.rewaatech.com/en/' },
    professionalDetails: {
      clientProjects: ['Multi-channels Inventory Management System (MIMS)'],
      responsibilities: [
        'Gathering requirements from Business Analyst.',
        'Implementing new features in e-commerce product.',
        'Refine existing code and resolve existing bugs.'
      ],
      achievements: [],
      highlights: [],
      technology: ['Angular 12', 'Bootstrap', 'Typescript', 'JavaScript', 'NgRx', 'RxJs', 'Webpack', 'Nodejs', 'AWS Lambda', 'AWS EC2']
    }
  },
  {
    heading: 'Senior Software Engineer II',
    subHeading: 'June 2017 - April 2020',
    link: { name: 'PowerSchool LLP, Bangalore', url: 'https://www.powerschool.com/' },
    professionalDetails: {
      clientProjects: ['Unified Classroom'],
      responsibilities: [
        'Gathering product requirements from Business analyst.',
        'Implement and write code for new features using agile methodology.',
        'Write unit test cases and Resolve bugs.',
        'Deployment of Code in Development and UAT environment.',
        'Helping peer developers and review codes.'
      ],
      achievements: [
        'Won organization wide Hackathon.',
        'Implemented several successful POCs, which integrated with Unified Classroom product later.'
      ],
      highlights: [
        'Created Intervention module from scratch.',
        'Integrated Google G-suite.',
        'Refactored and added new features to already existing assignment module.'
      ],
      technology: ['Angular 6', 'TypeScript', 'RxJs', 'NgRx', 'Node.js', 'MySQL DB', 'Bootstrap', 'Webpack']
    }
  },
  {
    heading: 'Software Engineer, Senior Software Engineer',
    subHeading: 'June 2015 - May 2017',
    link: { name: 'Tavant Technologies Pvt. Ltd, Bangalore', url: 'https://tavant.com/' },
    professionalDetails: {
      clientProjects: ['Blink', 'Consumer Portfolio Landing (CPL)', 'Third Party Organization (TPO)'],
      responsibilities: [
        'Gathering product requirements from Business analyst.',
        'Implement and write code for new features using agile methodology.'
      ],
      achievements: [],
      highlights: [],
      technology: ['C#', 'ASP.NET MVC Razor 5', 'EntityFramework ORM', 'LINQ', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  },
  {
    heading: 'Software Engineer',
    subHeading: 'September 2014 - May 2015',
    link: { name: 'Ejyle Technologies Pvt. Ltd, Bangalore', url: 'https://ejyle.com/' },
    professionalDetails: {
      clientProjects: ['Profile Desk', 'Dev Accelerate ECP (Enterprise Control Panel)'],
      responsibilities: [
        'Gathering product requirements from Business analyst.',
        'Implement and write code for new features.'
      ],
      achievements: [],
      highlights: [],
      technology: ['C#', 'ASP.NET MVC Razor 5', 'EntityFramework ORM', 'ASP.NET Web APIs C#', 'LINQ', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  },
  {
    heading: '.NET Developer',
    subHeading: 'May 2013 - June 2014',
    link: { name: 'Telent Edge, Hyderabad', url: 'https://talentedge.com/' },
    professionalDetails: {
      clientProjects: ['Schedule Management'],
      responsibilities: [
        'Gathering product requirements from Business analyst.',
        'Implement and write code for new features.'
      ],
      achievements: [],
      highlights: [],
      technology: ['ASP.NET Web Forms', 'SQL Server 2008']
    }
  }
]; 
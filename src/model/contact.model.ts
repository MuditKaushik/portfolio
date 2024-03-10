import {IAnchorLink} from './resume.model';
export interface IContactDetail {
  heading: string;
  icon: string
  text?: string;
  link?: IAnchorLink
};

export const ContactDetailList:Array<IContactDetail> = [
  {
    heading: 'Location',
    text: 'Bengaluru',
    icon: 'location',
    link: undefined
  },
  {
    heading: 'Email Address',
    text: undefined,
    icon: 'mail',
    link: {name:'muditm18[at]gmail[dot]com', url: 'mailto:muditm18@gmail.com'}
  },
  {
    heading: 'Professional',
    text: undefined,
    icon: 'linkedin',
    link:{name: 'Linkedin', url:'https://www.linkedin.com/in/mudit-kaushik-62939a3a'}
  },
  {
    heading: 'OpenSource',
    text: undefined,
    icon: 'github',
    link: {name: 'Github', url: 'https://github.com/MuditKaushik'}
  }
];
export interface IAboutSkill {
  name: string;
  coverage: number;
};

export const TotalExperience = 11;

export const AboutSkillList: Array<IAboutSkill> = [
  { name: 'Angular', coverage: 80 },
  { name: 'ReactJs', coverage: 70 },
  { name: 'JavaScript', coverage: 85 },
  { name: 'TypeScript', coverage: 80 },
  { name: 'Nodejs', coverage: 85 },
  { name: 'ExpressJs', coverage: 85 },
  { name: 'Microservice', coverage: 70 },
  { name: 'Jest TDD', coverage: 70 },
  { name: 'AWS Lambda', coverage: 65 },
  { name: 'AWS EC2', coverage: 65 },
  { name: 'MongoDB', coverage: 50 },
  { name: 'Docker', coverage: 50 },
  { name: 'CI/CD', coverage: 50 },
  { name: 'Rust', coverage: 40 },
];
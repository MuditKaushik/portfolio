export interface IAboutSkill {
  name: string;
  coverage: number;
};

export const AboutSkillList: Array<IAboutSkill> = [
  { name: 'ReactJs', coverage: 60 },
  { name: 'Angular', coverage: 80 },
  { name: 'Rust', coverage: 40 },
  { name: 'JavaScript', coverage: 85 },
  { name: 'TypeScript', coverage: 75 },
  { name: 'Nodejs', coverage: 70 },
  { name: 'AWS Lambda', coverage: 60 },
  { name: 'AWS EC2', coverage: 60 },
  { name: 'ExpressJs', coverage: 80 },
  { name: 'Docker', coverage: 65 }
];
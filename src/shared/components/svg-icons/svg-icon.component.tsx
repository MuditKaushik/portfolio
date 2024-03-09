import React, { PropsWithChildren, SVGProps } from 'react';
import './svg-icon.component.scss';

export const SvgIconComponent: React.FC<PropsWithChildren<SVGProps<SVGSVGElement>>> = (props) => {
  return (
    <svg {...props}>
      {props.children}
    </svg>
  );
};
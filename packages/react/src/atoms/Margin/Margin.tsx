import React, { ReactNode } from 'react';
import { Spacing } from '@mz-ds/foundation/lib';

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children?: ReactNode;
}

const Margin: React.FC<MarginProps> = ({
  space = 'xxxs',
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className = `mz-margin-${space}`;
  }

  if (left) {
    className = `${className} mz-margin-left-${space}`;
  }

  if (right) {
    className = `${className} mz-margin-right-${space}`;
  }

  if (top) {
    className = `${className} mz-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} mz-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;

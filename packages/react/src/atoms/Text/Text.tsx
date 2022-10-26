import React from 'react';
import { FontSize } from '@mz-ds/foundation/lib';

export interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `mz-text mz-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;

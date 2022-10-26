import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className="mz-button-container">{label}</button>;
};

export default Button;

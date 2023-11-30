import { type ButtonHTMLAttributes } from 'react';

export const Button = ({...buttonProperties}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
    {...buttonProperties}
    >
        Click me!!
    </button>);
};

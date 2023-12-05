import { type PropsWithChildren } from 'react';

import classNames from 'classnames';

import { ButtonApperance, type ButtonProperties } from './button.type';
import ButtonStyle from './ButtonStyle.module.scss';

export const Button = ({
  icon,
  children,
  apperance = ButtonApperance.General,
  ...buttonProperties
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      {...buttonProperties}
      className={classNames({
        [ButtonStyle.btn]: true,
        [ButtonStyle[apperance]]: true
      })}
    >
      {icon && <div>{icon}</div>}
      {children}
    </button>
  );
};

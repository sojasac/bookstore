import { type PropsWithChildren } from 'react';

import InputFieldStyle from './inputField.module.scss';
import { type InputFieldProperties } from './inputField.type';

export const InputField = ({
  label,
  id,
  error,
  shouldFitContainer,
  children,
  ...inputProperties
}: PropsWithChildren<InputFieldProperties>) => {
  return (
    <div
      style={shouldFitContainer ? { width: '100%' } : undefined}
      className={InputFieldStyle.container}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        {...inputProperties}
      />
      {error && <div>{error}</div>}
      {children}
    </div>
  );
};

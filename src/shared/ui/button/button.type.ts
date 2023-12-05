import { type ReactElement, type ButtonHTMLAttributes } from 'react';

export const ButtonApperance = {
  General: 'general',
  Panel: 'panel'
} as const;

export type ButtonApperances =
  (typeof ButtonApperance)[keyof typeof ButtonApperance];

export type ButtonProperties = {
  apperance?: ButtonApperances;
  icon?: ReactElement | null;
} & ButtonHTMLAttributes<HTMLButtonElement>;

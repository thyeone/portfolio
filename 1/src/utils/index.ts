import { EMAIL_REGEX } from '@constants/home';

export const isEmail = (value: string): boolean => {
  if (EMAIL_REGEX.test(value)) return true;

  return false;
};

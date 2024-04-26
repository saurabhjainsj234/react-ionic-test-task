import { ChangeEvent } from "react";

export interface ContainerProps {
  name: string;
}

export interface FormInput {
  [key: string]: string | undefined;
  username?: string;
  dob?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  isAgree?: string;
}

export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  [key: string]: string | unknown;
  target: HTMLInputElement & {
    name: string;
    value: string;
  };
}
export interface InputProps {
  [key: string]: string | any;
  value: string | undefined;
  handleChange: (
    detail: { event: InputEvent; value: string },
    name: string
  ) => void | undefined;
}

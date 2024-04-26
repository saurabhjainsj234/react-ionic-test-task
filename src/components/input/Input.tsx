import { IonInput, IonInputPasswordToggle, IonText } from "@ionic/react";
import React from "react";
import { InputChangeEvent, InputProps } from "../../types/type";

const Input: React.FC<InputProps> = (props) => {
  const {
    handleChange,
    errorMessage,
    name,
    showPasswordIcon,
    children,
    showText,
    ...rest
  } = props;
  const handleIonInput = (e: CustomEvent): void => {
    const { detail } = e as CustomEvent<InputChangeEvent>;
    handleChange(detail as any, name);
  };

  return (
    <>
      <div className="mb-6">
        <IonInput
          labelPlacement="stacked"
          fill="outline"
          className="input-custom"
          onIonInput={handleIonInput}
          name={name}
          {...rest}
        >
          {children}
          {showPasswordIcon && (
            <IonInputPasswordToggle slot="end" color="dark" />
          )}
        </IonInput>
        <IonText className="text-sm">
          {errorMessage && (
            <span className="error text-red-600 ">{errorMessage}</span>
          )}
          {showText &&
            `Password should contain at least 8 characters, 1 special symbol
            character, 1 number, 1 uppercase letter`}
        </IonText>
      </div>
    </>
  );
};

export default Input;

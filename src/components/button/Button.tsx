import React from "react";
import { IonButton } from "@ionic/react";
import "./button.css";
const Button: React.FC<any> = (props) => {
  return <IonButton {...props}>Create Account</IonButton>;
};

export default Button;

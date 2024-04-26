import React from "react";
import { IonCheckbox, IonText } from "@ionic/react";
import "./checkbox.css";

const Checkbox = (props: any) => {
  const { handleChange, errorMessage, name } = props;
  const handleOnchange = (event: any) => {
    event.target.checked
      ? handleChange({ value: "agreed" }, name)
      : handleChange({ value: "" }, name);
  };
  return (
    <>
      <IonCheckbox onClick={handleOnchange} {...props} class="checkBox-icon" />
      <IonText color="danger">
        {errorMessage && <span className="error">{errorMessage}</span>}
      </IonText>
    </>
  );
};

export default Checkbox;

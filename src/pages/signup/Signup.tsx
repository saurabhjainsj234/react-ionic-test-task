import React, { FormEvent, useState } from "react";
import { IonContent, IonPage, IonText, IonAlert } from "@ionic/react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FormInput, InputChangeEvent } from "../../types/type";
import Checkbox from "../../components/checkbox/checkbox";
import "./signup.css";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormInput>({
    username: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: "",
  });
  const [errors, setErrors] = useState<FormInput>({});

  const handleChange = ({ value }: { value: string }, name: string) => {
    const validationErrors: any = validateForm({
      ...formData,
      [name]: value,
    });
    setFormData({
      ...formData,
      [name]: value,
    });
    if (validationErrors[name]) {
      setErrors({
        ...errors,
        [name]: validationErrors[name],
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data: FormInput) => {
    const { username, dob, email, password, confirmPassword, isAgree } = data;
    const errors: FormInput = {};
    if ((username && username.length < 4) || !username) {
      errors.username = "Username must be at least 4 characters long";
    }
    const dobDate = new Date(dob as string);
    const now = new Date();
    if (dobDate > now) {
      errors.dob = "Date of birth cannot be in the future";
    }
    if (!dob) {
      errors.dob = "Please select date";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email || "")) {
      errors.email = "Invalid email address";
    }
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':",./<>?])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;

    if ((password && !passwordRegex.test(password)) || !password) {
      errors.password = `Password should contain at least 8 characters, 1 special symbol
      character, 1 number, 1 uppercase letter`;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Password not provided";
    }
    return errors;
  };

  function isFormEmpty() {
    return Object.values(formData).some((value) => value == "");
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <div className="container mx-auto px-4">
          <IonAlert
            trigger="present-alert"
            isOpen={isOpen}
            header="Account created successfully"
            subHeader={`Username: ${formData.username}`}
            message={`Accont object is: ${JSON.stringify(formData)}`}
            buttons={["Close"]}
            onDidDismiss={() => setIsOpen(false)}
          ></IonAlert>
          <IonText>
            <h1 className="font-semibold text-3xl text-black mb-1 ">
              Let's get started
            </h1>
            <h6 className="text-base font-normal mt-0 mb-4">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-base">
                Login
              </a>
            </h6>
          </IonText>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              labelPlacement="stacked"
              fill="outline"
              placeholder="Enter username"
              className="input-custom font-normal text-base text-black"
              handleChange={handleChange}
              name="username"
              value={formData.username}
              errorMessage={errors.username}
            >
              Username
            </Input>
            <Input
              labelPlacement="stacked"
              fill="outline"
              //   placeholder="DD /MM /YYYY"
              className="input-custom font-normal text-base text-black"
              autocapitalize="on"
              handleChange={handleChange}
              name="dob"
              type="date"
              value={formData.dob}
              errorMessage={errors.dob}
            >
              Date of Birth
            </Input>
            <Input
              labelPlacement="stacked"
              fill="outline"
              placeholder="Enter email address"
              className="input-custom font-normal text-base text-black"
              handleChange={handleChange}
              name="email"
              value={formData.email}
              errorMessage={errors.email}
            >
              Email address
            </Input>
            <Input
              labelPlacement="stacked"
              fill="outline"
              placeholder="Enter password"
              className="input-custom font-normal text-base text-black"
              handleChange={handleChange}
              name="password"
              type="password"
              value={formData.password}
              errorMessage={errors.password}
              showPasswordIcon={true}
              showText={!errors.password ? true : false}
            >
              Password
            </Input>
            <Input
              labelPlacement="stacked"
              fill="outline"
              placeholder="Confirm password"
              className="input-custom font-normal text-base text-black"
              handleChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword}
              errorMessage={errors.confirmPassword}
              showPasswordIcon={true}
            >
              Confirm password
            </Input>
            <div className="flex items-center">
              <Checkbox
                handleChange={handleChange}
                name="isAgree"
                formData={formData}
              />
              <label className="font-normal text-base text-black ml-4">
                {" "}
                I agree to the{" "}
                <a href="/toc" className="underline">
                  {" "}
                  Terms and Conditions{" "}
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline">
                  {" "}
                  Privacy Policy{" "}
                </a>{" "}
                to the app.
              </label>
            </div>
            <Button
              type="submit"
              id="present-alert"
              className="mt-16 mb-4 h-12 w-full rounded-lg text-white text-base font-medium capitalize"
              disabled={
                Object.keys(errors).some((key: string) => errors[key]) ||
                isFormEmpty()
              }
            >
              Create Account
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

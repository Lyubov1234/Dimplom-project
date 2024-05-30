import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuth from '#hooks/useAuth';
import useThemeColors from '#hooks/useThemeColors';
import { SignInDataType } from '#models/authorizationTypes';
import { RouterLocationsEnum } from '#router/Router';
import { signInValidationSchema } from './signInValidationSchema';
import Button from '#ui/button';
import InputLabel from '#ui/inputLabel';
import {
  Input,
  InputArea,
  SignFormStyled,
  ErrorMessage,
} from '#containers/SignUpForm/SignUpFormStyled';

const SignInForm: React.FC = () => {
  const { inputTextColor, inputBorderColor } = useThemeColors();

  const [singInError, setSingInError] = useState<string | undefined>(undefined);

  const { signIn } = useAuth();

  const navigation = useNavigate();

  const initialFormikValues: SignInDataType = {
    email: '',
    password: '',
  };

  const handleSubmit = (formikValues: SignInDataType) => {
    const { isSuccess, error } = signIn({
      email: formikValues.email,
      password: formikValues.password,
    });
    if (error) {
      setSingInError(error);
      setTimeout(() => {
        setSingInError(undefined);
      }, 7000);
      return;
    }
    if (isSuccess) {
      navigation(RouterLocationsEnum.main);
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: initialFormikValues,
    validationSchema: signInValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleDone = () => {
    if (formik.errors.password) {
      setSingInError(formik.errors.password);
      setTimeout(() => {
        setSingInError(undefined);
      }, 3000);
      return;
    }

    if (formik.errors.email) {
      setSingInError(formik.errors.email);
      setTimeout(() => {
        setSingInError(undefined);
      }, 3000);
      return;
    }

    formik.submitForm();
  };

  return (
    <SignFormStyled>
      <InputArea>
        <InputLabel labelFor="email">email</InputLabel>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          $color={inputTextColor}
          $borderColor={inputBorderColor}
        />
        <InputLabel labelFor="password">password</InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          $color={inputTextColor}
          $borderColor={inputBorderColor}
        />
      </InputArea>
      {singInError && <ErrorMessage>{singInError}</ErrorMessage>}
      <Button type={'submit'} onClick={handleDone}>
        sign in
      </Button>
    </SignFormStyled>
  );
};

export default SignInForm;

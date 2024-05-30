import React, { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from '#hooks/useAuth';
import useThemeColors from '#hooks/useThemeColors';
import { setIsSignUpActive } from '#store/reducers/userReducer';
import { useAppDispatch } from '#store/store';
import { SingUpDataType } from '#models/authorizationTypes';
import { signUpValidationSchema } from './signUpValidationSchema';
import Button from '#ui/button';
import InputLabel from '#ui/inputLabel';
import {
  ErrorMessage,
  Input,
  InputArea,
  SignFormStyled,
} from './SignUpFormStyled';

const SignUpForm: React.FC = () => {
  const { inputBorderColor, inputTextColor } = useThemeColors();

  const { signUp } = useAuth();

  const dispatch = useAppDispatch();

  const [singUpError, setSingUpError] = useState<string | undefined>(undefined);

  const initialFormikValues: SingUpDataType = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  const handleSubmit = (formikValues: SingUpDataType) => {
    const { isSuccess, error } = signUp({
      password: formikValues.password,
      email: formikValues.email,
      name: formikValues.name,
      confirmedPassword: formikValues.confirmedPassword,
    });

    if (error) {
      setSingUpError(error);
      return;
    }

    if (isSuccess) {
      formik.resetForm();
      dispatch(setIsSignUpActive('1'));
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: initialFormikValues,
    validationSchema: signUpValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleDone = () => {
    if (formik.errors) {
      console.log(formik.errors);
      return;
    }
    formik.submitForm();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <SignFormStyled>
        <InputArea>
          <InputLabel labelFor="name">name</InputLabel>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : null}
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
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
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
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <InputLabel labelFor="confirmedPassword">confirm password</InputLabel>
          <Input
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            placeholder="Confirmed your password"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
          />
          {formik.touched.confirmedPassword &&
          formik.errors.confirmedPassword ? (
            <ErrorMessage>{formik.errors.confirmedPassword}</ErrorMessage>
          ) : null}
        </InputArea>
        {singUpError && <ErrorMessage>{singUpError}</ErrorMessage>}
        <Button type="submit" onClick={handleDone}>
          sign up
        </Button>
      </SignFormStyled>
    </form>
  );
};

export default SignUpForm;

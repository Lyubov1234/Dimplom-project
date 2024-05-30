import React, {
  BaseSyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFormik } from 'formik';
import md5 from 'md5';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppSelector } from '#store/store';
import { ThemeContext } from '#store/context/ThemeContext';
import useAuth from '#hooks/useAuth';
import useThemeColors from '#hooks/useThemeColors';
import { SingUpDataType } from '#models/authorizationTypes';
import InputLabel from '#ui/inputLabel';
import Divider from '#ui/divider';
import Button from '#ui/button';
import InfoMessage from '#ui/infoMessage';
import { changeInfoValidationSchema } from './changeInfoValidationSchema';
import {
  AccountFormStyled,
  FormSubtitle,
  InputGroupWrapper,
  Input,
  InputWrapper,
  ButtonWrapper,
  ReverseButton,
  VisibilityWrapper,
  InputInfoMessage,
} from './AccountFormStyled';

const AccountForm: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const { theme } = useContext(ThemeContext);

  const { changeInfo } = useAuth();

  const {
    inputTextColor,
    inputBorderColor,
    textColorBlack,
    buttonBgColor,
    reverseButtonBgColor,
    dividerColor,
    reverseButtonHoverColor,
  } = useThemeColors();

  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [changeInfoError, setChangeInfoError] = useState<any | undefined>(
    undefined
  );
  const [isOldPasswordDisabled, setIsOldPasswordDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    if (!activeUser) return;
    const { name, email } = activeUser;
    formik.setFieldValue('name', name);
    formik.setFieldValue('email', email);
  }, []);

  const initialFormikValues: SingUpDataType = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  const handleSubmit = (formikValues: SingUpDataType) => {
    if (!activeUser) return;
    if (!formik.errors) return;

    const { isSuccess, error } = changeInfo({
      id: activeUser.id,
      name: formikValues.name !== '' ? formikValues.name : activeUser.name,
      email: formikValues.email !== '' ? formikValues.email : activeUser.email,
      passwordHash:
        formikValues.password !== ''
          ? md5(formikValues.password)
          : activeUser.passwordHash,
    });
    if (error) {
      setChangeInfoError(error);
    }
    if (isSuccess) {
      formik.resetForm();
      setIsPasswordMatch(false);
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: initialFormikValues,
    validationSchema: changeInfoValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleOldPasswordChange = (e: BaseSyntheticEvent) => {
    if (!activeUser) return;
    const { passwordHash } = activeUser;
    if (md5(e.target.value) === passwordHash) {
      setIsPasswordMatch(true);
      setIsOldPasswordDisabled(true);
    }
    if (md5(e.target.value) !== passwordHash) {
      setIsPasswordMatch(false);
    }
  };

  return (
    <AccountFormStyled>
      <FormSubtitle $color={textColorBlack}>profile</FormSubtitle>
      <InputGroupWrapper>
        <InputWrapper>
          <InputLabel labelFor="name">name</InputLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
            disabled={!isPasswordMatch}
          />
          {formik.touched.name && formik.errors.name ? (
            <InputInfoMessage>{formik.errors.name}</InputInfoMessage>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <InputLabel labelFor="email">email</InputLabel>
          <Input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
            disabled={!isPasswordMatch}
          />
          {formik.touched.email && formik.errors.email ? (
            <InputInfoMessage>{formik.errors.email}</InputInfoMessage>
          ) : null}
        </InputWrapper>
      </InputGroupWrapper>
      <FormSubtitle $color={textColorBlack}>password</FormSubtitle>
      <InputGroupWrapper>
        <InputWrapper>
          <InputLabel labelFor="oldPassword">Password</InputLabel>
          <VisibilityWrapper>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              id="oldPassword"
              name="oldPassword"
              onChange={handleOldPasswordChange}
              $color={inputTextColor}
              $borderColor={inputBorderColor}
              disabled={isOldPasswordDisabled}
            />
            <IconButton
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              sx={{ color: textColorBlack }}
            >
              {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </VisibilityWrapper>
        </InputWrapper>
      </InputGroupWrapper>
      <InputGroupWrapper>
        <InputWrapper>
          <InputLabel labelFor="password">new password</InputLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
            disabled={!isPasswordMatch}
          />
          {formik.touched.password && formik.errors.password ? (
            <InputInfoMessage>{formik.errors.password}</InputInfoMessage>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <InputLabel labelFor="confirmedPassword">
            confirm new password
          </InputLabel>
          <Input
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
            disabled={!isPasswordMatch}
          />
          {formik.touched.confirmedPassword &&
          formik.errors.confirmedPassword ? (
            <InputInfoMessage>
              {formik.errors.confirmedPassword}
            </InputInfoMessage>
          ) : null}
        </InputWrapper>
      </InputGroupWrapper>
      <Divider marginBottom={'20px'} />
      {changeInfoError && <InfoMessage>{changeInfoError}</InfoMessage>}
      <ButtonWrapper>
        <Button
          type={'submit'}
          onClick={() => formik.submitForm()}
          width={'40%'}
          disabled={!isPasswordMatch}
        >
          save changes
        </Button>
        <ReverseButton
          $bgColor={reverseButtonBgColor}
          $color={buttonBgColor}
          $borderColor={dividerColor}
          $darkHoverColor={reverseButtonHoverColor}
          $theme={theme}
          onClick={() => formik.resetForm()}
          disabled={!isPasswordMatch}
        >
          cancel
        </ReverseButton>
      </ButtonWrapper>
    </AccountFormStyled>
  );
};

export default AccountForm;

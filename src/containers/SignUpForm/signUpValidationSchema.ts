import * as yup from 'yup';

export const signUpValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'password is too short')
    .max(15, 'password is too long')
    .required(),
  confirmedPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'your passwords do not match'),
});

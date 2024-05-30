import * as yup from 'yup';

export const emailValidationSchema = yup.object({
  email: yup.string().email().required(),
});

import * as Yup from 'yup';

export const Validate = {
  email: Yup.string()
    .trim()
    .required('Please enter your Email Address')
    .email(`Email must be a valid Email Address`)
    .max(80, 'Email can be maximum 80 characters long'),

  password: Yup.string()
    .trim()
    .required('Please enter your Password')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password can be maximum 20 character long')
    .test(
      'uppercase',
      'Password must contain at least one upper case letter',
      (value) => value && value.match(/^((?=.*[A-Z]){1}).*$/)
    )
    .test(
      'lowercase',
      'Password must contain at least one lower case letter',
      (value) => value && value.match(/^((?=.*[a-z]){1}).*$/)
    )
    .test(
      'specialcharacter',
      'Password must contain at least one special character',
      (value) =>
        value && value.match(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/)
    )
    .test(
      'digit',
      'Password must contain at least one number',
      (value) => value && value.match(/^(?=.*\d).*$/)
    ),
};
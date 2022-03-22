import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { Formik, Form } from 'formik';

function RegisterForm() {
  const options = [
    {
      key: 'Email',
      value: 'emailmoc',
    },
    {
      key: 'Telephone',
      value: 'telephonemoc',
    },
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  };

  const validateSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required'),
    }),
  });

  const onSubmit = (values) => {
    console.log('Form values ', values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log('formik values', formik);
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='E-mail'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <FormikControl
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            />
            <FormikControl
              control='input'
              type='text'
              label='Phone'
              name='phone'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;

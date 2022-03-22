import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Auth from './auth/api/Auth';
import HelperFormControlls from './helperForms/helper/HelperFormControlls';
import FormikControl from './resuableForms/FormikControl';

function Register() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    modeOfContact: '',
  };
  const options = [
    { key: 'email', value: 'E-mail' },
    { key: 'phone', value: 'Phone' },
  ];
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
    address: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    modeOfContact: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Form values', values.modeOfContact);
    let user = {
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      address: values.address,
      phone: values.phone,
      modeOfContact: values.modeOfContact,
    };
    Auth.addUser(user);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <HelperFormControlls
              control='input'
              label='Username'
              name='username'
              type='text'
            />
            <HelperFormControlls
              control='input'
              label='E-mail'
              name='email'
              type='email'
            />
            <HelperFormControlls
              control='input'
              label='Password'
              name='password'
              type='password'
            />
            <HelperFormControlls
              control='input'
              label='Confirm Password'
              name='confirmPassword'
              type='text'
            />
            <HelperFormControlls
              control='input'
              label='Address'
              name='address'
              type='text'
            />
            <HelperFormControlls
              control='input'
              label='Phone'
              name='phone'
              type='text'
            />
            <HelperFormControlls
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            />
            <button className='.btn' type='submit'>
              Signup
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;

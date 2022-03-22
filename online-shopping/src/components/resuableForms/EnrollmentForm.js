import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { Formik, Form } from 'formik';

function EnrollmentForm() {
  const dropdownOptions = [
    { key: 'Select your course', value: '' },
    { key: 'React', value: 'react' },
    { key: 'Angular', value: 'angular' },
    { key: 'Vue', value: 'vue' },
  ];
  const ckeckboxOption = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' },
  ];
  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: '',
    courseDate: null,
  };
  const validateSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    skills: Yup.array().required('Required'),
    courseDate: Yup.date().required('Required').nullable(),
  });
  const onSubmit = (values) => {
    console.log('Form value ', values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='E-mail'
              name='email'
            />
            <FormikControl control='textarea' label='Bio' name='bio' />
            <FormikControl
              control='select'
              label='Course'
              name='course'
              options={dropdownOptions}
            />
            <FormikControl
              control='checkbox'
              label='Your skillset'
              name='skills'
              options={ckeckboxOption}
            />
            <FormikControl
              control='date'
              label='Course date'
              name='courseDate'
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

export default EnrollmentForm;

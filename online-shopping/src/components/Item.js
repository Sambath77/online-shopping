import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import HelperFormControlls from './helperForms/helper/HelperFormControlls';
function Item() {
  const initialValues = {
    id: 3,
    name: '',
    price: '',
    detail: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    detail: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Form value', values);
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
              label='Name'
              name='name'
              type='text'
            />
            <HelperFormControlls
              control='input'
              label='Price'
              name='price'
              type='text'
            />
            <HelperFormControlls
              control='input'
              label='Detail'
              name='detail'
              type='text'
            />
            <button className='btn' type='submit'>
              Add
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Item;

import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
  name: 'Sambath',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};
const saveValues = {
  name: 'Sambath',
  email: 'sam@gmail.com',
  channel: 'Cooking',
  comments: 'Welcome to my channel',
  address: 'USA',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};
const onSubmit = (values, onSubmitProps) => {
  console.log('Form Values', values);
  console.log('Submit props', onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
//   ) {
//     errors.email = 'Ivalid email format';
//   }
//   if (!values.channel) {
//     errors.channel = 'Required';
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
};
function NewYoutubeForm() {
  const [formValues, setformValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}

      //use when have a few input fields
      //validateOnMount
    >
      {(formik) => {
        console.log('Formik Props', formik);
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='email'>E-mail</label>
              <Field type='email' id='email' name='email' />
              <ErrorMessage name='email'>
                {(errorMsg) => <div className='error'>{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field type='text' id='channel' name='channel' />
              <ErrorMessage name='channel' component='div' />
            </div>
            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field
                as='textarea'
                id='comments'
                name='comments'
                validate={validateComments}
              />
              <ErrorMessage name='comments' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='addrdess'>Address</label>
              <FastField name='address'>
                {(props) => {
                  console.log('Render props', props);
                  const { field, form, meta } = props;
                  console.log('Meta Error ', meta.error);
                  return (
                    <div>
                      <input type='text' id='address' {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className='form-control'>
              <label htmlFor='facebook'>Facebook profile</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>
            <div className='form-control'>
              <label htmlFor='twitter'>Twitter profile</label>
              <Field type='text' id='twitter' name='social.twitter' />
            </div>
            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary phone number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>
            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary phone number</label>
              <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>

            <div className='form-control'>
              <label>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  console.log('fieldArrayProps', fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log('Form Error ', form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type='button' onClick={() => push('')}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate All
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit Comments
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit fields
            </button> */}
            <button type='button' onClick={() => setformValues(saveValues)}>
              Load saved datas
            </button>
            <button type='reset'>Reset</button>
            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewYoutubeForm;

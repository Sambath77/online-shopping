import React from 'react';
import Radio from '../../resuableForms/Radio';
import InputForm from '../formControll/InputForm';
import RadioForm from '../formControll/RadioForm';

function HelperFormControlls(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <InputForm {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default HelperFormControlls;

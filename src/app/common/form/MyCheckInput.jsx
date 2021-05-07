import React from 'react';
import { useField, Field } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const MyCheckInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // const styleCheck = (e) => {
  //   return e === true ? 'ui fitted checked toggle checkbox' : 'ui fitted toggle checkbox';
  // };

  return (
    <FormField error={meta.touched && !!meta.error}>
      <div style={{ display: 'flex' }}>
        <Field type="checkbox" {...props} style={{ marginRight: '0.5em' }} />
        <label>{label}</label>
        {meta.touched && meta.error ? (
          <Label basic color="red">
            {meta.error}
          </Label>
        ) : null}
      </div>
    </FormField>
  );
};

export default MyCheckInput;

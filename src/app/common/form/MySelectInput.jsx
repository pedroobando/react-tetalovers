import React from 'react';
import { useField } from 'formik';
import { FormField, Label, Select } from 'semantic-ui-react';

const MySelectInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value.id || null}
        onChange={(e, d) => {
          helpers.setValue({
            id: d.value,
            name: d.options.find((vlu) => vlu.value === d.value).text,
          });
        }}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MySelectInput;

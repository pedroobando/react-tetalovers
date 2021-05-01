import React from 'react';
import { useField } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const MyFileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log({ ...props });

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  };
  const handleFileChange = (e) => {
    // console.log(e.target.files);
    const { name } = e.target.files[0];
    field.value = name;
    document.querySelector(`#${props.id}`).value = name;
    console.log(field);
    // document.querySelector([])
  };
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <div className="ui action input">
        <input
          type="file"
          id="fileSelector"
          // {...field}
          // {...props}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <input {...field} {...props} />
        <button type="button" className="ui button" onClick={() => handlePictureClick()}>
          Buscar
        </button>
      </div>
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MyFileInput;

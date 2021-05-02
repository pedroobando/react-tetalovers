import React from 'react';
import { useField } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const MyFileInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // console.log(field);
  // console.log({ ...props });

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  };
  const handleFileChange = (e) => {
    if (e.target.files.length == 0) return;

    const { name } = e.target.files[0];
    helpers.setValue(name);
  };
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input
        type="file"
        id="fileSelector"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className="ui left action input disabled">
        <button
          type="button"
          className="ui teal labeled icon button"
          onClick={handlePictureClick}>
          <i className="search icon" />
          Buscar
        </button>
        <input {...field} value={field.value} {...props} />
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

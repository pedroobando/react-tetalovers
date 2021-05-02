import React from 'react';
import { useField } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const MyFileInput = ({ label, onfileupload, ...props }) => {
  // const { onfileupload } = props;
  const [field, meta, helpers] = useField(props);

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      helpers.setValue({
        name: file.name,
        lastModified: file.lastModified,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      });
      if (typeof onfileupload === 'function') onfileupload(file);
    }
  };
  return (
    <FormField error={meta.touched && !!meta.error}>
      <input
        type="file"
        id="fileSelector"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label>{label}</label>
      <div className="ui left action input">
        <button
          type="button"
          className="ui teal labeled icon button"
          onClick={handlePictureClick}>
          <i className="search icon" />
          Buscar
        </button>
        <input {...field} value={field.value['name']} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <Label basic color="red" content={meta.error['name']} />
      ) : null}
    </FormField>
  );
};

export default MyFileInput;

import React, { useState } from 'react';
import { uploadToCloudinary } from '../../app/cloudinary/cloudinaryService';

const TestCloudinary = () => {
  const [uploadFile, setUploadFile] = useState(null);

  const handleFileUpload = (e) => {
    setUploadFile(null);
    const upfile = e.target.files[0];

    if (upfile) {
      setUploadFile(upfile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      uploadToCloudinary(uploadFile);
      // const eee = await removeToCloudinary('1111');
      console.log(eee);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" className="ui button" onChange={handleFileUpload} />

      <button type="submit" className="ui button basic primary">
        Subir Archivo
      </button>
    </form>
  );
};

export default TestCloudinary;

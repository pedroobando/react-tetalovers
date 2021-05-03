import React, { useState } from 'react';
import { removeToCloudinary } from '../../app/cloudinary/cloudinaryService';
// const cloudinary = require('cloudinary').v2;
// import { v2 as cloudinary } from 'cloudinary';

const cloudUrl = 'https://api.cloudinary.com/v1_1/dj34u7d2f7o/image/upload';

// cloudinary.config({
//   cloud_name: 'dj34u7d2f7o',
//   api_key: '954637496179732',
//   api_secret: 'QxFieY2-CfKvPf08uGN6NzD4X1M',
//   // upload_preset: 'tetalovers',
// });

const TestCloudinary = () => {
  const [uploadFile, setUploadFile] = useState(null);

  const handleFileUpload = (e) => {
    setUploadFile(null);
    const upfile = e.target.files[0];

    if (upfile) {
      setUploadFile(upfile);
    }
  };

  //   const cloudURL = 'https://api.cloudinary.com/v1_1/dj34u7d2f7o/upload';

  // export const uploadToCloudinary = async ({ file }) => {
  //   const formData = new FormData();
  //   formData.append('upload_preset', 'tetalovers');
  //   formData.append('file', file);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(uploadFile);
    try {
      const eee = await removeToCloudinary('1111');
      console.log(eee);
    } catch (error) {
      console.log(error);
    }

    // uploadToCloudinary2(uploadFile);
    // cloudinary.uploader.upload(uploadFile, {
    //   upload_preset: 'tetalovers',
    //   overwrite: true,
    // });

    // cloudinary.uploader.upload(
    //   uploadFile.name,
    //   {
    //     resource_type: 'video',
    //     public_id: 'my_folder/my_sub_folder/my_dog',
    //     overwrite: true,
    //     notification_url: 'https://mysite.example.com/notify_endpoint',
    //   },
    //   function (error, result) {
    //     console.log(result, error);
    //   }
    // );
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

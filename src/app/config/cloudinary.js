// const cloudinary = require('cloudinary/lib/cloudinary');

import cloudinary from 'cloudinary/lib/cloudinary';

export const UPLOAD_PRESET = 'tetalovers';

cloudinary.config({
  cloud_name: 'dj34u7d2f7o',
  api_key: '954637496179732',
  api_secret: 'QxFieY2-CfKvPf08uGN6NzD4X1M',
});

export default cloudinary;

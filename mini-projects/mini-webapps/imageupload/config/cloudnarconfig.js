// cloudinaryConfig.js
import { v2 as cloudinary } from 'cloudinary';

export default function() {
  // Cloudinary configuration
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.C_API_KEY,
    api_secret: process.env.C_API_SECRET
  });

  // Additional Cloudinary configurations or helper functions can be added here

  // Return the configured cloudinary object (optional)
  return cloudinary;
};

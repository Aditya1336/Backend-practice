import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
        cloud_name: `${process.env.CLOUDINARY_NAME}`, 
        api_key: `${process.env.CLOUDINARY_KEY}`, 
        api_secret: `${process.env.CLOUDINARY_SECRET}` // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async(localFilePath)=>{
  try {
    if(!localFilePath){
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath, 
      {
        resource_type:"auto"
      }
    )
    console.log("File is uploaded on cloudinary successfully!",response.url);
  } catch (error) {
    try {
      await fs.unlink(localFilePath);
    } catch (unlinkErr) {
      console.warn("Failed to delete local file:", unlinkErr.message);
    }
    return null;
  }
}

export {uploadOnCloudinary};
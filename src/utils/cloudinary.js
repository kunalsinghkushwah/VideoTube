import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'


cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET  
    });

    console.log("Cloudinary Config:");
    console.log({
    cloud_name: cloudinary.config().cloud_name,
    api_key: cloudinary.config().api_key,
    api_secret: cloudinary.config().api_secret ? "SET" : "NOT SET",
    });

const uploadOnCloudinary = async (localFilePath) => {
    console.log("UPLOAD API KEY:", process.env.CLOUDINARY_API_KEY);
    try {
        if(!localFilePath) return "could not find the localpath"
        //Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been successfully uploaded on Cloudinary
        // console.log("file has been successfully uploaded on Cloudinary", response.url)
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
    console.error("Cloudinary Error:", error);

    if (localFilePath) {
        fs.unlinkSync(localFilePath);
    }

    return null;
}
    // catch(error) {
    //     fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
    //     return null
    // }
}

export { uploadOnCloudinary }


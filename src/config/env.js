import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

console.log("ENV Loaded");
console.log(process.env.CLOUDINARY_CLOUD_NAME);
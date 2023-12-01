import multer from 'multer';
import Project from './models/Project';
import Podcast from './models/podcast';
import {v2 as cloudinary} from "cloudinary"

export default async function handler(req, res) {
    try {
    
        const project = await Project.findByIdAndUpdate(req.body.id,{"image":req.body.image})
        
        // Return success response with the image URL
        return res.status(200).json({ data: project });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server Error' });
      }

}
// pages/api/projects/add.js

import dbConnect from './utils/dbConnect';
import Project from './models/Project';


export default async function handler(req, res) {
  // await cors(req,res);
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { name } = req.body;
        const project = new Project({ name });

        const savedProject = await project.save();

        res.status(201).json({ message: 'Project Added sucessfully', data: savedProject });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      try {
         const AllProjects = await Project.find({});
         res.status(201).json({ success: true, data: AllProjects });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
  }
}

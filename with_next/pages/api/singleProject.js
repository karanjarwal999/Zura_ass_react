import dbConnect from './utils/dbConnect';
import Project from './models/Project';
import Podcast from './models/podcast';


export default async function handler(req, res) {
  // await cors(req,res);
  await dbConnect();

  try {
    const { projectId } = req.body;

    const project = await Project.findById(projectId);

    const podcasts= await Podcast.find({projectId:projectId});

    res.status(201).json({ success: true, data:{...project._doc,podcast:podcasts} });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}

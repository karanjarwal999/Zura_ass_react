import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  podcast:{ type:[Schema.Types.ObjectId],default:[], ref:'Podcast'} ,
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
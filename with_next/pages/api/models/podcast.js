import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: { type: String, required: true}
});

const Podcast = mongoose.models.Podcast || mongoose.model('Podcast', PodcastSchema);

export default Podcast;
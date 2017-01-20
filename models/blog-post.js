import mongoose from 'mongoose';

var blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model('BlogPost', blogPostSchema);

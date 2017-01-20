import mongoose from 'mongoose';

var commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
        index: true
    },
    message: {
        type: String,
        required: true,
        maxlength: 250,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    _Owner: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
});
export default mongoose.model('Comment', commentSchema);
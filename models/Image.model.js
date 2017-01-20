// Image(id, title, description, createdAt)
import mongoose from 'mongoose';

var imageSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 100,
        index: true,
        default: ""
    },
    description: {
        type: String,
        maxlength: 250,
        default: ""
    },
    shotDate: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    _Owner: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
});
export default mongoose.model('Image', imageSchema);
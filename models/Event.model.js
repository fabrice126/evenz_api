import mongoose from 'mongoose';
import CommentModel from './Comment.model';
import AddressModel from './Address.model';

const Comment = CommentModel.schema;

var eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    imageCover: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dateStart: {
        type: String,
        default: ""
    },
    dateEnd: {
        type: String,
        default: ""
    },
    minUser: {
        type: Number,
        default: 0
    },
    maxUser: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    isShown: {
        type: Boolean,
        default: true
    },
    websites: [{
        type: String,
        default: []
    }],
    phoneNumbers: {
        type: String,
        default: ""
    },
    photosEnabled: {
        type: Boolean,
        default: true
    },
    vote: {
        plus: {
            type: Number,
            min: 0,
            default: 0
        },
        minus: {
            type: Number,
            min: 0,
            default: 0
        }
    },
    _Address: {
        type: mongoose.Schema.ObjectId,
        ref: "Address",
        default: ""
    },
    // _Comments: [{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Comment",
    //     default: []
    // }],
    _Comments: [Comment],
    _Owner: [{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }],
    _EventType: [{
        type: mongoose.Schema.ObjectId,
        ref: "EventType",
        default: []
    }],
    _Participants: [{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: []
    }]
});
export default mongoose.model('Event', eventSchema);
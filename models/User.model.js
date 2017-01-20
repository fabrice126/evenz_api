import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        match: /^[a-zA-Z0-9-_]+$/,
        minlength: 2,
        maxlength: 20,
        unique: true,
        required: [true, 'You must type a username'],
        index: true
    },
    firstname: {
        type: String,
        minlength: 1,
        maxlength: 30,
        required: [true, 'You must type a firstname'],
        index: true
    },
    lastname: {
        type: String,
        minlength: 1,
        maxlength: 30,
        required: [true, 'You must type a lastname'],
        index: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        unique: true,
        required: [true, 'You must type an email'],
        index: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: [true, 'You must type a password']
    },
    sex: {
        type: String,
        enum: ["Male", "Female"],
        required: [true, 'You must type a sex']
    },
    hometown: {
        type: String,
        maxlength: 60,
        default: "",
        index: true,
        required: [true, 'You must type a hometown']
    },
    birthday: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        maxlength: 500,
        default: ""
    },
    status: {
        type: String,
        enum: ['Online', 'Offline', 'Busy'],
        default: 'Online'
    },
    securityQuestion: {
        type: String,
        maxlength: 150,
        default: ""
    },
    securityAnswer: {
        type: String,
        maxlength: 60,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    admin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    phoneNumbers: [{
        type: String,
        maxlength: 20,
        default: "",
    }],
    websites: [{
        type: String,
        maxlength: 2048,
        default: ""
    }],
    hobbies: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    interests: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    favoriteQuotes: [{
        type: String,
        maxlength: 400,
        default: []
    }],
    favoriteBooks: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    favoriteMovies: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    favoriteTVShows: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    favoriteMusics: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    activities: [{
        type: String,
        maxlength: 100,
        default: []
    }],
    _Friends: [{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: []
    }],
    _Favourites: [{
        type: mongoose.Schema.ObjectId,
        ref: "Event",
        default: []
    }],
    _ParticipateAtEvents: [{
        type: mongoose.Schema.ObjectId,
        ref: "Event",
        default: []
    }]
});
export default mongoose.model('User', userSchema);



// UserXEvent(#idUser,#idEvent)
// EventXImage(#idImage, #idEvent)
// Image(id,titre,description, datePrise)
// Categorie (id,nom)
// Calendar(id, #idUser)
// Date(id,dateDebut, duree, #idCalendrier)
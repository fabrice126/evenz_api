import mongoose from 'mongoose';

var addressSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: String,
        default: ""
    },
    streetNumber: {
        type: Number,
        required: true,
    },
    streetName: {
        type: String,
        required: true,
        index: true,
    },
    city: {
        type: String,
        required: true,
        index: true
    },
    state: {
        type: String,
        default: ""
    },
    zipcode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
        index: true
    },
    location: {
        type: [Number], // [<longitude>, <latitude>]
        default: [],
        // index: '2d', // create the geospatial index -> si index 2d est ajouté et qu'on ajoute une adresse sans location le champs n'est pas crée malgrés : default:[]
    }
});
export default mongoose.model('Address', addressSchema);
// import mongoose from 'mongoose';

// //ES6 Promises
// mongoose.Promise = global.Promise;

// before((done) => {
//     mongoose.connect('mongodb://localhost:27017/db_evenz');
//     mongoose.connection.once('open', () => {
//         console.log("Connexion à la base de données réussie !");
//         done();
//     }).on('error', (err) => {
//         console.error('connection error:', err)
//     });
// });

// beforeEach((done) => {
//     mongoose.connection.collections.users.drop(() => {
//         done();
//     });
// });
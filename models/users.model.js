const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true },
        password: { type: String, required: true },
        date: { type: Date, default: Date.now}
        
});

const Users = mongoose.model('Users', userSchema);

// Blogs.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Blogs.deleteMany({image: "zzzz"},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Users;
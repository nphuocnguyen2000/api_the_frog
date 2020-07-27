let User = require('../models/user.model')
const bcrypt = require('bcrypt');
// module.exports.index = (req, res) => {
   
//     Store.find()
//       .then(store => res.json(store))
//       .catch(err => res.status(400).json('Error: ' + err));
// }
// module.exports.index= (req, res)=>{
//   var page = parseInt(req.query.page);
//   var limit = parseInt(req.query.limit);
//   var category = req.query.category || 'all';
//   var id = req.query.id
//   var query = {}
//   var cate = {}
//   if(page < 0 || page === 0) {
//         response = {"error" : true,"message" : "invalid page number, should start with 1"};
//         return res.json(response)
//   }
//   query.skip = limit * (page - 1)
//   query.limit = limit
// //   category !== 'all' ? cate.category = category : cate.categoryAll = category
//   cate.category = category
//   if(id !== undefined){
//     cate._id = id
//   }
//   // Find some documents
//        Shop.find(cate, {}, query,function(err,data) {
//         // Mongo command to fetch all data from collection.
//             if(err) {
//                 response = {"error" : true,"message" : "Error fetching data"};
//             } else {
//                 response = {"error" : false,data};
//             }
//             res.json(response);
//         });
// }

module.exports.add= (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // const subContent = req.body.subContent;
    // const auther = req.body.auther;
    // const createdAt = Date.parse(req.body.createdAt);
  
    const newReview = new User({
      username,
      password,
      email
    });
  
    newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  }
module.exports.register = async (req, res)=>{
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.json(errors);
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.json(errors);
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
           
            newUser.password = hash;
            newUser
              .save()
              .then(err => {
                console.log(err)
                // req.json(
                //   'success_msg',
                //   'You are now registered and can log in'
                // );
                // res.redirect('/account');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
}

module.exports.login = (req, res)=>{
    const {email, password} = req.body
    if(!password || !email){
      res.json("Please enter all fields");
    }
    else{
      User.findOne({ email: email })
        .then((user) => {
          if(user){
            bcrypt.compare(password, user.password, function(err, result) {
              if(err) throw err;
              if(result){
                res.json(user)
              }
              else{
                res.json({errors: true, message: "Login failed"})
              }
            });
            
          }
          else{
            res.json('That email is not registered');
          }
        })
    }
      
}
//   module.exports.findById = (req, res) => {
//     Review.findById(req.params.id)
//       .then(Review => res.json(Review))
//       .catch(err => res.status(400).json('Error: ' + err));
//   }
//   module.exports.deleteById=(req, res) => {
//     Review.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Review deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   }
//   module.exports.updateById= (req, res) => {
//     Review.findById(req.params.id)
//       .then(review => {
        
//           review.image = req.body.image,
//           review.content = req.body.content,
//           review.subContent = req.body.subContent,
//           review.auther = req.body.auther,
//           // review.date = Date.parse(req.body.date);
  
//         review.save()
//           .then(() => res.json('Review updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   }
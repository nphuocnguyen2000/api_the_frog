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


module.exports.register = async (req, res)=>{
  const { firstName, lastName, email,phone, password, password2, } = req.body;

  if (password != password2) {
    res.json({errors: true, message: 'Mật khẩu không giống nhau' });
    return;
  }
  if (password.length < 6) {
    res.json({ errors: true, message: 'Mật khẩu phải từ 6 ký tự trở lên' });
    return;
  }

  if(firstName && email && password && lastName && phone) {
    User.findOne({ email: email }).then(user => {
      if (user) {
        res.json({errors: true,  message: "Email đã tồn tại !" });
        return;
      } else {
        const newUser = new User({
          firstName,
          lastName,
          email,
          phone,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(data => {
                res.json({errors: false, data})
                
                // req.json(
                //   'success_message',
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
    if(email && password){
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
            res.json({errors: true, message: "That email is not registered"});
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
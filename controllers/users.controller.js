let User = require('../models/user.model')


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
    // const subContent = req.body.subContent;
    // const auther = req.body.auther;
    // const createdAt = Date.parse(req.body.createdAt);
  
    const newReview = new User({
      username,
      password
    });
  
    newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
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
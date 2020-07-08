
let Blogs = require('./../models/blogs.model');
module.exports.index = (req, res) => {
    Blogs.find()
      .then(blogs => res.json(blogs))
      .catch(err => res.status(400).json('Error: ' + err));
}
// module.exports.add= (req, res) => {
//     const image = req.body.image;
//     const conte,cmmmnt = req.body.content;
//     const subContent = req.body.subContent;
//     const auther = req.body.auther;
//     const createdAt = Date.parse(req.body.createdAt);
  
//     const newReview = new Review({
//       image,
//       content,
//       subContent,
//       auther
//     });
  
//     newReview.save()
//     .then(() => res.json('Review added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   }

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
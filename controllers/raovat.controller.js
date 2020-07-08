
let Raovat = require('../models/raovat.model');
module.exports.index = (req, res) => {
    Raovat.find()
      .then(raovat => res.json(raovat))
      .catch(err => res.status(400).json('Error: ' + err));
}
module.exports.add= (req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const auther = req.body.auther;
    const price = req.body.price;
    const place = req.body.place;
    const createdAt = Date.parse(req.body.createdAt);
  
    const newRaoVat = new Raovat({
      image,
      title,
      auther,
      price,
      place
    });
  
    newRaoVat.save()
    .then(() => res.json('RaoVat added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  }

//   module.exports.findById = (req, res) => {
//     Review.findById(req.params.id)
//       .then(Review => res.json(Review))
//       .catch(err => res.status(400).json('Error: ' + err));
//   }
  module.exports.deleteById=(req, res) => {
    Raovat.findByIdAndDelete(req.params.id)
      .then(() => res.json('Raovat deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  }
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
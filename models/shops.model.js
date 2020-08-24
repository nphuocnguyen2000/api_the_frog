const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {type: String, required: true},
  percentDiscount:{type: Number, required: false},
  price: {type: Number, required: true},
  image: {type: String, required: true},
  category: {type: Array, required: true},
  imageArr: {type: Array, required: true},
  quantity: {type: Number, required: true},
  inventory: {type: Number, required: true},
  
});


const Shop = mongoose.model('shops', shopSchema);
let temp = [
  {
  "name": "cultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "1ultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "aultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "bultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "eultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "dultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
{
  "name": "iultivate frictionless interfaces",
  "percentDiscount": 316,
  "price": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
},
// {
//   "name" : "Konoha frog Tee - Black",
//   "percentDiscount": 28,
//   "price": 250.000,
//   "image" : "https://res.cloudinary.com/the-frog/image/upload/v1596469856/TF_Collection1/c1_mattruoc_iw7bi9.png",
//   "category": ["t-shirt", "all"],
//   "imageArr": [
//     {"img": "https://res.cloudinary.com/the-frog/image/upload/v1596469856/TF_Collection1/c1_mattruoc_iw7bi9.png"},
//     {"img": "https://res.cloudinary.com/the-frog/image/upload/v1596469856/TF_Collection1/c1_matsau_yxtpwx.png"}
//   ],
//   "quantity": 1,
//   "inventory": 50
// }

]
// Shop.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Shop.deleteMany({quantity: 1},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Shop;
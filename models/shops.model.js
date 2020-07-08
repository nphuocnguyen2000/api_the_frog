const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    book: {
        image: { type: String, required: true },
        name: { type: String, required: true },
        auther: { type: String, required: true },
        priceOld: { type: Number, required: true },
        priceNew: { type: Number, required: true },
        percentDiscount: { type: Number, required: true },
        rating: { type: Number, required: true },
        category: { type: String, required: true },
        inventory: { type:Number, required: true }
    },
  quantity: { type: Number, required: true },
}, {
  timestamps: true,
});

shopSchema.plugin(aggregatePaginate);

const Shop = mongoose.model('shops', shopSchema);
let temp = [
    {
      
      "book": {
        "image": "http://demo.posthemes.com/pos_koparion/60-medium_default/rival-field-messenger.jpg",
        "name": "Day the Universe Changed, The",
        "auther": "Nikolaus Summersett",
        "priceOld": 333,
        "priceNew": 181,
        "percentDiscount": 44,
        "rating": 5,
        "category": "Other",
        "inventory": 739
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "http://demo.posthemes.com/pos_koparion/65-medium_default/crown-summit-backpack.jpg",
        "name": "Who Killed Bambi? (Qui a tué Bambi?)",
        "auther": "Oliviero Dunkerly",
        "priceOld": 163,
        "priceNew": 118,
        "percentDiscount": 43,
        "rating": 4,
        "category": "Magazine",
        "inventory": 128
      },
      
      "quantity": 1    },
    
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/414u+lgzBaL._AC_SX184_.jpg",
        "name": "Stock - Veal, Brown",
        "auther": "Ritchie Oxnam",
        "rating": 3,
        "priceOld": 299,
        "priceNew": 250,
        "percentDiscount": 64,
        "category": "Drama",
        "inventory": 362
      },
      
      "quantity": 1    }
  ]
// Shop.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Store.deleteMany({quantity: 1},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Shop;
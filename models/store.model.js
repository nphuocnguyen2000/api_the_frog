const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
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

storeSchema.plugin(aggregatePaginate);

const Store = mongoose.model('Store', storeSchema);
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
        "image": "https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._AC_SX184_.jpg",
        "name": "Hinge W Undercut",
        "auther": "De witt Mouser",
        "rating": 4,
        "priceOld": 155,
        "priceNew": 125,
        "percentDiscount": 73,
        "inventory": 363,
        "category": "Magazine",
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41PVCekoo8L._AC_SX184_.jpg",
        "name": "Glaze - Apricot",
        "auther": "Tedi Dowley",
        "rating": 5,
        "priceOld": 255,
        "priceNew": 199,
        "percentDiscount": 72,
        "category": "Biography",
        "inventory": 972
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51rYBXGMt+L._AC_SX184_.jpg",
        "name": "Muffin Mix - Oatmeal",
        "auther": "Lena Daniells",
        "rating": 5,
        "priceOld": 885,
        "priceNew": 566,
        "percentDiscount": 76,
        "category": "Drama",
        "inventory": 970
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/61iJsXNFLZL._AC_SX184_.jpg",
        "name": "Beans - Long, Chinese",
        "auther": "Kristen Slayny",
        "rating": 3,
        "priceOld": 199,
        "priceNew": 159,
        "percentDiscount": 26,
        "category": "Lover",
        "inventory": 806
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41T6o6yz4uL._AC_SX184_.jpg",
        "name": "Appetiser - Bought",
        "auther": "Con Lynock",
        "rating": 1,
        "priceOld": 666,
        "priceNew": 646,
        "percentDiscount": 17,
        "category": "Family",
        "inventory": 177
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51ERWhy2d-L._AC_SX184_.jpg",
        "name": "Pork - Kidney",
        "auther": "Myriam Ondrak",
        "rating": 1,
        "priceOld": 299,
        "priceNew": 199,
        "percentDiscount": 62,
        "category": "ForKid",
        "inventory": 28
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51vW7pqwcEL._AC_SX184_.jpg",
        "name": "Ice Cream - Strawberry",
        "auther": "Carlynn Pullan",
        "rating": 2,
        "priceOld": 266,
        "priceNew": 240,
        "percentDiscount": 38,
        "category": "Lover",
        "inventory": 609
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51wGNqaSIbL._AC_SX184_.jpg",
        "name": "Veal - Kidney",
        "auther": "Tomas Yurygyn",
        "rating": 3,
        "priceOld": 300,
        "priceNew": 199,
        "percentDiscount": 79,
        "category": "Drama",
        "inventory": 807
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51qXbKHWJRL._AC_SX184_.jpg",
        "name": "Chocolate - Sugar Free Semi Choc",
        "auther": "Othelia Vonderdell",
        "rating": 5,
        "priceOld": 399,
        "priceNew": 200,
        "percentDiscount": 25,
        "category": "Biography",
        "inventory": 749
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41PbOxxUAuL._AC_SX184_.jpg",
        "name": "Oil - Peanut",
        "auther": "Mahalia Hartil",
        "rating": 2,
        "priceOld": 333,
        "priceNew": 167,
        "percentDiscount": 65,
        "category": "Drama",
        "inventory": 897
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51jGFTPIsVL._AC_SX184_.jpg",
        "name": "Veal - Knuckle",
        "auther": "Leslie Dury",
        "rating": 3,
        "priceOld": 222,
        "priceNew": 199,
        "percentDiscount": 50,
        "category": "Family",
        "inventory": 339
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/313uORwmeaL._AC_SX184_.jpg",
        "name": "Crab - Claws, Snow 16 - 24",
        "auther": "Eustace Broader",
        "rating": 3,
        "priceOld": 999,
        "priceNew": 899,
        "percentDiscount": 22,
        "category": "Family",
        "inventory": 202
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51p50V9-EjL._AC_SX184_.jpg",
        "name": "Cakes Assorted",
        "auther": "Thorpe Climar",
        "rating": 3,
        "priceOld": 199,
        "priceNew": 150,
        "percentDiscount": 30,
        "category": "Lover",
        "inventory": 61
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/519OzBCa3EL._AC_SX184_.jpg",
        "name": "Gooseberry",
        "auther": "Percival Odell",
        "rating": 3,
        "priceOld": 99,
        "priceNew": 79,
        "percentDiscount": 76,
        "category": "ForKid",
        "inventory": 56
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41QvNXyKVdL._AC_SX184_.jpg",
        "name": "Maintenance Removal Charge",
        "auther": "Ber Gooding",
        "rating": 3,
        "priceOld": 399,
        "priceNew": 360,
        "percentDiscount": 46,
        "category": "Biography",
        "inventory": 415
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/516uBNfG0NL._AC_SX184_.jpg",
        "name": "Syrup - Monin - Granny Smith",
        "auther": "Zaneta Galego",
        "rating": 4,
        "priceOld": 299,
        "priceNew": 269,
        "percentDiscount": 68,
        "category": "Drama",
        "inventory": 230
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41dppk7y0iL._AC_SX184_.jpg",
        "name": "Beer - Creemore",
        "auther": "Slade Laurence",
        "rating": 1,
        "priceOld": 399,
        "priceNew": 360,
        "percentDiscount": 52,
        "category": "Biography",
        "inventory": 238
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
// Store.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Store.deleteMany({quantity: 1},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Store;
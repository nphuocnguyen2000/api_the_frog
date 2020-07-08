const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raovatSchema = new Schema({
    image: { type: String, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    auther: { type: String, required: true },
    place: { type: String, required: true },
    category: { type: String, required: false }
}, {
  timestamps: true,
});



const Raovat = mongoose.model('Raovat', raovatSchema);
let temp = [
  {
    "id": "422f:c46b:49a1:8856:df14:9955:5dfc:f797/6",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/2_600x800_crop_center.jpg?v=1569231109",
    "title": "It Boy (20 ans d'écart)",
    "price": 496,
    "auther": "Harland Randleson",
    "place": "TP.HCM",
    "category": "Lover"
  },
  {
    "id": "93ca:471a:3494:3cff:ae5d:95f1:86a5:dcd1/92",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/4_b155f66b-76de-44a2-a3e9-ca89308d9bc3_600x800_crop_center.jpg?v=1569231152",
    "title": "Tony Rome",
    "price": 147,
    "auther": "Ambrose Maggiori",
    "place": "TP.HCM",
    "category": "Family"
  },
  {
    "id": "9186:335c:5160:184d:3455:74d2:ac95:cb84/17",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/6_55a9c25a-9018-41ef-9a28-efe77f09ed9b_600x800_crop_center.jpg?v=1569231168",
    "title": "Twentieth Century",
    "price": 481,
    "auther": "Clara Mandifield",
    "place": "TP.HCM",
    "category": "Life"
  },
  {
    "id": "d55e:f163:28d3:4bf6:3fb4:4f5e:4a0f:62f6/39",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/7_1ca2fdf8-fc98-4a00-b12d-caed2c0e7a08_600x800_crop_center.jpg?v=1569231178",
    "title": "Teddy Bear (10 timer til Paradis)",
    "price": 362,
    "auther": "Roxana Moral",
    "place": "Bình Định",
    "category": "Life"
  },
  {
    "id": "1c45:83a4:8eb9:f90b:de64:bbf8:aae0:4dba/73",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/10_bf49c3cd-fade-4f88-9caa-725a72b1018a_600x800_crop_center.jpg?v=1569231200",
    "title": "Charlie Chan in Panama",
    "price": 263,
    "auther": "Cristobal Camplin",
    "place": "Đà Nẵng",
    "category": "Other"
  },
  {
    "id": "1a6c:1cd0:9714:6cd6:11af:1573:120:90ab/60",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/11_5d31eaf6-bcfa-44e0-aedf-f5132b5c8360_600x800_crop_center.jpg?v=1569231219",
    "title": "Austin Powers: International Man of Mystery",
    "price": 127,
    "auther": "Chere Cordie",
    "place": "Hà Nội",
    "category": "Family"
  },
  {
    "id": "7fb1:75e:a6e6:3dc:303b:90ed:a1c2:4469/91",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/15_fe712b4f-4476-4297-84a9-2e087a477c5f_600x800_crop_center.png?v=1569231350",
    "title": "Betrayed, The",
    "price": 476,
    "auther": "Liliane Murdy",
    "place": "TP.HCM",
    "category": "Magazine"
  },
  {
    "id": "7c93:f404:87a3:484c:9c22:d82e:ec81:b469/102",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/12_d89a0bc6-f635-4367-b445-acf8f26d48a3_600x800_crop_center.png?v=1569231225",
    "title": "Marihuana",
    "price": 268,
    "auther": "Arvy Attarge",
    "place": "TP.HCM",
    "category": "Lover"
  },
  {
    "id": "2c9c:5c1e:be6e:322e:eba8:b1d6:b517:4548/96",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/12_d89a0bc6-f635-4367-b445-acf8f26d48a3_600x800_crop_center.png?v=1569231225",
    "title": "Vinci",
    "price": 491,
    "auther": "Mae Courvert",
    "place": "Bình Định",
    "category": "Magazine"
  },
  {
    "id": "8f9e:ef97:20c8:ffa3:f73d:57e2:a04f:9322/70",
    "image": "https://cdn.shopify.com/s/files/1/0265/8933/1530/products/10_403beadd-0759-4d10-8cec-836a11debf3c_600x800_crop_center.jpg?v=1569231452",
    "title": "Terrorizers, The (Kong bu fen zi)",
    "price": 471,
    "auther": "Adriena O'Doherty",
    "place": "Đà Nẵng",
    "category": "Lover"
  }
]
// Raovat.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Raovat.deleteMany({place: "Đà Nẵng"},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Raovat;
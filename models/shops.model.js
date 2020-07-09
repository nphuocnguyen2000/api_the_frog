const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {type: String, required: true},
  oldPrice: {type: Number, required: true},
  newPrice: {type: Number, required: true},
  image: {type: String, required: true},
  category: {type: Array, required: true},
  imageArr: {type: Array, required: true},
  quantity: {type: Number, required: true},
  inventory: {type: Number, required: true},
  
});


const Shop = mongoose.model('shops', shopSchema);
let temp = [{
  "name": "cultivate frictionless interfaces",
  "oldPrice": 316,
  "newPrice": 126,
  "image": "https://product.hstatic.net/1000344185/product/blk-doodle-tee-2_67d29b58c14b4730b9ff2c76cc80be1f_grande.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
}, {
  "name": "generate wireless deliverables",
  "oldPrice": 781,
  "newPrice": 492,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/the-bear-bla-1-w.png",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 58
}, {
  "name": "expedite wireless technologies",
  "oldPrice": 751,
  "newPrice": 421,
  "image": "https://product.hstatic.net/1000344185/product/15-te9512-tx01-2_9e5bd6c9653342dba42d037a67b02f86_grande.jpg",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 41
}, {
  "name": "strategize mission-critical web services",
  "oldPrice": 884,
  "newPrice": 249,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/break-new-hoodie-1-w.png",
  "category": ["hoodie", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 39
}, {
  "name": "empower intuitive web services",
  "oldPrice": 236,
  "newPrice": 499,
  "image": "https://slyclothing.vn/wp-content/uploads/2020/06/Surf_tee-2_2-640x768.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 67
}, {
  "name": "optimize wireless web-readiness",
  "oldPrice": 312,
  "newPrice": 582,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/track-jacket-bla-1-w.png",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 6
}, {
  "name": "reintermediate 24/7 channels",
  "oldPrice": 947,
  "newPrice": 188,
  "image": "https://bobui.vn/wp/wp-content/uploads/2020/01/5-5-1.jpg",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 59
}, {
  "name": "orchestrate web-enabled partnerships",
  "oldPrice": 494,
  "newPrice": 453,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/grynch-hoodie-1-ww.png",
  "category": ["hoodie", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 29
}, {
  "name": "deliver sticky e-markets",
  "oldPrice": 535,
  "newPrice": 436,
  "image": "https://bobui.vn/wp/wp-content/uploads/2020/01/8-5-1-1.jpg",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 39
}, {
  "name": "maximize world-class e-tailers",
  "oldPrice": 205,
  "newPrice": 572,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/track-pants-bla-1-w.png",
  "category": ["pants", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 81
}, {
  "name": "mesh collaborative synergies",
  "oldPrice": 685,
  "newPrice": 282,
  "image": "https://slyclothing.vn/wp-content/uploads/2020/06/SurfSurf_tee-5_2-640x768.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 97
}, {
  "name": "scale cross-platform infrastructures",
  "oldPrice": 218,
  "newPrice": 584,
  "image": "https://product.hstatic.net/1000344185/product/mountain-jacket-2_4bae4f731af5472aac724ef000b14449_grande.jpg",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 90
}, {
  "name": "aggregate integrated technologies",
  "oldPrice": 851,
  "newPrice": 128,
  "image": "https://slyclothing.vn/wp-content/uploads/2020/05/Tee-Signature_cam_2-min-640x768.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 92
}, {
  "name": "exploit strategic metrics",
  "oldPrice": 332,
  "newPrice": 406,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/renai-jacket-1.png",
  "category": ["jacket", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 3
}, {
  "name": "seize proactive models",
  "oldPrice": 623,
  "newPrice": 121,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/venom-tie-dye-hoodie-2-w.png",
  "category": ["hoodie", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 81
}, {
  "name": "revolutionize user-centric channels",
  "oldPrice": 841,
  "newPrice": 571,
  "image": "https://slyclothing.vn/wp-content/uploads/2020/06/Surf_tee-6_2-640x768.jpg",
  "category": ["t-shirt", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 16
}, {
  "name": "integrate e-business communities",
  "oldPrice": 216,
  "newPrice": 260,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/venom-tie-dye-hoodie-1-w.png",
  "category": ["hoodie", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 90
}, {
  "name": "revolutionize real-time networks",
  "oldPrice": 369,
  "newPrice": 507,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/cargo-pants-blu-1-w.png",
  "category": ["pants", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 98
}, {
  "name": "visualize turn-key convergence",
  "oldPrice": 347,
  "newPrice": 483,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/d-shorts-1.png",
  "category": ["shorts", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 32
}, {
  "name": "exploit sticky niches",
  "oldPrice": 591,
  "newPrice": 398,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/angel-backpack-1-w.png",
  "category": ["balo", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 51
}, {
  "name": "exploit magnetic systems",
  "oldPrice": 795,
  "newPrice": 542,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/dcs-logo-shorts-bb-1-w.png",
  "category": ["shorts", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 26
}, {
  "name": "revolutionize customized synergies",
  "oldPrice": 228,
  "newPrice": 582,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/aca-backpack-1-w.png",
  "category": ["balo", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 42
}, {
  "name": "maximize bricks-and-clicks channels",
  "oldPrice": 620,
  "newPrice": 379,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/stripe-track-short-whi-1-w.png",
  "category": ["shorts", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 83
}, {
  "name": "grow cutting-edge platforms",
  "oldPrice": 743,
  "newPrice": 450,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/logo-y-backpacks-re-1-w.png",
  "category": ["balo", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 43
}, {
  "name": "morph back-end methodologies",
  "oldPrice": 945,
  "newPrice": 204,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/signature-y-long-wallet-1-w.png",
  "category": ["wallet", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 84
}, {
  "name": "facilitate plug-and-play e-commerce",
  "oldPrice": 112,
  "newPrice": 423,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/prynamid-backpack-1-w.png",
  "category": ["balo", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 97
}, {
  "name": "repurpose turn-key architectures",
  "oldPrice": 865,
  "newPrice": 599,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/zipped-long-wallet-sphynx-1-w.png",
  "category": ["wallet", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 22
}, {
  "name": "syndicate mission-critical infrastructures",
  "oldPrice": 887,
  "newPrice": 117,
  "image": "http://bizweb.dktcdn.net/thumb/large/100/369/010/products/logo-wallet-1b-w.png",
  "category": ["wallet", "all"],
  "imageArr": [
    {
    }
  ],
  "quantity": 1,
  "inventory": 62
}]
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
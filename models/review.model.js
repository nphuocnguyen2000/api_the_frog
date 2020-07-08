const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  image: { type: String, required: true },
  content: { type: String, required: true },
  auther: { type: String, required: true },
  subContent: { type: String, required: true },
  createdAt: { type: Date, required: false },
}, {
  timestamps: true,
});
let temp = [
  {
    "image": "http://toidi.net/wp-content/uploads/2019/11/du-lich-hoa-anh-dao-nhat-ban-370x245.jpg",
    "content": "Varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    "auther": "Chadwick Bavin",
    "subContent": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
    "createdAt": "2020-04"  },
  {
    "image": "http://toidi.net/wp-content/uploads/2019/09/du-lich-arga-an-do3-370x245.jpg",
    "content": "Elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
    "auther": "Kipp Graal",
    "subContent": "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
    "createdAt": "2020-04"  },
  {
    "image": "http://toidi.net/wp-content/uploads/2017/12/shirakawago-toidi-1-300x171.jpg",
    "content": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
    "auther": "Susannah Walcar",
    "subContent": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat",
    "createdAt": "2020-04"  },
  {
    "image": "http://toidi.net/wp-content/uploads/2019/05/du-lich-han-quoc-2018-370x245.jpg",
    "content": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
    "auther": "Dasie Guerin",
    "subContent": "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    "createdAt": "2020-04"  },
  {
    "image": "http://toidi.net/wp-content/uploads/2019/02/lich-trinh-du-lich-chiangmai-4-370x245.jpg",
    "content": "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
    "auther": "Chariot Tallow",
    "subContent": "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
    "createdAt": "2020-04"  }
]

const Review = mongoose.model('Review', reviewSchema);
// Review.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })

module.exports = Review;
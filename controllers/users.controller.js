let User = require('../models/user.model')
var {hash, compare, compareSync} = require('bcryptjs');
const DOMAIN = 'sandbox0490235eaa5d419da687f6d72cc5efa4.mailgun.org';
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");

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

  if(firstName && email && password  && lastName && phone) {
    User.findOne({ email: email }).then( async user => {
      
      if (user) {
        res.json({errors: true,  message: "Email đã tồn tại !" });
        return;
      } 

      else{
        const token = jwt.sign({firstName,email,password,lastName,phone}, process.env.JWT_ACC_ACTIVATE, {expiresIn: '20m'});
        
        const output = `
        <h1>CHÀO MỪNG ĐẾN VỚI THE FROG</h1>
            <p>Cảm ơn Anh/chị đã đăng ký tài khoản tại cửa hàng của chúng tôi.</p>
            <p>Chúng tôi sẽ sử dụng địa chỉ email ${email} của bạn để đăng ký tài khoản tại The Frog</p>
            <a href="${process.env.CLIENT_URL}/user/register/confirm/${token}" 
              style="display: flex;
              text-decoration: none;
              text-align: center;
              align-items: center;
              color: red;
              font-weight: bold;
              "
            >
              BẤM VÀO ĐÂY ĐỂ XÁC NHẬN
            </a>
      `
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_EMAIL_PASSWORD
        }
      });
      
      var mailOptions = {
        from: '"The Frog" <thefrog.vn@gmail.com>',
        to: email,
        subject: 'Thông tin đăng ký tài khoản tại The Frog',
        html: output
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json({errors: true,  message: "Email don't send " });
        } else {
          console.log('Email sent: ' + info.response);
          res.json({errors: false,  message: "Email sent" });
        }
      });
    }});
  }
  else{
    res.json({errors: true,  message: "Vui lòng điền đầy đủ các trường thông tin !" });
  }
}
module.exports.confirm = async (req, res) => {
    let {token} = req.params;
    var decoded = jwt.verify(token, process.env.JWT_ACC_ACTIVATE);
    const {firstName, lastName, email, phone, password} = decoded;
    User.findOne({ email: email }).then( async user => {
      if (user) {
        res.json({errors: true,  message: "Email đã tồn tại !" });
        return;
      } 
      else{
        if(decoded.email && decoded.password){
          let hashPassword = await hash(password, 8);
          const newUser = new User({
            firstName,
            lastName,
            email,
            password : hashPassword,
            phone,
          });
          newUser.save(function (err) {
            if (err){
              res.json({errors: true, message: "Cannot insert"})
            }else{
              // saved!
              res.json({errors: true, message: "User inserted"})
              res.redirect('http://localhost:3000/account')
            }
            
          });
          
        }
        else{
          res.json({errors: true,  message: "Authentication failed" });
        }
      }
    })
    
}

module.exports.login = (req, res)=>{
    const {email, password} = req.body;
    if(email && password){
      User.findOne({ email: email })
        .then((user) => {
          if(user){
            compare(password, user.password, function(err, result) {
              if(err) throw err;
              if(result){
                res.json(user)
              }
              else{
                res.json({errors: true, message: "Login failed. Wrong password"})
              }
            }); 
          }
          else{
            res.json({errors: true, message: "That email is not registered"});
          }
        })
    } 
    else{
      res.json({errors: true, message: "Login failed"})
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
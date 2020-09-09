let Account = require('../models/account.model')
var {hash, compare, compareSync} = require('bcryptjs');
const DOMAIN = 'sandbox0490235eaa5d419da687f6d72cc5efa4.mailgun.org';
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");


module.exports.register = async (req, res)=>{

  const { firstName, lastName, email, phone, password, password2, } = req.body;

  if (password != password2) {
    res.json({errors: true, message: 'Mật khẩu không giống nhau' });
    return;
  }

  if (password.length < 6) {
    res.json({ errors: true, message: 'Mật khẩu phải từ 6 ký tự trở lên' });
    return;
  }

  if(firstName && email && password  && lastName && phone) {
    Account.findOne({ email: email }).then( async account => {
      
      if (account) {
        res.json({errors: true,  message: "Email đã tồn tại !" });
        return;
      } 

      else{
      const token = jwt.sign({ firstName,email,password,lastName,phone }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' });

      const output = `
            <div
              style="
                background-color: white;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;
                border: 1px solid #c4c4c4;
                border-radius: 10px;
                overflow: hidden;
                margin: 0 auto;
              "
            >
              <h1 style="margin: 0; color:black; display: inline-block; padding: 20px 0; background-color: #888; text-align: center; width: 100%;">Chào mừng đến với The Frog</h1>
              <div style="padding: 20px">
                Xin chào ${firstName}  ${lastName},
                <br>
                Cảm ơn Anh/chị đã đăng ký tài khoản tại cửa hàng của chúng tôi.
                <br>
                Chúng tôi sẽ sử dụng địa chỉ email nphuocnguyen2000@gmail.com của bạn để đăng ký tài khoản tại The Frog
                      <br>
                <a href="${ process.env.CLIENT_URL }/Account/register/confirm/${token}" style="text-decoration: none; display: block; padding: 10px; background-color: #ccc; text-align: center; font-weight: bold; border-radius: 20px; margin: 5px 0; color: blue;">BẤM VÀO ĐÂY ĐỂ XÁC NHẬN</a>
              </div>
            </div>
        `
      
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          account: process.env.NODEMAILER_EMAIL,
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
          res.json({errors: true,  message: "Email don't send " });
        } else {
          console.log('Email sent: ' + info.response);
          res.json({errors: false,  message: "Email sent" });
        }
      });
      }
    });
  }
  else{
    res.json({errors: true,  message: "Vui lòng điền đầy đủ các trường thông tin !" });
  }
}
module.exports.confirm = async (req, res) => {
    let {token} = req.params;
    var decoded = jwt.verify(token, process.env.JWT_ACC_ACTIVATE);
    const { firstName, lastName, email, phone, password } = decoded;
    Account.findOne({ email: email }).then( async account => {
      if (account) {
        res.json({errors: true,  message: "Email đã tồn tại !" });
        return;
      } 
      else{
        if(decoded.email && decoded.password){
          let hashPassword = await hash(password, 8);
          const newAccount = new Account({
            firstName,
            lastName,
            email,
            password : hashPassword,
            phone,
          });
          newAccount.save(function (err) {
            if (err){
              res.json({errors: true, message: "Cannot insert"})
            }else{
              // saved!
              res.json({errors: false, message: "Account inserted"})
              //res.redirect('http://localhost:3000/account')
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
      Account.findOne({ email: email })
        .then((account) => {
          if(account){
            compare(password, account.password, function(err, result) {
              if(err) throw err;
              if(result){
                res.json(account)
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
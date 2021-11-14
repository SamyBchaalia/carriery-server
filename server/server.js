const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const cloudinary = require("cloudinary").v2;
const userRouter = require("./router/userRoute.js");
const coachRouter = require("./router/coachRouter.js");
const adminRouter = require("./router/adminRouter.js");
const packRouter = require("./router/packRouter.js");
const reservationRouter = require("./router/reservationRouter.js");

const PORT = process.env.PORT || 3636;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/coach", coachRouter);
app.use("/admin", adminRouter);
app.use("/pack", packRouter);
app.use("/reservation", reservationRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});

app.post("/upload", upload.any(0), (req, res) => {
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
});
// app.post("/mail", (req, res) => {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "carrierytn@gmail.com", // generated ethereal user
//       pass: "20028952sami", // generated ethereal password
//     },
//   });
//   var msg = {
//     from: "carrierytn@gmail.com", // sender address
//     to: "halimboussada10@gmail.com", // list of receivers
//     subject: "Hello", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   };
//   transporter.sendMail(msg, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("mail");
//     }
//   });
// });

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "carrierytn@gmail.com",
    pass: "20028952sami",
  },
});

app.post("/mail", (req, res) => {
  let mailOptions = {
    from: "carrierytn@gmail.com",
    to: "halimboussada10@gmail.com",
    subject: "test",
    text: "hello world",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

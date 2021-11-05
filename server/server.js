const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./router/userRoute.js");
const coachRouter = require("./router/coachRouter.js");
const adminRouter = require("./router/adminRouter.js");
const packRouter = require("./router/packRouter.js");
const reservationRouter = require("./router/reservationRouter.js");

const PORT =  process.env.PORT || 3636 ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/coach", coachRouter);
app.use("/admin", adminRouter);
app.use("/pack", packRouter);
app.use("/reservation", reservationRouter);
app.get("/" , (req , res)=>{
  res.send("hello world")
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

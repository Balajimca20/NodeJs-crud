const express =require("express");
const mongoose =require("mongoose");

const userRoute = require("./crud/crud.route");

const app=express();
app.use(express.json());
app.listen(3000,()=>{
   console.log("Server listening the port 3000");
});
 mongoose.connect("mongodb+srv://balajimca20:D7RgdLwP1RwEWF3B@cluster0.tqcct4k.mongodb.net/test",
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  });
  app.use("/api/users", userRoute);
  module.exports = app;


  ///
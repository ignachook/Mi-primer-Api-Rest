const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const ModelUser = mongoose.model("User", userSchema);
module.exports = ModelUser;


//const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//const userSchema = new Schema
//const userModel = new mongoose.Schema(
  //  {
 //     name: {
   //         type: String
     //   },
      //  email: {
       //     type: String
        //},
        //password: {
         //   type: String
        //}
   // },
    //{
     //   timestamps:true,
      //  versionKey:false,
    //}
//)

//const ModelUser = mongoose.model("users", userSchema);
//module.exports = ModelUser;
# Endg-2
npx express-generator --view=ejs
npm i connect-flash
npm i express-session

intermediate mongodb---

how can i perform a case-insensitive search in mongoose?
-mongoose ko setup karo
-npm i mongoose
-const mongoose=require("mongoose")
-mongoose.connect("mongodb://17.0.0.1:27017/testing")
how do i find documents where an array field contains all of a set of values?
const userSchema=mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  }
})

how can i search for documents with a specific date range in mongoose?
const userSchema=mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  },
  dateCreated:{
    type:Date,
    default:Date.now()
  }
})
how can i filter documents based on the existence of the field in mongoose?
how can i filter documents based on a specific filed length in mongoose?



regex- ko samajhte hai
^ iska matalb shuruaat aisi ho
$ iska matlb ant aisa ho

_________________________________________________________________________________________________________________________________________________________________________________

authorization and authentication
-install these packages
  npm i passport passport-local passport-local-mongoose mongoose express-session
-write app.js code first in app.js file and write it after view engine and before logger

-setup user.js then properly

-in index.js try register first and then other code as well

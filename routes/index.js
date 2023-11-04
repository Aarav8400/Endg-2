var express = require('express');
var router = express.Router();

const userModel = require('./users')
const employeeModel = require('./employee')

const passport = require('passport');
const localStrategy = require("passport-local");
passport.use(new localStrategy(employeeModel.authenticate()))
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/failed', function (req, res, next) {
  req.flash("age", 25)
  res.send("ban gaya")
});

router.get('/check', function (req, res, next) {
  console.log(req.flash("age"))
  res.send("check kar lo yaar terminal pe")
});

router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "aaravshukla",
    nickname: "aaru23",
    description: "hello who are ",
    categories: ['js'],
  })
  res.send(userData)
})

router.post("/register", function (req, res) {
  let employeedata = new employeeModel({
    username: req.body.username,
    secret: req.body.secret
  })
  employeeModel.register(employeedata, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile')
      })
    })
})



router.get("/find", async function (req, res) {
  var regex = new RegExp("^Aarav$", 'i')
  let user = await userModel.find({ username: regex })
  res.send(user)
})

router.get("/findByCategory", async function (req, res) {
  let user = await userModel.find(({ categories: { $all: ['node'] } }))
  res.send(user)
})

router.get("/searchByDate", async function (req, res) {
  var date1 = new Date('2023-11-02')
  var date2 = new Date('2023-11-05')
  let user = await userModel.find({ dateCreated: { $gte: date1, $lte: date2 } })
  res.send(user)
})

router.get("/findByField", async function (req, res) {
  let user = await userModel.find({ categories: { $exists: true } })
  res.send(user)
})

router.get("/findBySpecificFieldLength", async function (req, res) {
  let user = await userModel.find({
    $expr: {
      $and:
        [
          { $gte: [{ $strLenCP: '$nickname' }, 0] },
          { $lte: [{ $strLenCP: '$nickname' }, 4] }
        ]

    }
  })
  res.send(user)
})
router.get("/profile",isLoggedIn, function (req, res) {
  res.send("welcome to profile")
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req, res) {

})
router.get("/logout",function(req,res){
  req.logOut(function(err){
    if(err)return next(err)
    res.redirect("/")
  })
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/")
}
module.exports = router;

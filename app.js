const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request"); //need to install request package
const https = require("https");
const date = require(__dirname + "/date.js"); //to use function in date.js module

const app = express();

var items = ["Wake up", "Eat breakfast"];
var workItem = [];

app.set("view engine", "ejs"); //to tell our app to use ejs as view engine. this must place below app const. Then must create views folder and one ejs file to store html
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); //use this function in express to able docment in project to be used by server by placing all those doc in public folder

app.get("/", function(req, res) {
  // console.log(items);
  // var today = new Date();
  // var option = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };
  // var day = today.toLocaleDateString("en-US", option);
  let day = date.getDay();
  res.render("list", {
    listTitle: day,
    newLists: items
  }); //create a response by rendering file called list and passing variable that name kindOfDay
  // var currentDay = today.getDay();
  // var day ="";
  //
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //   case 1:
  //     day = "Monday";
  //   case 2:
  //     day = "Tuesday";
  //   case 3:
  //     day = "Wednesday";
  //   case 4:
  //     day = "Thurday";
  //   case 5:
  //     day = "Friday";
  //   case 6:
  //     day = "Saturday";
  //   break;
  //   default:
  //   console.log("Error: current day is equal to:" + currentDay)
  // }
  // if(today.getDay()===6||today.getDay()===0){ //test weekend condition
  //   // res.send("<h1>Yeah, it is weekend</h1>");
  //   day = "weekend";
  // }
  // else{
  //   day = "working day";
  //   // res.sendFile(__dirname + "/index.html");
  // }
  // res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  let item = req.body.newItem;
  //items.push (req.body.newItem);
  if (req.body.list === "Work") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  //items.push (req.body.newItem);
  // res.render("list", {newList: item}); //will be error cost newList is not define when page is first load. Need to define in get function and use redirect instead
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newLists: workItem
  });
});

// app.post("/work", function(req, res){
//   res.redirect("/work");
// });

app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Sever was started! ");
});

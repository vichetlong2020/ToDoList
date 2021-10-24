// module.exports.getDate = getDate; //to enable expert this module function
//
// function getDate (){
//   let today = new Date();
//   let option = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };
//   return today.toLocaleDateString("en-US", option);
// }

exports.getDate = function (){ //short form
  let today = new Date();
  let option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", option);
}

exports.getDay = function (){
  let today = new Date();
  let option = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", option);
}

// module.exports.getDay = getDay; //to export multiple function add .function name to module
//
// function getDay(){
//   let today = new Date();
//   let option = {
//     weekday: "long",
//   };
//   return today.toLocaleDateString("en-US", option);
// }

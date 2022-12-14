import getCurrentHour from "./clock";
import currentTimeStatus from "./current-time";
import setUpBannerByHour from "./banner";
import greetings from "./greetings";
import setIcon from "./icon";
import quotesGenerator from "./quotesGenerator";
currentTimeStatus();

// document.querySelector("#app").innerHTML = `
//   <div>
//     <h2>hello world</h2>
//     <p> this is javascript</p>
//   </div>
// `;

// updating clock at DOM
getCurrentHour(document.querySelector("#clock"));

// set up the banner
setUpBannerByHour(document.querySelector("#banner"));

// greetings
greetings(document.querySelector("#greeting"));

// set icon
setIcon(document.querySelector("#icon"));

// print quote
quotesGenerator(
  document.querySelector("#content"),
  document.querySelector("#author")
);

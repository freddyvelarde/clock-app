import getCurrentHour from "./clock";

document.querySelector("#app").innerHTML = `
  <div>
    <h2>hello world</h2>
    <p> this is javascript</p>
  </div>
`;

// updating clock at DOM
getCurrentHour(document.querySelector("#clock"));

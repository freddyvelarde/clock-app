import currentTimeStatus from "./current-time";

export default function greetings(elem) {
  const isDayTime = currentTimeStatus();
  if (isDayTime) {
    elem.innerHTML = `<h2>GOOD MOORNING, it's currently:`;
  } else {
    elem.innerHTML = `<h2>GOOD Evening, it's currently:`;
  }
}

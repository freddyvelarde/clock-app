import currentTimeStatus from "./current-time";

const url_light =
  "url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
// const url_light = "url('../../src/assets/forest-day.jpg')";

export default function setUpBannerByHour(element) {
  const isDayTime = currentTimeStatus();
  if (isDayTime) {
    element.style.backgroundImage = url_light;
  } else {
    element.style.backgroundImage = "url('../../src/assets/forest-night.jpg')";
  }
}

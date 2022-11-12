import currentTimeStatus from "./current-time";

export default function setUpBannerByHour(element) {
  const isDayTime = currentTimeStatus();
  if (isDayTime) {
    element.style.backgroundImage = "url('../../src/assets/forest-day.jpg')";
  } else {
    element.style.backgroundImage = "url('../../src/assets/forest-night.jpg')";
  }
}

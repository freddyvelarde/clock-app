import currentTimeStatus from "./current-time";

export default function setIcon(img) {
  const isDay = currentTimeStatus();
  if (isDay) {
    img.setAttribute("src", "./src/assets/sun.png");
  } else {
    img.setAttribute("src", "./src/assets/moon.png");
  }
}

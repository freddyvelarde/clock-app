export default function getCurrentHour(element) {
  const now = new Date();
  let timeToNextTick = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  setInterval(() => {
    const now = new Date();
    let currentHour = now;
    currentHour = now.toLocaleString("en-US", { hour12: false }).split(", ")[1];
    element.innerHTML = `<h1>${currentHour}</h1>`;
  }, timeToNextTick);
}

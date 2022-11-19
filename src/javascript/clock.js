export default function getCurrentHour(element) {
  setInterval(() => {
    const now = new Date();
    let currentHour = now
      .toLocaleString("en-US", { hour12: false })
      .split(", ")[1];
    element.innerHTML = `${currentHour}`;
  }, 1000);
}

export default async function quotesGenerator(cont, author) {
  // let response;
  const request = await fetch("https://api.quotable.io/random");
  const res = await request.json();

  cont.innerHTML = `${res.content}`;

  author.innerHTML = `- ${res.author}`;

  // console.log(res);
}

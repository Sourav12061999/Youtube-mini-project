let cont = document.getElementById("cont");
let data = JSON.parse(localStorage.getItem("YT-Search-data"));
let search = document.getElementById("search");
let btn = document.getElementById("btn");

function DOM(data) {
  cont.innerHTML = null;
  data.forEach((element) => {
    let { kind, videoId } = element.id;
    if (kind == "youtube#video") {
      let card = document.createElement("div");
      card.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      cont.appendChild(card);
    }
  });
}
async function Fetch(query) {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&key=AIzaSyByy_POtWpRCqAtosFxiQorWE37BPucVeU`
  );
  let data = await res.json();
  console.log(data);
  localStorage.setItem("YT-Search-data", JSON.stringify(data.items));
  window.location.href = "search.html";
}
btn.addEventListener("click", () => {
  Fetch(search.value);
});
DOM(data);

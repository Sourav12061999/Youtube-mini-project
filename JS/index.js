let search = document.getElementById("search");
let btn = document.getElementById("btn");
let cont = document.getElementById("cont");

async function Fetch(query) {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&key=AIzaSyByy_POtWpRCqAtosFxiQorWE37BPucVeU`
  );
  let data = await res.json();
  console.log(data);
  localStorage.setItem("YT-Search-data", JSON.stringify(data.items));
  window.location.href = "search.html";
}

async function Fetch2() {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyByy_POtWpRCqAtosFxiQorWE37BPucVeU`
  );
  let data = await res.json();
  console.log(data);
  DOM(data.items);
}
function DOM(data) {
  cont.innerHTML = null;
  data.forEach(({ id }) => {
    let card = document.createElement("div");
    card.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    cont.appendChild(card);
  });
}
Fetch2();
btn.addEventListener("click", () => {
  Fetch(search.value);
});

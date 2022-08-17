const article = document.querySelector(".content"),
			loader = document.getElementById("loadingSection");

// Init API using fetch()
fetch("https://api.pulo.dev/v1/contents")
  .then((res) => {
    if (res.status === 200) {
			hideLoader();
			return res.json();
    } else {
      console.log(`HTTP error status: ${res.status}`);
    }
  })
  .then((cont) => {

    let data = "";

    for (let index of cont.data) {
      data += `
      <article class="uk-article article" id="article">
        <h1 class="uk-artilce-title uk-heading-small heading" id="heading" style="font-family:'Poppins'">${index.title}</h1>
        <p class="uk-article-meta" id="metaArticle">${index.contributor}</p>
        <p class="pragraph"><a href="${index.url}" target="_blank">Watch it</a></p>   
      </article>
      `;
    }

    article.innerHTML = data;
  });

function hideLoader() {
	loader.style.display = "none";
}
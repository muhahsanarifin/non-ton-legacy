const BASE_API_URL = `https://api.pulo.dev/v1/contents`;

// const heading = document.querySelector("h1#heading");

// const metaArticle = document.querySelector("p#metaArticle");

// const pragraph = document.getElementById("pragraph");

const article = document.querySelector(".content");

// Init API using fetch()
fetch(BASE_API_URL)
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      console.log(`HTTP error status: ${res.status}`);
    }
  })
  .then((cont) => {
    // console.log(cont);

    let data = '';

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
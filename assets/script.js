const BASE_API_URL = `https://api.pulo.dev/v1/contents`;

// const heading = document.querySelector("h1#heading");

// const metaArticle = document.querySelector("p#metaArticle");

// const pragraph = document.getElementById("pragraph");

const article = document.querySelector("article.article");

// Init API using fetch()
fetch(BASE_API_URL)
    .then ((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            console.log(`HTTP error status: ${res.status}`);
        } 
    })
    .then((cont) => {
        console.log(cont);

        // const output = '';
        // cont.forEach( function(out) {
        //     output = output +
        //     `${out.data[0].title}`;
        // })
        // heading.innerHTML = output;

        
        // Temporarily scripts
        article.insertAdjacentHTML(
            "beforeend",
            `<h4>${cont.data[0].title}</h4>
            <a onclick("${cont.data[0].url}")>Watch it</a>
            <p>Created by ${cont.data[0].contributor}</p>
            
            
            <br>
            
            <h4>${cont.data[1].title}</h4>
            <a onclick("${cont.data[1].url}")>Watch it</a>
            <p>Created by ${cont.data[1].contributor}</p>

            <br>

            <h4>${cont.data[2].title}</h4>
            <a onclick("${cont.data[2].url}")>Watch it</a>
            <p>Created by ${cont.data[2].contributor}</p>

            <br>

            <h4>${cont.data[3].title}</h4>
            <a onclick("${cont.data[3].url}")>Watch it</a>
            <p>Created by ${cont.data[3].contributor}</p>

            <br>

            <h4>${cont.data[4].title}</h4>
            <a onclick("${cont.data[3].url}")>Watch it</a>
            <p>Created by ${cont.data[4].contributor}</p>
            
            <br>

            <h4>${cont.data[5].title}</h4> 
            <a onclick("${cont.data[5].url}")>Watch it</a>
            <p>Created by ${cont.data[5].contributor}</p>
            `
        ); 
    })

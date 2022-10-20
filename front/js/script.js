function appendArticleToAnchor(anchor, article) {
        const items = document.querySelector("#items")
        if (items != null) {
            items.appendChild(anchor)
            anchor.appendChild(article)
        }
}

function addProducts(data) {
    data.forEach((kanap) => {
        
        // const {_id, imageUrl, altTxt, name, description } = kanap
        displayArticle(kanap)
        // const article= document.createElement("article")
        // const image = makeImage(imageUrl, altTxt)
        // const h3 = makeH3(name)
        // const paragraph = makeParagraph(description)
        
        // appendElementsToArticle(article, image, h3, paragraph)
        // appendArticleToAnchor(anchor, article)
    })
    }

// function appendElementsToArticle(article, image, h3, paragraph) {
//     article.appendChild(image)
//     article.appendChild(h3)
//     article.appendChild(paragraph)
// }
// const fetch = async() => {
//     try {
//         const rest = await fetch ('http://localhost:3000/api/products');
//         if (!res.json) {
//             then ((data)) => {
//                 addProducts(data)
//             }
//             throw new Error(res.status);
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        addProducts(data)
    })



function displayArticle(kanape) {
    console.log("test", kanape)
    const anchor = document.createElement("a")
    anchor.href = `./product.html?id=${kanape._id}`
    anchor.innerHTML = `
        <article>
            <img src="${kanape.imageUrl}" alt="${kanape.altTxt}">
            <h3 class="productName">${kanape.name}</h3>
            <p class="productDescription">${kanape.description}</p>
        </article>`
    let target =  document.getElementById("items")
    target.appendChild(anchor)
}

// function makeImage(imageUrl, altTxt) {
//     const image = document.createElement("img")
//     image.src = imageUrl
//     image.alt= altTxt
//     // image.removeAttribute ("title")
//     // image.removeAttribute ("style")
//     return image
// }

// function makeH3(name) {
//     const h3 = document.createElement("h3")
//     h3.textContent = name
//     h3.classList.add("productName")
//     return h3
// }

// function makeParagraph(description) {
//     const paragraph = document.createElement("p")
//     paragraph.textContent = description
//     paragraph.classList.add("productDescription")
//     return paragraph
// }
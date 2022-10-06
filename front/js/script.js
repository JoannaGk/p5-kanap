function appendArticleToAnchor(anchor, article) {
        const items = document.querySelector("#items")
        if (items != null) {
            items.appendChild(anchor)
            anchor.appendChild(article)
        }
}

function addProducts(data) {
    // const _id = data[0]._id
    // const imageUrl = data[0].imageUrl
    // const altTxt = data[0].altTxt
    // const name = data[0].name
    // const description = data[0].description


    data.forEach((kanap) => {
        
        const {_id, imageUrl, altTxt, name, description } = kanap
        const anchor = makeAnchor(_id)
        const article= document.createElement("article")
        const image = makeImage(imageUrl, altTxt)
        const h3 = makeH3(name)
        const paragraph = makeParagraph(description)
        
        appendElementsToArticle(article, image, h3, paragraph)
        appendArticleToAnchor(anchor, article)
    })
    }

function appendElementsToArticle(article, image, h3, paragraph) {
    article.appendChild(image)
    article.appendChild(h3)
    article.appendChild(paragraph)
}

fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        addProducts(data)
    })



function makeAnchor(id) {
    const anchor = document.createElement("a")
    anchor.href = `../product.html?id=${id}`
    return anchor
}

function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt= altTxt
    image.removeAttribute ("title")
    image.removeAttribute ("style")
    return image
}

function makeH3(name) {
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
}

function makeParagraph(description) {
    const paragraph = document.createElement("paragraph")
    paragraph.textContent = description
    paragraph.classList.add("productDescription")
    return paragraph
}
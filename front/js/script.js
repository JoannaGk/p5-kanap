function appendArticleToAnchor(anchor, article) {
        const items = document.querySelector("#items")
        if (items != null) {
            items.appendChild(anchor)
            anchor.appendChild(article)
        }
}

function addProducts(data) {
    data.forEach((kanap) => {
        displayArticle(kanap)
    })
    }


fetchData("http://localhost:3000/api/products").then((resultData) => {
    addProducts(resultData)
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
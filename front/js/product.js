const queryString= window.location.search
const urlParams = new URLSearchParams(queryString)
const productId = urlParams.get("id")

function displayProduct(kanap) {
    console.log("kanap", kanap)
}



fetch(`http://localhost:3000/api/products/${id}`)
.then(response => response.json())
.then(res => displayProduct(res))


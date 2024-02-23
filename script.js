let productView = document.querySelector("#products")
const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
];

function createProducts () {
    let content = "";
    for (let i = 0; i < products.length; ++i) {
        content += 
        `
        <p id = "${products[i].id}"><b>Product's name</b>: ${products[i].name}|<b>Product's price</b>: ${products[i].price}
        <br></p>
        `
    }
    productView.innerHTML = content;
}

createProducts();

window.addEventListener("change", function() {
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let a = []
    for (let checkbox of markedCheckbox) {  
      a.push(checkbox.value + '')
    }
    if (a[0] !== undefined) {
        let found;
        for (let i = 0; i < products.length; ++i) {
            found = a.every(r => products[i].tags.includes(r));
            this.document.querySelector(`#\\3${products[i].id} `).style.display = !found ? "none": "block";
        }
    } else {
        createProducts();
    }
})
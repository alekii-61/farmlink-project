function displayProducts(products){
    const header=document.getElementById("header")

    products.forEach(product => {
        const section =document.createElement("section")
        const h2 =document.createElement("h2");
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        h2.textContent = product.name;
        div.textContent=product.price;
        p1.textContent= product.available;
        p2.textContent=product.farmerName;
        p3.textContent = product.location;

        section.appendChild(h2)
        section.appendChild(p1)
        section.appendChild(p2)
        section.appendChild(p3)
        section.appendChild(div)
        header.appendChild(section)
})
}

function fetchProducts(){
    fetch("http://localhost:3003/products")
.then(response =>response.json())
.then(product => {displayProducts(product)})
}
function fetchProducts(){
  fetch("http://localhost:3003/products")
    .then(response => response.json())
    .then(data => displayProducts(data))
}

fetchProducts()
const btn = document.querySelector("button")
btn.addEventListener("click", ()=>{alert ("for more inquiries contact us at farmlinkKenya@gmail.com")});
s 
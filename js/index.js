function loadProducts() {
  fetch("http://localhost:5001/products")
    .then(res => res.json())
    .then(products => {
      let html = "";
      products.forEach(product => {
        html += `
          <div class="product-card">
            <h3>${product.name}</h3>
            <p>${product.available}</p>
            <p>${product.farmerName}</p>
            <p>${product.location}</p>
            <p>${product.price}</p>
            <p>${product.phone}</p>
          </div>
        `;
      });
      document.getElementById("productList").innerHTML = html;
    });
}

document.getElementById("exploreBtn").addEventListener("click", () => {
  loadProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("getStartedBtn").addEventListener("click", () => {
  document.getElementById("signupModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("signupModal").style.display = "none";
});

document.getElementById("productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newProduct = {
    name: document.getElementById("name").value,
    acres: document.getElementById("available").value,
    farmer: document.getElementById("farmerName").value,
    county: document.getElementById("location").value,
    price: document.getElementById("price").value,
    phone: document.getElementById("phone").value
  };
  fetch("http://localhost:5001/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  }).then(() => loadProducts());
});

function selectRole(role) {
  document.getElementById("signupModal").style.display = "none";
  if (role === "farmer") {
    document.getElementById("add-product").scrollIntoView({ behavior: "smooth" });
  } else {
    loadProducts();
  }
}


loadProducts();
const contactUs =document.getElementById("contact")
contactUs.addEventListener("click",() => {alert("thank you for reaching out please send you email via farmlinkkenya@gmail.com and we will be more than glad to help you")});
function loadProducts() {
  fetch("https://alekii-61.github.io/farmlink-project/db.json")
    .then(res => res.json())
    .then(products => {
      let allProducts = products.products || products;
      let html = "";
      allProducts.forEach(product => {
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
    })
    .catch(error => {
      console.error("Error loading products:", error);
      document.getElementById("productList").innerHTML = "<p>Failed to load products. Please try again later.</p>";
    });
}



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
  document.getElementById("signupModal")
  if (role === "farmer") {
    document.getElementById("add-product")
  } else {
   return loadProducts();
  }
}


loadProducts();
const contactUs =document.getElementById("contact")
contactUs.addEventListener("click",() => {alert("thank you for reaching out please send you email via farmlinkkenya@gmail.com and we will be more than glad to help you")});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("exploreBtn")?.addEventListener("click", () => {
    loadProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("getStartedBtn").addEventListener("click", () => {
    document.getElementById("signupModal").style.display = "flex";
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("signupModal").style.display = "none";
  });
  document.getElementById("farmerCard").addEventListener("click", () => {
  document.getElementById("signupModal").style.display = "none";
  document.getElementById("add-product").scrollIntoView({behavior: "smooth"});


document.getElementById("buyerCard").addEventListener("click", () => {
  document.getElementById("signupModal").style.display = "none";
  document.getElementById("products").scrollIntoView({behavior: "smooth"})
  
});
});
});

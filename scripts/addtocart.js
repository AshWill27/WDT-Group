const products = [
    { id: 1, name: "Air Pods Pro", price: 199.90, image: "AirPods-pro.jpg" },
    { id: 2, name: "Pink Flower Bag", price: 30, image: "bag.jpg" },
    { id: 3, name: "Pink Laptop Bag", price: 40, image: "laptop-bag.jpg" },
    { id: 4, name: "Men's White Sneakers", price: 40, image: "best-white-sneakers-men1.jpg" },
    { id: 5, name: "Black Pumps", price: 40, image: "black pumps.jpg" },
    { id: 6, name: "12 Pro Max Phone Case", price: 40, image: "phonecase.jpg" }
    

  ];

  
  const cartItems = []; 
  
  
  function displayProducts() {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = ""; 
  
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      const image = document.createElement("img");
      image.src = `images/${product.image}`;
      image.alt = product.name;
  
      const productName = document.createElement("p");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price}`;
  
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", () => addToCart(product));
  
      productCard.appendChild(image);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(addButton);
  
      rootElement.appendChild(productCard);
    });
  }
  
  
  function addToCart(product) {
    cartItems.push(product);
    updateCart();
  }
  
  
  function updateCart() {
    const cartItemContainer = document.getElementById("cartItem");
    cartItemContainer.innerHTML = ""; 
  
    if (cartItems.length == 0) {
      cartItemContainer.textContent = "Your cart is empty";
    } else {
      cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        const itemName = document.createElement("p");
        itemName.textContent = item.name;
  
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${item.price}`;
  
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);
        cartItemContainer.appendChild(cartItem);
      });
    }
  
    updateCartTotal();
  }
  
  
  function updateCartTotal() {
    const totalElement = document.getElementById("total");
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
  }
  
  
  displayProducts();
  updateCart();

  
function handleCheckout() {
    
    const total = document.getElementById("total").textContent;
    
    
    window.location.href = `checkout.html?total=${total}`;
  }
  
  
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.addEventListener("click", handleCheckout);
  
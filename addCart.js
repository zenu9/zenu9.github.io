function addToCart(dishName) {
    const cart = document.getElementById("cart-items");
    
    // Create a new list item for the dish
    const listItem = document.createElement("li");
    listItem.textContent = dishName;
    
    cart.appendChild(listItem);
}
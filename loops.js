let isLoggedIn = false; 

let products = [
    { id: 1, name: "Soda", price: "6" },
    { id: 2, name: "Meat", price: "22" },
    { id: 3, name: "Toilet Paper", price: "9" },
    { id: 4, name: "Veggies", price: "12" }
];

let cart = [];

function displayProducts() {
    let productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
    for (let product of products) {
        let listItem = document.createElement('li');
        listItem.textContent = `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`;
        let addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.onclick = () => addProductToCart(product.id);
        listItem.appendChild(addButton);
        productsList.appendChild(listItem);
    }
}

function addProductToCart(productId) {
    if (!isLoggedIn) {
        alert("Please log in to add items to your cart.");
        return;
    }
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        displayCart();
    } else {
        alert("Product not found.");
    }
}

function displayCart() {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    for (let item of cart) {
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${item.name}, Price: $${item.price}`;
        cartList.appendChild(listItem);
    }
    let totalCost = calculateTotalCost();
    document.getElementById('total-cost').textContent = `Total cost of items in your cart: $${totalCost}`;
}

function calculateTotalCost() {
    let total = "0";
    for (let item of cart) {
        total += item.price;
    }
    return total; // im trying to get the total cost of the cart but its just adding the numbers to the side of each other instaed of combining to get the total cost :c
}

document.getElementById('login-button').onclick = () => {
    isLoggedIn = true;
    alert("You are now logged in.");
};

displayProducts();

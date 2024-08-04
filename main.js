// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.product.id === productId);
        if (itemIndex !== -1) {
            if (this.items[itemIndex].quantity > 1) {
                this.items[itemIndex].quantity -= 1;
            } else {
                this.items.splice(itemIndex, 1);
            }
        }
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCartItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice()}`);
        });
    }
}

// Create instances of products
let products = [];
let cards = document.getElementsByClassName('cards');
for (let card of cards) {
    let id = card.dataset.id;
    let name = card.querySelector('.name').innerText;
    let price = parseInt(card.querySelector('.price').innerText);
    products.push(new Product(id, name, price));
}

// Initialize shopping cart
let shoppingCart = new ShoppingCart();
let totalPrice = document.getElementById('totalPrice');
let totalChamps = document.getElementById('totalChamps');

for (let card of cards) {
    let product = products.find(p => p.id === card.dataset.id);
    let addButton = card.querySelector('.addButton');
    let removeButton = card.querySelector('.removeButton');
    let likeButton = card.querySelector('.likeButton');

    // Add button
    addButton.onclick = function() {
        shoppingCart.addItem(product);
        updateCartDisplay();
    };

    // Remove button
    removeButton.onclick = function() {
        shoppingCart.removeItem(product.id);
        updateCartDisplay();
    };

    // Like button
    likeButton.onclick = function() {
        if (likeButton.style.fill === 'rgb(255, 255, 255)') {
            likeButton.style.fill = '#0AC8B9';
        } else {
            likeButton.style.fill = '#FFF';
        }
    };
}

function updateCartDisplay() {
    totalChamps.innerText = shoppingCart.getTotalItems();
    totalPrice.innerText = shoppingCart.getTotalPrice();
    console.log("Cart items:");
    shoppingCart.displayCartItems();
}

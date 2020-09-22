const itemsContainer = document.getElementById('items')

import data from './data.js'

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop.
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)
    console.log(img)

    let desc = document.createElement('D')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name
    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    // put new div inside items container
    itemsContainer.appendChild(newDiv)
}

const cart = [ ]

// Add Item
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            // Stop code
            return
        }
    }
      //name: name, price: price, qty: 1
    const item = {name, price, qty: 1}
    cart.push(item)
}

// Show Items
function showItems() {
    
    console.log(`You have ${getQty()} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name}: $${cart[i].price} x ${cart[i].qty}`)
    }

    console.log(`Total in cart: $${getTotal()}`)
}

// Get Qty
function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty;
    }
    return qty
}

// Get Total
function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2);
}

addItem("happy", 5.99)
addItem("sad", 5.99)
addItem("angry", 5.99)
addItem("calm", 5.99)
addItem("curious", 5.99)
addItem("disgust", 5.99)
addItem("energetic", 5.99)
addItem("gloomy", 5.99)
addItem("scared", 5.99)
addItem("shy", 5.99)
addItem("sleepy", 5.99)
addItem("surprised", 5.99)

showItems()
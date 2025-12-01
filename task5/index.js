const EventEmitter = require("events");

const cartEvents = new EventEmitter();


cartEvents.on("cart:itemAdded", (item) => {
    console.log("Item added to cart:", item);
});


let cart = [];


function addItem(item) {
    cart.push(item);                  
    cartEvents.emit("cart:itemAdded", item);  
}


addItem("Notebook");
addItem("Pen");
addItem("Eraser");

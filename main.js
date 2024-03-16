let cards = document.getElementsByClassName('cards')
let totalPrice = document.getElementById('totalPrice');
let totalChamps = document.getElementById('totalChamps');

for (let card of cards) {
    let counter = 0
    let addButton = card.querySelector('.addButton');
    let removeButton = card.querySelector('.removeButton');
    addButton.onclick = function(){
        console.log("test")
        let price = parseInt(card.querySelector('.price').innerText);
        totalChamps.innerText = parseInt(totalChamps.innerText) + 1;
        totalPrice.innerText = parseInt(totalPrice.innerText) + price
        counter++
    }
    removeButton.onclick = function(){
        if(counter > 0){
            console.log("test")
            let price = parseInt(card.querySelector('.price').innerText);
            totalChamps.innerText = parseInt(totalChamps.innerText) - 1;
            totalPrice.innerText = parseInt(totalPrice.innerText) - price
            counter--
        }
    }
}
// Declaring variables
let cards = document.getElementsByClassName('cards')
let totalPrice = document.getElementById('totalPrice');
let totalChamps = document.getElementById('totalChamps');

// Loop to  iterate over each card 
for (let card of cards) {
    let counter = 0
    let addButton = card.querySelector('.addButton');
    let removeButton = card.querySelector('.removeButton');
    let likeButton = card.querySelector('.likeButton');

    // add button
    addButton.onclick = function(){
        console.log("test")
        let price = parseInt(card.querySelector('.price').innerText);
        totalChamps.innerText = parseInt(totalChamps.innerText) + 1;
        totalPrice.innerText = parseInt(totalPrice.innerText) + price
        counter++
    }

    // remove button
    removeButton.onclick = function(){
        if(counter > 0){
            console.log("test")
            let price = parseInt(card.querySelector('.price').innerText);
            totalChamps.innerText = parseInt(totalChamps.innerText) - 1;
            totalPrice.innerText = parseInt(totalPrice.innerText) - price
            counter--
        }
    }

    //like button
    likeButton.onclick = function(){
        console.log(likeButton.style.fill)
        console.log("test")
        if(likeButton.style.fill == 'rgb(255, 255, 255)'){
            likeButton.style.fill = '#0AC8B9'
        }
        else(
            likeButton.style.fill = '#FFF'
        )
    }
}
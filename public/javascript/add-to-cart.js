
// let productPrices = document.getElementsByClassName("cartProductPrice");

function addItemToCart(e){
    console.log(this);
    console.log(e.target);
    if(e.target.className == 'card'){
        alert('12345');
        let divEl = document.createElement('div');
        let cartProductQuantity = document.createElement('div');
        let cartProductName = document.createElement('div');
        let removeItem = document.createElement('div');

        let cardEls = e.currentTarget.childNodes;
        console.log(cardEls);
        console.log(this);
        cartProductName.innerHTML = cardEls[1].childNodes[0].data;
        cartProductQuantity.innerHTML = /*document.querySelector('.card-section').innerHTML*/ 'x5';
        removeItem.innerHTML = '&times;';

        cartProductQuantity.className = 'cartProductQuantity';
        cartProductName.className = 'cartProductName';
        removeItem.className = 'removeItem';
        
        divEl.appendChild(cartProductQuantity);
        divEl.appendChild(cartProductName);
        divEl.appendChild(removeItem);

        document.querySelector('#cart').appendChild(divEl);
    }
}

document.querySelector(".card").addEventListener("click", addItemToCart);
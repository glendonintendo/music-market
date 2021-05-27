
// let productPrices = document.getElementsByClassName("cartProductPrice");

function addItemToCart(e){
    let divEl = document.createElement('div');
    let cartProductQuantity = document.createElement('div');
    let cartProductName = document.createElement('div');
    let removeItem = document.createElement('div');

    console.log(this);
    cartProductName.innerHTML = this.childNodes[1].childNodes[0].data;
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

document.querySelectorAll(".card").forEach(element => {
    element.addEventListener("click", addItemToCart); 
});

console.log('js is loaded');
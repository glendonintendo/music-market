function addItemToCart(e){
    // creates elements
    let divEl = document.createElement('div');
    let cartProductQuantity = document.createElement('div');
    let cartProductName = document.createElement('div');
    let cartProductPrice = document.createElement('div');
    let removeItem = document.createElement('div');

    // finds necessary data from clicked card
    cartProductName.innerHTML = this.closest(".card").childNodes[1].childNodes[1].innerHTML;
    cartProductPrice.innerHTML = this.closest(".card-section").childNodes[3].childNodes[2].innerHTML;
    cartProductQuantity.innerHTML = this.closest('.card-section').childNodes[7].value;
    removeItem.innerHTML = '&times;';

    if(!cartProductQuantity.innerHTML)
        cartProductQuantity.innerHTML = '1';

    // translates innerHTML to an arr for splicing bc apparently you cant do that to innerHTML already
    let priceArr = new Array();
    for (let i = 0; i < cartProductPrice.innerHTML.length; i++) {
        priceArr.push(cartProductPrice.innerHTML[i]);     
    }
    
    // parses quantity and price to floats(decimals) for multiplication
    let total = parseFloat(cartProductQuantity.innerHTML) * parseFloat(priceArr.splice(1, priceArr.length).join(""));

    total = total.toString();

    // float gets rid of .00 if there is no remainder, replace it in this case
    if(total.indexOf('.') < 0){
        total += '.00';
    }

    cartProductPrice.innerHTML = total;

    console.log(total);

    divEl.className = 'cartItem';
    cartProductQuantity.className = 'cartProductQuantity';
    cartProductName.className = 'cartProductName';
    cartProductPrice.className = 'cartProductPrice';
    removeItem.className = 'removeItem';
    
    divEl.appendChild(cartProductQuantity);
    divEl.appendChild(cartProductName);
    divEl.appendChild(cartProductPrice);
    divEl.appendChild(removeItem);

    document.querySelector('#cart').appendChild(divEl);

    document.querySelectorAll('.removeItem').forEach(item => {
        item.addEventListener('click', removeItemFromCart);
    })

}

// funtion that doesnt allow the input of anthing other than numbers, specifically integers
(function() {  var
    integers = document.querySelectorAll('input[type="number"][step="1"]'),
    intRx = /\d/;
  
  for (var input of integers) {
    input.addEventListener('keydown', integerChange, false);
  }
 
  function integerChange(event) {
    if (
      (event.key.length > 1) || 
      (
        (event.key === "-") &&
        (event.currentTarget.value.length === 0)
      ) ||
      intRx.test(event.key)
    ) return;
    event.preventDefault();
  }
 
})();


document.querySelectorAll(".card-section > button").forEach(element => {
    element.addEventListener("click", addItemToCart); 
});


console.log('js is loaded');
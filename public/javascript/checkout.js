let paypalCounter = 0;
let productNameStr;
let totalPrice;
let productNames = document.getElementsByClassName("cartProductName");
let productPrices = document.getElementsByClassName("cartProductPrice");


async function checkoutButtonHandler(event) {
    totalPrice = 0;
    paypalCounter = 0;
    productNameStr = '';
    event.preventDefault(); 
    for (let i = 0; i < productNames.length; i++) {
        productNameStr += productNames[i].innerHTML + " - ";
        totalPrice += parseFloat(productPrices[i].innerHTML);
    }

    document.querySelector('.total').innerHTML = "Total: <strong>$" + totalPrice + "</strong>";

    document.querySelector('.paypalContainerSect').remove();
    let paypalContainerSectEl = document.createElement('div');
    paypalContainerSectEl.className = 'paypalContainerSect';
    document.querySelector('.off-canvas-content').append(paypalContainerSectEl);

    console.log(productNameStr);
    if(!paypalCounter && totalPrice){
        paypalCounter++;
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        description: productNameStr,
                        amount: {
                            value: totalPrice
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    document.getElementById("cart").innerHTML = '';
                    document.getElementById("total").innerHTML = '$0.00'
                    localStorage.clear();
                })
            }
        }).render(".paypalContainerSect");
    }
    

    if($('#terms').prop('checked') === false)
        $('.paypalContainerSect').hide();
    else if($('#terms').prop('checked'))
        $('.paypalContainerSect').show();
        
    // get all items from page
    // reduce stock
}

function removeItemFromCart(e){
    this.closest('.cartItem').remove();
    checkoutButtonHandler(e);
}

function togglePaypal(){
    if(paypalCounter){
        $(".paypalContainerSect").toggle();
    }
}

$(document).ready(function(){
    document.querySelector(".menu > li > button").addEventListener('click', checkoutButtonHandler);
    document.getElementById("terms").addEventListener("click", togglePaypal);
    document.querySelectorAll('.removeItem').forEach(item => {
        item.addEventListener('click', removeItemFromCart);
    });
})


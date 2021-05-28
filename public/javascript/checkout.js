let paypalCounter = 0;
let productNameStr;
let totalPrice;
let productNames = document.getElementsByClassName("cartProductName");

async function checkoutButtonHandler(event) {
    paypalCounter = 0;
    event.preventDefault(); 
    for (let i = 0; i < productNames.length; i++) {
        productNameStr += productNames[i].value + " - ";
        // let strPrice = productPrices[i].value;
        // price = parseInt(strPrice);
        // totalPrice += price;
    }

    document.querySelector('.paypalContainerSect').remove();
    let paypalContainerSectEl = document.createElement('div');
    paypalContainerSectEl.className = 'paypalContainerSect';
    document.querySelector('.off-canvas-content').append(paypalContainerSectEl);

    console.log(paypalCounter);
    if(!paypalCounter){
        paypalCounter++;
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        description: productNameStr,
                        amount: {
                            value: 10.00/*totalPrice*/
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    document.getElementById("cart").innerHTML = '';
                    /*document.getElementById("cartTotal").innerHTML = '$0.00'*/
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

function togglePaypal(){
    if(paypalCounter){
        $(".paypalContainerSect").toggle();
    }
}

document.querySelector(".menu > li > button").addEventListener('click', checkoutButtonHandler);
document.getElementById("terms").addEventListener("click", togglePaypal);
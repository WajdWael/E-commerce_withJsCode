// VAR
let productAmount = document.getElementById('product_amount');
let shopingCharge = document.getElementById('shoping_charge');
let totalAmount = document.getElementById('totalAmount');

// SHOW VAR
let box_2 = document.querySelector('.txt-between');
let bc = document.querySelector('.bc-2');

// PLUS BUTTON
const decreaseNumber = (ins, pric) => {
    var mens = document.getElementById(ins);
    var pric = document.getElementById(pric);

    if (mens.value <= 0) {
        mens.value = 0;
        alert('Negtive Quantity Not Allowed')
    } else {
        mens.value = parseInt(mens.value) - 1;
        mens.style.color = "#666";
        pric.innerHTML = parseInt(pric.innerHTML) - 20;
        productAmount.innerHTML = parseInt(productAmount.innerHTML) - 20;

        totalAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shopingCharge.innerHTML);
    }
}

// MINUS BUTTON 
const increaseNumber = (ins, pric) => {
    var mens = document.getElementById(ins);
    var pric = document.getElementById(pric);

    if (mens.value >= 5) {
        mens.value = 5;
        mens.style.color = 'red';
        alert('max 5 allowed');
    } else {
        mens.value = parseInt(mens.value) + 1;
        pric.innerHTML = parseInt(pric.innerHTML) + 20;
        productAmount.innerHTML = parseInt(productAmount.innerHTML) + 20;

        totalAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shopingCharge.innerHTML);
    }
}

// SHOW EVENT LISTENRE
box_2.addEventListener('click', function () {
    if (!bc.classList.contains('show-bc-2')) {
        bc.classList.add('show-bc-2');
    } else {
        bc.classList.remove('show-bc-2');
    }
})

// DISCOUNT FUNCTION:
const discount_Code = document.getElementById('discountcode');
const discountCode = () => {
    let amount = parseInt(totalAmount.innerHTML);
    let theCode = document.getElementById('thecode');
    let newtotalAmount = amount - 20;
    if (discount_Code.value === 'waui') {
        totalAmount.innerHTML = newtotalAmount;
        theCode.innerHTML = "Hurray! Code Is Valid";
    } else if (discount_Code.value != 'waui') {
        theCode.innerHTML = "TryAgain! Valid Code Is WAUI";
    }
}
let arrCart = JSON.parse(localStorage.getItem('cart'));
console.log(arrCart);

const productList = document.querySelector('.product-list');
const ul = document.createElement('ul');

function deleteArray(item1, item2, item3, item4, item5) {

    for (let i = 0; i < arrCart.length; i++) {

        if (arrCart[i][0] == item1 && arrCart[i][1] == item2 && arrCart[i][2] == item3 && arrCart[i][3] == item4 && arrCart[i][4] == item5) {
            arrCart.splice(i,1);
            localStorage.setItem('cart', JSON.stringify(arrCart));
            location.reload();
        }
    }
}

function updateArray(item1, item2, item3, item4, item5, updateQuantity, updateTotal) {

    for (let i = 0; i < arrCart.length; i++) {

        if (arrCart[i][0] == item1 && arrCart[i][1] == item2 && arrCart[i][2] == item3 && arrCart[i][3] == item4 && arrCart[i][4] == item5) {
            arrCart[i][3] = updateQuantity;
            arrCart[i][4] = updateTotal;
            localStorage.setItem('cart', JSON.stringify(arrCart));
            console.log(arrCart);
        }
    }
}


function setList() {

    arrCart.forEach(item => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = item[0];
        img.alt = 'product image';
        li.appendChild(img);

        const productInfo = document.createElement('p');
        productInfo.innerHTML = `${item[1]}<span>$ ${item[2]}</span>`;
        li.appendChild(productInfo);

        const label = document.createElement('label');
        label.setAttribute('for', 'quantity');
        label.innerHTML = 'Quantity';

        const quantitySpan = document.createElement('span');

        const quantityInput = document.createElement('input');
        quantityInput.id = 'quantity';
        quantityInput.type = 'number';
        quantityInput.value = item[3];
        quantitySpan.appendChild(quantityInput);

        const arrowUp = document.createElement('img');
        arrowUp.id = 'arrow-up';
        arrowUp.src = 'assets/icon/arrow_up.png';
        arrowUp.alt = 'arrow up';
        quantitySpan.appendChild(arrowUp);

        const arrowDown = document.createElement('img');
        arrowDown.id = 'arrow-down';
        arrowDown.src = 'assets/icon/arrow_down.png';
        arrowDown.alt = 'arrow down';
        quantitySpan.appendChild(arrowDown);

        label.appendChild(quantitySpan);
        li.appendChild(label);

        const total = document.createElement('p');
        total.classList.add('Total');
        total.innerHTML = `Total Amount<span>$ ${item[4]}</span>`;
        li.appendChild(total);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        li.appendChild(removeButton);

        const removeVerify = document.createElement('div');
        removeVerify.classList.add('removeVerify');

        const arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrowLeft');
        removeVerify.appendChild(arrowLeft);

        const confirmMessage = document.createElement('p');
        confirmMessage.textContent = 'Are you sure you want to remove this item?';
        removeVerify.appendChild(confirmMessage);

        const buttonsDiv = document.createElement('div');

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancelBtn');
        cancelBtn.textContent = 'Cancel';
        buttonsDiv.appendChild(cancelBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = 'Remove';
        buttonsDiv.appendChild(removeBtn);

        removeVerify.appendChild(buttonsDiv);

        li.appendChild(removeVerify);

        ul.appendChild(li);

        //////////////////////add quanity and total
        arrowUp.addEventListener('click', function () {
            let currentValue = parseFloat(quantityInput.value);
            let addQuantity = parseFloat(currentValue + 1);
            let totalAmount = parseFloat(addQuantity * item[2]);
            console.log(totalAmount);
            console.log(item[4]);
            quantityInput.value = addQuantity;
            total.innerHTML = `Total Amount<span>$ ${totalAmount}</span>`;
            updateArray(item[0], item[1], item[2], item[3], item[4], addQuantity, totalAmount);
        });

        //////////////////////minus quanity and total
        arrowDown.addEventListener('click', function () {
            let currentValue = parseFloat(quantityInput.value);
            let minusQuantity = parseFloat(currentValue - 1);
            let totalAmount = parseFloat(item[4] - item[2]);
            console.log(totalAmount);
            console.log(item[4]);
            quantityInput.value = minusQuantity;
            total.innerHTML = `Total Amount<span>$ ${totalAmount}</span>`;
            updateArray(item[0], item[1], item[2], item[3], item[4], minusQuantity, totalAmount);
        });


        //////////////////////remove layout & button
        const modalOverlay = document.querySelector('.paymentBG');
        removeButton.addEventListener('click', function () {
            modalOverlay.style.display = "flex";
            removeVerify.style.display = "flex";
            removeVerify.style.zIndex = "10";
            li.style.position = "relative";
            li.style.zIndex = "10";

            cancelBtn.addEventListener('click', function () {
                modalOverlay.style.display = "none";
                removeVerify.style.display = "none";
                removeVerify.style.zIndex = "0";
                li.style.position = "static";
                li.style.zIndex = "0";
            });

            removeBtn.addEventListener('click', function () {
                modalOverlay.style.display = "none";
                removeVerify.style.display = "none";
                removeVerify.style.zIndex = "0";
                li.style.position = "static";
                li.style.zIndex = "0";
                deleteArray(item[0], item[1], item[2], item[3], item[4]);
            });
        });
    });
    productList.appendChild(ul);
}

setList();

//////////set item number at the cart
const span = document.querySelector('.header-main a > span');
span.innerHTML = arrCart.length;

///////////////////////////layout & button
const btnCheckout = document.getElementById('btnCheckout');
const btnPay = document.getElementById('btnPay');
const modalOverlay = document.querySelector('.paymentBG');
const paymentLayout = document.querySelector('.payment');
const closePayment = document.querySelector('.payment button');

///////////////////////////inputs
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const address2 = document.getElementById('address2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zcode = document.getElementById('zcode');
///////////////////////////payment inputs
const cardName = document.getElementById('cardName');
const cardNum = document.getElementById('cardNum');
const expiration = document.getElementById('expiration');
const cvc = document.getElementById('cvc');

zcode.addEventListener('input', function () {
    if (zcode.value.length >= 4) {
        zcode.value = zcode.value.slice(0, 4);
    }
});

btnCheckout.addEventListener('click', function () {
    if (fname.value == "" || lname.value == "" || address.value == "" || address2.value == "" || city.value == "" || state.value == "" || zcode.value == "" || zcode.value.length != 4) {
        alert('Please fill up all fields correctly.');
        fname.value == "" ? fname.style.border = "1px solid red" : fname.style.border = "1px solid green";
        lname.value == "" ? lname.style.border = "1px solid red" : lname.style.border = "1px solid green";
        address.value == "" ? address.style.border = "1px solid red" : address.style.border = "1px solid green";
        address2.value == "" ? address2.style.border = "1px solid red" : address2.style.border = "1px solid green";
        city.value == "" ? city.style.border = "1px solid red" : city.style.border = "1px solid green";
        state.value == "" ? state.style.border = "1px solid red" : state.style.border = "1px solid green";
        zcode.value == "" ? zcode.style.border = "1px solid red" : zcode.style.border = "1px solid green";
        zcode.value.length != 4 ? zcode.style.border = "1px solid red" : zcode.style.border = "1px solid green";
    } else {
        modalOverlay.style.display = "flex";
        paymentLayout.style.display = "flex";
    }

});

/////////////reset data
closePayment.addEventListener('click', function () {
    modalOverlay.style.display = "none";
    paymentLayout.style.display = "none";
    fname.value = "";
    fname.style.border = "1px solid #989898";
    lname.value = "";
    lname.style.border = "1px solid #989898";
    address.value = "";
    address.style.border = "1px solid #989898";
    address2.value = "";
    address2.style.border = "1px solid #989898";
    city.value = "";
    city.style.border = "1px solid #989898";
    state.value = "";
    state.style.border = "1px solid #989898";
    zcode.value = "";
    zcode.style.border = "1px solid #989898";

    cardName.value = "";
    cardName.style.border = "1px solid #989898";
    cardNum.value = "";
    cardNum.style.border = "1px solid #989898";
    expiration.value = "";
    expiration.style.border = "1px solid #989898";
    cvc.value = "";
    cvc.style.border = "1px solid #989898";
});

cardNum.addEventListener('input', function () {
    if (cvc.value.length >= 16) {
        cvc.value = cvc.value.slice(0, 16);
    }
});

cvc.addEventListener('input', function () {
    if (cvc.value.length >= 3) {
        cvc.value = cvc.value.slice(0, 3);
    }
});

btnPay.addEventListener('click', function () {
    if (cardName.value == "" || cardNum.value == "" || cardNum.value.length < 15 || expiration.value == "" || cvc.value == "" || cvc.value.length != 3) {
        alert('Invalid payment detail');
        cardName.value == "" ? cardName.style.border = "1px solid red" : cardName.style.border = "1px solid green";
        cardNum.value == "" ? cardNum.style.border = "1px solid red" : cardNum.style.border = "1px solid green";
        cardNum.value.length < 15 ? cardNum.style.border = "1px solid red" : cardNum.style.border = "1px solid green";
        expiration.value == "" ? expiration.style.border = "1px solid red" : expiration.style.border = "1px solid green";
        cvc.value == "" ? cvc.style.border = "1px solid red" : cvc.style.border = "1px solid green";
        cvc.value.length != 3 ? cvc.style.border = "1px solid red" : cvc.style.border = "1px solid green";
    } else {
        modalOverlay.style.display = "flex";
        paymentLayout.style.display = "flex";
        alert('Payment details are valid. Proceeding with payment...');
    }
});

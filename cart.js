let arrCart = JSON.parse(localStorage.getItem('cart'));
console.log(arrCart);

const productList = document.querySelector('.product-list');
const ul = document.createElement('ul');

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
});
productList.appendChild(ul);

//////////set item number at the cart
const span = document.querySelector('.header-main a > span');
span.innerHTML = arrCart.length;

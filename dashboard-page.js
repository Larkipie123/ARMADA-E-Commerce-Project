const modalOverlay = document.querySelector('.modal-overlay');
const showSignUpModal = document.querySelectorAll('.sign-up-button');
const signUpModal = document.querySelector('.sign-up-modal');
const showLogInModal = document.querySelectorAll('.log-in-button');
const logInModal = document.querySelector('.log-in-modal');
const closeModal = document.querySelectorAll('.close-button');
const categoryButton = document.querySelectorAll('.categories-button');
const productCards = document.querySelectorAll('.product-card');
const productQuantity = document.querySelector('.product-quantity');
const searchBar = document.getElementById('search-bar');
const searchForm = document.querySelector('.search-form');
const noResultsMessage = document.querySelector('.query-message');

showSignUpModal.forEach(signUpButton => {
    signUpButton.addEventListener("click", function (event) {
        logInModal.classList.remove('active');
        modalOverlay.classList.add('active');
        signUpModal.classList.add('active');
        event.preventDefault();
    });
});

showLogInModal.forEach(logInButton => {
    logInButton.addEventListener("click", function (event) {
        signUpModal.classList.remove('active');
        modalOverlay.classList.add('active');
        logInModal.classList.add('active');
        event.preventDefault();
    });
});

closeModal.forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        signUpModal.classList.remove('active');
        logInModal.classList.remove('active');
        modalOverlay.classList.remove('active');
    });
});

categoryButton.forEach(categoryBtn => {
    categoryBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const category = categoryBtn.getAttribute("data-category");
        let visibleProducts = 0;

        productCards.forEach(product => {
            const productCategory = product.getAttribute("data-category");

            if (category === "all-products" | productCategory === category) {
                product.style.display = "block";
                visibleProducts++;
            } else {
                product.style.display = "none";
            }
        });

        const categoryName = categoryBtn.querySelector("p").innerText;
        productQuantity.innerText = `${categoryName} (${visibleProducts})`
    });
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase().trim();
    let visibleProducts = 0;

    productCards.forEach(product => {
        const productName = product.querySelector('.product-name').innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    productQuantity.innerText = searchValue
        ? `Search Results (${visibleProducts})`
        : `All Products (${productCards.length})`;

    noResultsMessage.style.display = visibleProducts === 0 ? "block" : "none";
});



// Get item-num attribute
productCards.forEach(card => {
    const link = card.querySelector('a');

    card.addEventListener('click', function(event) {
        event.preventDefault();  

        link.setAttribute('href', 'product.html');

        const category = card.getAttribute('data-category');
        const itemNum = card.getAttribute('item-num');

        localStorage.setItem('category', category);
        localStorage.setItem('itemNum', itemNum);

        window.location.href = link.getAttribute('href');
    });
});

/////dummy
localStorage.setItem('userLoggedIn', true);
console.log(localStorage.getItem('userLoggedIn'));

document.addEventListener("DOMContentLoaded", function () {
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
    const onboardingButtons = document.querySelector('.onboarding-buttons');
    const profileMenu = document.querySelector('.profile-menu');
    const profilePicture = document.querySelector('.profile-icon');
    const dropdown = document.querySelector('.dropdown');
    const signOutButton = document.getElementById('sign-out-button');
    const onboardingTriggers = document.querySelectorAll('.onboarding-button');
    const signUpForm = document.querySelector('.sign-up-form form');
    const logInForm = document.querySelector('.log-in-form form');
    const categoryCard = document.querySelectorAll('.categories-card');
    const cartButton = document.querySelector('.shopping-cart-button');

    // Array of greetings

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

    categoryCard.forEach(card => {
        card.addEventListener("click", function () {
            categoryCard.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
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

    function showProfileMenu() {
        console.log("Showing profile menu...");
        onboardingButtons.classList.add("hidden");
        profileMenu.style.display = "block";
    }

    function hideProfileMenu() {
        console.log("Hiding profile menu...");
        profileMenu.classList.add("hidden");
        onboardingButtons.classList.remove("hidden");
    }

    let isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
    console.log("Is user logged in?", isLoggedIn);

    if (isLoggedIn) {
        showProfileMenu();
    } else {
        hideProfileMenu();
    }

    function validateForm(form) {
        const inputs = form.querySelectorAll("input");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid lightgray";
            }
        });
        return valid;
    }

    // Handle onboarding buttons inside modals
    onboardingTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();

            const isSignUp = trigger.innerText.trim().toLowerCase() === "sign up";
            const form = isSignUp ? signUpForm : logInForm;

            if (validateForm(form)) {
                console.log("User clicked log in/sign up");

                localStorage.setItem("userLoggedIn", "true");

                location.reload();
            } else {
                alert("Fields cannot be empty!");
            }
        })
    });

    profilePicture.addEventListener("click", function () {
        console.log("Toggling profile dropdown");
        dropdown.classList.toggle("hidden");
    });

    signOutButton.addEventListener("click", function () {
        console.log("User logged out");
        localStorage.removeItem("userLoggedIn");
        location.reload();
    });

    // Get item-num attribute
    productCards.forEach(card => {
        const link = card.querySelector('a');

        card.addEventListener('click', function (event) {
            event.preventDefault();

            link.setAttribute('href', 'product.html');

            const category = card.getAttribute('data-category');
            const itemNum = card.getAttribute('item-num');

            localStorage.setItem('category', category);
            localStorage.setItem('itemNum', itemNum);

            window.location.href = link.getAttribute('href');
        });
    });

    // Connect cart to dashboard
    if (cartButton) {
        cartButton.addEventListener("click", function(event) {
            event.preventDefault();
    
            if (isLoggedIn) {
                // User is logged in, go to cart page
                window.location.href = "cart.html";
            } else {
                // User is NOT logged in, show login modal
                if (logInModal && modalOverlay) {
                    modalOverlay.classList.add("active");
                    logInModal.classList.add("active");
                }
            }
        });
    }
});




/////dummy
//localStorage.setItem('userLoggedIn', true);
//console.log(localStorage.getItem('userLoggedIn'));

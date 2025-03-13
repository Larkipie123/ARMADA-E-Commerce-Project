const products = [
    {
        name: "Classic Butter Croissant",
        price: 60,
        quantity: 10,
        description: "Light, flaky, and irresistibly buttery—our Classic Butter Croissant is baked to golden perfection, with delicate layers that melt in your mouth. A timeless indulgence, perfect for any moment of the day!",
        rating: 5,
        image: 'classic-butter-croissant.webp',
        category: 'classics'
    },
    {
        name: "Ham and Cheese Croissant",
        price: 89,
        quantity: 100,
        description: "Croissant dough rolled with ham and cheddar cheese topped with a sprinkle of parsley flakes.",
        rating: 5,
        image: 'ham-and-cheese-croissant.webp',
        category: 'classics'
    },
    {
        name: "Kouign-Amann",
        price: 70,
        quantity: 100,
        description: "Made with our croissant dough generously coated with salted caramel sugar.",
        rating: 5,
        image: 'kouign-amann.webp',
        category: 'classics'
    },
    {
        name: "Apple Danish",
        price: 70,
        quantity: 100,
        description: "Croissant dough topped with cheesecake pastry cream and apple slices.",
        rating: 5,
        image: 'apple-danish.webp',
        category: 'classics'
    },
    {
        name: "Pain Au Chocolate",
        price: 70,
        quantity: 100,
        description: "A timeless French classic—our Pain au Chocolat features buttery, flaky pastry wrapped around rich, silky chocolate. Perfectly golden and irresistibly indulgent in every bite!",
        rating: 5,
        image: 'pain-au-chocolat.webp',
        category: 'classics'
    },
    {
        name: "Strawberry Danish",
        price: 81,
        quantity: 100,
        description: "Danish pastry baked with cream and strawberry compote topping",
        rating: 5,
        image: 'strawberry-danish.webp',
        category: 'classics'
    },
    {
        name: "Double Chocolate Pain Au Chocolate",
        price: 85,
        quantity: 100,
        description: "A rich twist on a classic—our Double Chocolate Pain Au Chocolat features buttery, flaky pastry filled with two types of chocolate, creating a decadent, indulgent experience.",
        rating: 5,
        image: 'double-chocolate-pain-au-chocolat.webp',
        category: 'chocolates'
    },
    {
        name: "Chocolate Kouign-Amann",
        price: 78,
        quantity: 100,
        description: "Crispy, caramelized layers of buttery pastry infused with rich chocolate. A perfect balance of sweet, flaky, and indulgently satisfying in every bite!",
        rating: 5,
        image: 'chocolate-kouign-amann.webp',
        category: 'chocolates'
    },
    {
        name: "Chocolate Hazelnut Croissant",
        price: 89,
        quantity: 100,
        description: "Golden, flaky layers wrapped around a luscious blend of rich chocolate and roasted hazelnuts. A perfect balance of crisp, buttery pastry and smooth, nutty sweetness in every bite!",
        rating: 5,
        image: 'chocolate-hazelnut-croissant.webp',
        category: 'chocolates'
    },
    {
        name: "White Chocolate Matcha Croissants",
        price: 120,
        quantity: 100,
        description: "A fusion of two flavors—our White Chocolate Matcha Croissants combine the smooth sweetness of white chocolate with the vibrant green tea notes of matcha in a buttery, flaky croissant.",
        rating: 5,
        image: 'white-chocolate-matcha-croissants.webp',
        category: 'chocolates'
    },
    {
        name: "Caldereta Croissant",
        price: 145,
        quantity: 100,
        description: "Croissant with shredded beef chunks in cheese caldereta sauce, topped with sesame seeds and a pickled pepper.",
        rating: 5,
        image: 'caldereta-croissant.webp',
        category: 'savory-line'
    },
    {
        name: "Cubano Pork Roll",
        price: 140,
        quantity: 100,
        description: "Croissant roll with Cuban pork sausage, green chili pepper, and pimiento cheese with pickle relish.",
        rating: 5,
        image: 'cubano-pork-roll.webp',
        category: 'savory-line'
    },
    {
        name: "Spinach Cheese Quiche",
        price: 91,
        quantity: 100,
        description: "Savory danish pastry with a cheddar, spinach, and egg filling.",
        rating: 5,
        image: 'spinach-cheese-quiche.webp',
        category: 'savory-line'
    },
    {
        name: "Spinach and Garlic Cheese Croissant Pizza",
        price: 505,
        quantity: 100,
        description: "Croissant dough pizza with our fondue cheese sauce with garlic and spinach.",
        rating: 5,
        image: 'spinach-and-garlic-cheese-croissant-pizza.webp',
        category: 'savory-line'
    },
    {
        name: "Almond Croissant",
        price: 140,
        quantity: 30,
        description: "A luxurious twist on a classic—our Almond Croissant is filled with rich almond cream, topped with sliced almonds, and baked to golden perfection. Light, flaky, and irresistibly nutty!",
        rating: 5,
        image: 'almond-croissant.webp',
        category: 'specials'
    },
    {
        name: "Paris Brest Croissant",
        price: 160,
        quantity: 100,
        description: "A decadent fusion of two French classics—our Paris Brest Croissant features a flaky, buttery croissant filled with luscious praline cream and topped with toasted almonds. A perfect balance of crisp, creamy, and nutty indulgence!",
        rating: 5,
        image: 'paris-brest-croissant.webp',
        category: 'specials'
    }
];

console.log(localStorage.getItem('userLoggedIn'));
const isLoggedIn = localStorage.getItem('userLoggedIn');
const category = localStorage.getItem('category');
const itemNum = localStorage.getItem('itemNum');
const productImgSection = document.querySelector('.product-image');
function setProdImg() {

    const productImage = document.querySelector('.product-image img');

    let imgFolder = "";

    if (category == "classics-category") {
        imgFolder = "classics";
    } else if (category == "chocolates-category") {
        imgFolder = "chocolates";
    } else if (category == "savory-category") {
        imgFolder = "savory-line";
    } else if (category == "specials-category") {
        imgFolder = "specials";
    } else {
        imgFolder = "classics";
    }

    productImage.src = `assets/${products[itemNum - 1].category}/${products[itemNum - 1].image}`;

    const ul = document.createElement('ul');

    products.forEach((value) => {
        if (value.category == imgFolder) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = `assets/${value.category}/${value.image}`;
            img.alt = 'product img';
            li.appendChild(img);
            ul.appendChild(li);
        }
    });
    productImgSection.appendChild(ul);
}

function setProdDetail() {
    const productName = document.querySelector('.product-items h1');
    const productPrice = document.querySelector('.price');
    const productDescription = document.querySelector('.detail');

    productName.innerHTML = products[itemNum - 1].name;
    productPrice.innerHTML = products[itemNum - 1].price;
    productDescription.innerHTML = products[itemNum - 1].description;
}

function setSimilarProduct() {
    const similarItemsSection = document.querySelector('.similar-items');

    let imgFolder = "";

    if (category == "classics-category") {
        imgFolder = "classics";
    } else if (category == "chocolates-category") {
        imgFolder = "chocolates";
    } else if (category == "savory-category") {
        imgFolder = "savory-line";
    } else if (category == "specials-category") {
        imgFolder = "specials";
    } else {
        imgFolder = "classics";
    }

    let item = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.category === imgFolder) {
            item += 1;
        }

    }

    const ul = document.createElement('ul');
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (product.category == imgFolder && product.name != products[itemNum - 1].name) {

            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = `assets/${imgFolder}/${product.image}`;
            img.alt = 'product img';

            const div = document.createElement('div');

            const productAssets = document.createElement('div');
            productAssets.classList.add('product-assets');

            const h5 = document.createElement('h5');
            h5.textContent = product.name;

            const ratingList = document.createElement('ul');
            for (let j = 0; j < 5; j++) {
                const liRating = document.createElement('li');
                liRating.innerHTML = '&#9733;';
                ratingList.appendChild(liRating);
            }

            const liRatingCount = document.createElement('li');
            liRatingCount.textContent = `${product.rating} Rating`;
            ratingList.appendChild(liRatingCount);

            productAssets.appendChild(h5);
            productAssets.appendChild(ratingList);

            const p = document.createElement('p');
            p.textContent = `$ ${product.price}`;

            div.appendChild(productAssets);
            div.appendChild(p);
            li.appendChild(img);
            li.appendChild(div);
            ul.appendChild(li);
        }
    }

    similarItemsSection.appendChild(ul);
}

const quantityInput = document.getElementById('quantity');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

arrowUp.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < products[itemNum - 1].quantity) {
        quantityInput.value = currentValue + 1;
    }
});


arrowDown.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
    }
});

const modalOverlay = document.querySelector(".modal-overlay");
const verifyCart = document.querySelector(".cart-valid");
const btnAddCart = document.getElementById("addCartBtn");


let arrCart = JSON.parse(localStorage.getItem('cart'));

btnAddCart.addEventListener('click', function () {
    if (isLoggedIn == "true" && quantityInput.value != 0) {
        modalOverlay.style.display = "flex";
        verifyCart.style.display = "flex";
        let total = parseFloat(quantityInput.value * products[itemNum - 1].price);
        let newCart = [`assets/${products[itemNum - 1].category}/${products[itemNum - 1].image}`, products[itemNum - 1].name, products[itemNum - 1].price, quantityInput.value, total];
        arrCart.push(newCart);
        localStorage.setItem('cart', JSON.stringify(arrCart));
        const span = document.querySelector('.header-main a > span');
        span.innerHTML = arrCart.length;
        quantityInput.value = "0";
        setTimeout(() => {
            arrCart.push
            modalOverlay.style.display = "none";
            verifyCart.style.display = "none";
        }, 3000)

    } else {
        alert('Login first!');
    }
});

const cartLink = document.querySelector('.header-main a');

cartLink.addEventListener('click', function () {
    if (isLoggedIn == "true") {
        cartLink.href = 'cart.html';
        window.location.href = link.getAttribute('href');
    } else {
        alert('Login first!');
    }
});

const span = document.querySelector('.header-main a > span');
span.innerHTML = arrCart.length;

setProdDetail();
setProdImg();
setSimilarProduct();
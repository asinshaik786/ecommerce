// Scroll to Top Button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Add to Cart Functionality
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product-item button");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.closest(".product-item");
            const productName = product.querySelector("h3").innerText;
            const productPrice = product.querySelector("p").innerText;
            const productImage = product.querySelector("img").src;

            addToCart(productName, productPrice, productImage);
        });
    });
});

function addToCart(name, price, image) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${price}</p>
        <input type="number" value="1" min="1">
        <button>Remove</button>
    `;

    const cartItems = document.querySelector(".cart-items");
    cartItems.appendChild(cartItem);

    updateTotal();
}

// Remove Item from Cart
document.addEventListener("click", function (event) {
    if (event.target && event.target.textContent === "Remove") {
        const cartItem = event.target.closest(".cart-item");
        cartItem.remove();
        updateTotal();
    }
});

// Update Total Price
function updateTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;

    cartItems.forEach((item) => {
        const price = parseFloat(item.querySelector("p").innerText.replace("$", ""));
        const quantity = parseInt(item.querySelector("input").value);
        total += price * quantity;
    });

    document.querySelector(".total h3").innerText = `Total: $${total.toFixed(2)}`;
}

// Form Validation for Contact Us Page
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Thank you for contacting us! We will get back to you soon.");
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
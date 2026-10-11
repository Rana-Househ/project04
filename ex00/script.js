const themeBtn = document.querySelector("#theme-btn");
const form = document.querySelector("#contact-form");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#form-message");

    message.textContent =
        "Thank you, " + name + ". Your message was received.";

    form.reset();
});
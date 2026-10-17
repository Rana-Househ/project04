const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "Light Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
        }
    });
}


const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        // Show loading message
        if (formMessage) {
            formMessage.textContent = "Sending your message...";
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                if (formMessage) {
                    formMessage.textContent =
                        "Your message was sent successfully!";
                }

                contactForm.reset();
            } else {
                if (formMessage) {
                    formMessage.textContent =
                        "Unable to send your message. Please try again.";
                }
            }
        } catch (error) {
            if (formMessage) {
                formMessage.textContent =
                    "Connection error. Please check your internet and try again.";
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        }
    });
  
}

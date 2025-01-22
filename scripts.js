// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        alert(`Thank you for your message!\n\nEmail: ${email}\nMessage: ${message}`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});

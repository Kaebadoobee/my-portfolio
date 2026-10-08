function introduceMe() {

    const nameInput = document.getElementById("visitorName");
    const greeting = document.getElementById("greeting");

    let visitorName = nameInput.value.trim();

    if (visitorName === "") {

        greeting.textContent = "Please enter your name first. ♡";

    } else {

        greeting.textContent =
            `Hi, ${visitorName}! Nice to meet you. I'm Karel Jane Masangkay, an Information Technology student. Thank you for visiting my page! ♡`;

    }
}


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();

    if (fullName === "") {

        alert("Please enter your full name.");

    } else {

        alert(`Thank you, ${fullName}! Your message has been submitted.`);

        contactForm.reset();

    }

});

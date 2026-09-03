const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
            question.classList.remove("active");
        } else {
            answer.style.display = "block";
            question.classList.add("active");
        }

    });
});
const projectBtn = document.getElementById("projectBtn");
const projectDetails = document.getElementById("projectDetails");

projectBtn.addEventListener("click", function() {

    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
        projectBtn.textContent = "View Project Details";
    } else {
        projectDetails.style.display = "block";
        projectBtn.textContent = "Hide Project Details";
    }

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }

});
const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach(function(card) {

    card.addEventListener("click", function() {

        pricingCards.forEach(function(item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

    });

});
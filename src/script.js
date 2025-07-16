// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Hometown Homepage loaded!");

    // Reveal guide quote on click
    const guideQuote = document.querySelector(".guide-quote");
    const guideCard = document.querySelector(".guide-section");

    guideCard.addEventListener("click", () => {
        guideQuote.classList.toggle("visible");
    });

    // Add hover alert on activity cards (demo purpose)
    const activityCards = document.querySelectorAll(".card");

    activityCards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            card.style.cursor = "pointer";
            card.style.backgroundColor = "#f0fff0";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "white";
        });
    });
});

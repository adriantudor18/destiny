document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active navigation link
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // here ill add some hover effects to my images
    let images = document.querySelectorAll(".hover-effect");
    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });

    window.openTipsModal = function () {
        document.getElementById("tipsModal").style.display = "block";
    };

    window.closeTipsModal = function () {
        document.getElementById("tipsModal").style.display = "none";
    };

    window.onclick = function (event) {
        let modal = document.getElementById("tipsModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

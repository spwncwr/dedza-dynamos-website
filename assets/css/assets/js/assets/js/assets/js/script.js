const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

    document.querySelectorAll(".mobile-menu a").forEach(function(link) {

        link.addEventListener("click", function() {

            mobileMenu.classList.remove("active");
            menuToggle.innerHTML = "☰";

        });

    });

}

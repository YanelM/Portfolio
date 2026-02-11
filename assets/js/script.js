window.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const toast = document.getElementById("about-popup");

    if (!aboutSection || !toast) return; // sécurité

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            toast.classList.add("show");      // AFFICHÉ tant qu'on voit la section
            } else {
            toast.classList.remove("show");  // CACHÉ dès qu'on la quitte
            }
        });
        },
        {
        threshold: 0.3, // 30% suffisent
        }
    );

    observer.observe(aboutSection);


    document.querySelectorAll(".btn-voir-plus").forEach(btn => {
        btn.addEventListener("click", function () {

            const item = this.closest(".item-projets");

            const suite = item.querySelector(".suite");
            const carousel = item.querySelector(".carousel");
            const lienProjet = item.querySelector(".lien-projet");

            const isHidden = suite.style.display === "none" || suite.style.display === "";

            // Toggle suite
            suite.style.display = isHidden ? "inline" : "none";

            // Toggle carousel
            carousel.style.display = isHidden ? "none" : "block";

            // Toggle lien
            lienProjet.style.display = isHidden ? "none" : "inline";

            // Texte bouton
            this.textContent = isHidden ? "Voir moins" : "Voir plus";
        });
    });

    $(document).ready(function() {
        $("#mobile-menu-button").click(function() {
            $("header").addClass("menu-open");
            $("#mobile-menu-button").css("visibility", "hidden");
            $("#mobile-menu-button-fermer").css("visibility", "visible");
            $(".header-nav").removeClass("visi");
        });

        $("#mobile-menu-button-fermer").click(function() {
            $("header").removeClass("menu-open");
            $("#mobile-menu-button").css("visibility", "visible");
            $("#mobile-menu-button-fermer").css("visibility", "hidden");
            $(".header-nav").addClass("visi");
        });

        $(".menu-souligne").click(function() {
            if (window.innerWidth <= 600) {  // uniquement en mobile
                $("header").removeClass("menu-open");
                $("#mobile-menu-button").css("visibility", "visible");
                $("#mobile-menu-button-fermer").css("visibility", "hidden");
                $(".header-nav").addClass("visi");
            }
        });
    });

});




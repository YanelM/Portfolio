// Attend que le HTML soit chargé
window.addEventListener("DOMContentLoaded", () => {

    // Récupération de la section about et du popup
    const aboutSection = document.getElementById("about");
    const toast = document.getElementById("about-popup");

    // Sécurité si un élément est manquant
    if (!aboutSection || !toast) return;

    // Observer pour afficher/cacher le popup selon la visibilité
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            toast.classList.toggle("show", entry.isIntersecting);
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);


    // ===== Création de la sphère =====
    const sphere = document.getElementById("sphere");
    const rings = 24;
    const dotsPerRing = 32;
    const radius = 80;

    for (let i = 0; i < rings; i++) {
        const ring = document.createElement("div");
        ring.className = "ring";

        const theta = (i / (rings - 1)) * Math.PI;
        const ringRadius = Math.sin(theta) * radius;
        const y = Math.cos(theta) * radius;

        ring.style.transform = `translate(-50%, -50%) translateY(${y}px)`;

        for (let j = 0; j < dotsPerRing; j++) {
            const dot = document.createElement("div");
            dot.className = "dot";

            const phi = (j / dotsPerRing) * 2 * Math.PI;
            const x = Math.cos(phi) * ringRadius;
            const z = Math.sin(phi) * ringRadius;

            dot.style.transform = `translateX(${x}px) translateZ(${z}px)`;
            ring.appendChild(dot);
        }

        sphere.appendChild(ring);
    }


    // ===== Bouton "Voir plus" =====
    document.querySelectorAll(".btn-voir-plus").forEach(btn => {
        btn.addEventListener("click", function () {

            const item = this.closest(".item-projets");
            const suite = item.querySelector(".suite");
            const carousel = item.querySelector(".carousel");
            const lienProjet = item.querySelector(".lien-projet");

            const isHidden = suite.style.display === "none" || suite.style.display === "";

            suite.style.display = isHidden ? "inline" : "none";
            carousel.style.display = isHidden ? "none" : "block";
            lienProjet.style.display = isHidden ? "none" : "inline";

            this.textContent = isHidden ? "Voir moins" : "Voir plus";
        });
    });


    // ===== Menu mobile =====
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
    });

});

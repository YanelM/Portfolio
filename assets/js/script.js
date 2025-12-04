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

    const sphere = document.getElementById("sphere");

    const rings = 24;     // nombre d'anneaux
    const dotsPerRing = 32; // points par anneau
    const radius = 80;   // rayon de la sphère

    for (let i = 0; i < rings; i++) {

        const ring = document.createElement("div");
        ring.className = "ring";

        // angle vertical de l’anneau
        const theta = (i / (rings - 1)) * Math.PI; // 0 → π

        // rayon horizontal de l’anneau
        const ringRadius = Math.sin(theta) * radius;

        // hauteur de l’anneau
        const y = Math.cos(theta) * radius;

        ring.style.transform = `translate(-50%, -50%) translateY(${y}px)`;

        for (let j = 0; j < dotsPerRing; j++) {

            const dot = document.createElement("div");
            dot.className = "dot";

            // angle autour du cercle
            const phi = (j / dotsPerRing) * 2 * Math.PI;

            const x = Math.cos(phi) * ringRadius;
            const z = Math.sin(phi) * ringRadius;

            dot.style.transform = `translateX(${x}px) translateZ(${z}px)`;

            ring.appendChild(dot);
        }

        sphere.appendChild(ring);
    }

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



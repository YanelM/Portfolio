window.addEventListener("DOMContentLoaded", (event) => {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const targetPosition = target.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // 👈 durée du défilement (en ms) — plus grand = plus lent
            let start = null;

            function animation(currentTime) {
            if (start === null) start = currentTime;
            const progress = currentTime - start;
            const percent = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * percent);
            if (progress < duration) requestAnimationFrame(animation);
            }

            requestAnimationFrame(animation);
        });
    });

    const boxes = document.querySelectorAll('.item-projets');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            const siblings = box.parentElement.querySelectorAll('.item-projets');
            siblings.forEach(sib => {
            if (sib !== box) {
                sib.style.filter = 'brightness(0.5)';
            }
            });
        });

        box.addEventListener('mouseleave', () => {
            const siblings = box.parentElement.querySelectorAll('.item-projets');
            siblings.forEach(sib => {
                sib.style.filter = 'brightness(1)';
            });
        });
    });

    const about = document.getElementById("about");
    const formations = document.getElementById("formations");
    const btn = document.getElementById("scroll-down-btn");

    function showBtn() {
    btn.style.display = "block";
    }

    function hideBtn() {
    btn.style.display = "none";
    }

    // Observer la section "À propos"
    const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        showBtn();
        } else {
        hideBtn();
        }
    });
    }, { threshold: 0.1 });

    observerAbout.observe(about);

    // Observer la section "Formations" pour cacher le bouton
    const observerFormations = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        hideBtn();     // on cache si on entre dans formations
        }
    });
    }, { threshold: 0.1 });

    observerFormations.observe(formations);

    btn.addEventListener("click", () => {
        window.scrollBy({
            top: 800,
            behavior: "smooth",
        });
    });
    
});

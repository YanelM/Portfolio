if (document.body.classList.contains("playfolio-mode")) {
    window.addEventListener("DOMContentLoaded", () => {
        const body = document.body;
        const nav = document.querySelector(".folio-rail");
        const menuButton = document.querySelector(".folio-menu");
        const paletteButton = document.querySelector(".palette-button");
        const skillPreview = document.querySelector(".skill-preview p");
        const dialog = document.querySelector(".project-dialog");
        const dialogContent = document.querySelector(".dialog-content");
        const dialogClose = document.querySelector(".dialog-close");

        const projectDetails = {
            baresto: {
                title: "Baresto",
                intro: "Refonte d'un site client réalisée pendant mon stage en agence web.",
                details: [
                    "Intégration sur WordPress.",
                    "Respect précis d'une charte graphique.",
                    "Renforcement de mes compétences en refonte et maintenance de site."
                ],
                tags: ["WordPress", "Intégration", "Charte graphique"],
                link: "https://baresto.fr/"
            },
            alldesign: {
                title: "AllDesign Angoulême",
                intro: "Site WordPress créé de A à Z pour une agence web.",
                details: [
                    "Création complète du site.",
                    "Intégration WordPress.",
                    "Optimisation SEO du site.",
                    "Mise en avant des services et réalisations de l'agence."
                ],
                tags: ["WordPress", "SEO", "Création de A à Z"],
                link: "https://alldesign-angouleme.fr"
            },
            graphoenix: {
                title: "Graphoenix",
                intro: "Intervention sur un site WordPress pendant un stage en agence web.",
                details: [
                    "Mise à jour globale du site.",
                    "Travail sur WordPress Divi.",
                    "Optimisation de l'affichage responsive téléphone et tablette.",
                    "Ajustements pour améliorer la cohérence visuelle du site."
                ],
                tags: ["WordPress", "Mise à jour globale", "Responsive téléphone/tablette"],
                link: "https://www.graphoenix.fr"
            },
            rapportstageinfini: {
                title: "Rapport Stage Infini",
                intro: "Rapport de stage agence web développé entièrement en code.",
                details: [
                    "Site codé de A à Z.",
                    "Développement PHP.",
                    "Mise en page et animations en CSS.",
                    "Interactions développées en JavaScript."
                ],
                tags: ["PHP", "CSS", "JavaScript", "Code de A à Z"],
                link: "https://rapport-stage-infini.fr"
            }
        };

        menuButton?.addEventListener("click", () => {
            nav.classList.toggle("is-open");
            menuButton.textContent = nav.classList.contains("is-open") ? "Fermer" : "Menu";
        });

        document.querySelectorAll(".folio-rail a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                if (menuButton) {
                    menuButton.textContent = "Menu";
                }
            });
        });

        paletteButton?.addEventListener("click", () => {
            const palettes = ["palette-sunrise", "palette-fresh", "palette-pop"];
            const current = palettes.find((palette) => body.classList.contains(palette));
            const next = palettes[(palettes.indexOf(current) + 1) % palettes.length] || palettes[0];

            body.classList.remove(...palettes);
            body.classList.add(next);
        });

        document.querySelectorAll(".skill-chip").forEach((chip) => {
            chip.addEventListener("click", () => {
                document.querySelectorAll(".skill-chip").forEach((item) => item.classList.remove("active"));
                chip.classList.add("active");

                if (skillPreview) {
                    skillPreview.textContent = chip.dataset.skill;
                }
            });
        });

        document.querySelectorAll(".project-more").forEach((button) => {
            button.addEventListener("click", () => {
                const card = button.closest(".project-card");
                const project = card ? projectDetails[card.dataset.project] : null;

                if (!dialog || !dialogContent || !card || !project) {
                    return;
                }

                const projectImage = card.querySelector("img");
                const imageMarkup = projectImage
                    ? `<img class="dialog-project-image" src="${projectImage.getAttribute("src")}" alt="${projectImage.getAttribute("alt") || `Aperçu du projet ${project.title}`}">`
                    : "";

                dialogContent.innerHTML = `
                    <p class="folio-eyebrow">Détails projet</p>
                    <h2>${project.title}</h2>
                    ${imageMarkup}
                    <p>${project.intro}</p>
                    <ul>
                        ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
                    </ul>
                    <div class="project-tags">
                        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                    </div>
                    <a class="folio-button primary" href="${project.link}" target="_blank" rel="noreferrer">Ouvrir le site</a>
                `;

                dialog.showModal();
            });
        });

        dialogClose?.addEventListener("click", () => {
            dialog.close();
        });

        dialog?.addEventListener("click", (event) => {
            if (event.target === dialog) {
                dialog.close();
            }
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("is-visible", entry.isIntersecting);
                });
            },
            { threshold: 0.16 }
        );

        document.querySelectorAll(".folio-section, .project-card, .route-card").forEach((element) => {
            observer.observe(element);
        });
    });
} else {
const bookSpreads = [
    {
        id: "home",
        label: "Accueil",
        left: {
            kicker: "Couverture",
            title: "Yanel Moisson",
            subtitle: "Apprenti développeur web",
            text: [
                "Je conçois des interfaces web modernes, responsive et agréables à utiliser.",
                "Ce portfolio se lit comme un carnet de parcours : profil, compétences, projets et contact se dévoilent page après page."
            ],
            actions: [
                { label: "Télécharger mon CV", href: "assets/fichier/CV_Yanel_Moisson.pdf", download: true },
                { label: "Voir mes projets", action: "projets" }
            ]
        },
        right: {
            kicker: "Portrait",
            title: "Développeur web en construction",
            image: "assets/images/yanel_moisson_photo.jpg",
            imageAlt: "Portrait de Yanel Moisson",
            text: [
                "Basé à Angoulême, je développe mon savoir-faire à travers des projets concrets, de la veille et des expériences professionnelles."
            ],
            stats: [
                ["20 ans", "Curieux et motivé"],
                ["Web", "Intégration et interfaces"],
                ["Objectif", "Progresser sur des projets utiles"]
            ]
        }
    },
    {
        id: "about",
        label: "Profil",
        left: {
            kicker: "À propos",
            title: "Créer des sites avec une vraie ambiance",
            text: [
                "Je suis passionné par la création de sites web esthétiques et immersifs, pensés pour offrir une expérience unique sans perdre en clarté.",
                "J'accorde beaucoup d'importance à l'apprentissage, à la remise en question et au travail bien fait."
            ]
        },
        right: {
            kicker: "Compétences",
            title: "Ma boîte à outils",
            text: [
                "J'avance avec une base front-end solide, complétée par WordPress, PHP, Figma et GitHub."
            ],
            tags: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Figma", "GitHub"],
            code: [
                "const developer = {",
                "  name: 'Yanel MOISSON',",
                "  role: 'Web Developer',",
                "  passion: 'Creating web experiences'",
                "};"
            ]
        }
    },
    {
        id: "parcours",
        label: "Parcours",
        left: {
            kicker: "Expériences",
            title: "Premiers terrains professionnels",
            timeline: [
                {
                    title: "Concepteur web - Stage",
                    date: "Avril - Mai 2025",
                    place: "Immersive, agence web à Orléans",
                    items: [
                        "Mise en place d'environnements d'hébergement",
                        "Intégration de designs sur WordPress",
                        "Maintenance technique de sites clients"
                    ]
                },
                {
                    title: "Création de contenu - Bénévolat",
                    date: "2024",
                    place: "Collectif \"Pas de bébés à la consigne Charente\"",
                    items: ["Création de visuels pour Facebook"]
                }
            ]
        },
        right: {
            kicker: "Formations",
            title: "Apprendre, pratiquer, consolider",
            timeline: [
                {
                    title: "Licence Pro Métiers de l'informatique - Applications web",
                    date: "2024 - 2027",
                    place: "CVTIC - Université de Limoges"
                },
                {
                    title: "Licence Informatique - Première année",
                    date: "2023 - 2024",
                    place: "Université de Limoges"
                },
                {
                    title: "Baccalauréat général",
                    date: "2023",
                    place: "Lycée de Confolens",
                    items: ["Spécialités : Mathématiques et NSI"]
                }
            ]
        }
    },
    {
        id: "projets",
        label: "Projets",
        left: {
            kicker: "Projet 01",
            title: "Baresto",
            image: "assets/images/baresto.png",
            imageAlt: "Aperçu du projet Baresto",
            text: [
                "Pendant mon stage, j'ai travaillé sur la refonte du site d'un client nommé Baresto.",
                "Ce projet m'a permis de renforcer ma maîtrise de WordPress et d'apprendre à respecter précisément une charte graphique."
            ],
            tags: ["WordPress", "Intégration", "Charte graphique"],
            link: { label: "Voir le site", href: "https://baresto.fr/" }
        },
        right: {
            kicker: "Projet 02",
            title: "AllDesign Angoulême",
            image: "assets/images/alldesign.png",
            imageAlt: "Aperçu du projet AllDesign Angoulême",
            text: [
                "Site WordPress créé de A à Z pour une agence web.",
                "Le projet met en avant les services, les réalisations et l'optimisation SEO."
            ],
            tags: ["WordPress", "SEO", "Création de A à Z"],
            link: { label: "Voir le site", href: "https://alldesign-angouleme.fr" }
        }
    },
    {
        id: "contact",
        label: "Contact",
        left: {
            kicker: "Contact",
            title: "Échangeons autour d'un projet web",
            text: [
                "N'hésitez pas à me contacter, je serai ravi d'échanger avec vous autour d'un site, d'une refonte ou d'une opportunité professionnelle."
            ],
            contacts: [
                { label: "yanel.moisson@gmail.com", href: "mailto:yanel.moisson@gmail.com" },
                { label: "+33 7 67 83 50 05", href: "tel:+33767835005" },
                { label: "Angoulême, France", href: "https://www.google.com/maps/place/Angoul%C3%AAme/" }
            ],
            socials: [
                { label: "GitHub", href: "https://github.com/YanelM" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/yanel-moisson-a50023347" }
            ]
        },
        right: {
            kicker: "Message",
            title: "Une page blanche pour me contacter",
            form: true
        }
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector(".header-nav");
    const openButton = document.getElementById("mobile-menu-button");
    const closeButton = document.getElementById("mobile-menu-button-fermer");

    document.body.classList.add("book-ready");
    document.querySelectorAll("body > section, #about-popup").forEach((element) => {
        element.setAttribute("aria-hidden", "true");
    });

    const app = document.createElement("main");
    app.className = "book-stage";
    app.innerHTML = `
        <section class="book-reader" aria-label="Portfolio sous forme de livre">
            <div class="book-intro">
                <p class="book-kicker">Portfolio interactif</p>
                <h1>Un livre ouvert sur mon parcours web.</h1>
                <p>Tournez les pages pour découvrir mon profil, mes compétences, mon parcours, mes projets et mes coordonnées.</p>
            </div>

            <div class="book-wrap is-closed" aria-live="polite">
                <div class="book-cover">
                    <div>
                        <p>Portfolio</p>
                        <h2>Yanel Moisson</h2>
                        <span>Développeur web</span>
                    </div>
                    <button class="book-open" type="button" data-book-action="open">Ouvrir le livre</button>
                </div>

                <div class="book-object">
                    <article class="book-page book-page-left"></article>
                    <article class="book-page book-page-right"></article>
                    <div class="book-spine" aria-hidden="true"></div>
                </div>
            </div>

            <div class="book-controls">
                <button type="button" data-book-action="prev">Page précédente</button>
                <p class="book-progress"></p>
                <button type="button" data-book-action="next">Page suivante</button>
                <button type="button" data-book-action="close">Fermer</button>
            </div>
        </section>
    `;

    header.insertAdjacentElement("afterend", app);

    const bookWrap = app.querySelector(".book-wrap");
    const bookObject = app.querySelector(".book-object");
    const leftPage = app.querySelector(".book-page-left");
    const rightPage = app.querySelector(".book-page-right");
    const progress = app.querySelector(".book-progress");
    const previousButton = app.querySelector('[data-book-action="prev"]');
    const nextButton = app.querySelector('[data-book-action="next"]');
    let currentSpread = 0;
    let isOpen = false;

    const renderPage = (page, pageNumber) => {
        const paragraphs = page.text ? page.text.map((text) => `<p>${text}</p>`).join("") : "";
        const image = page.image ? `
            <figure class="book-image">
                <img src="${page.image}" alt="${page.imageAlt}">
            </figure>
        ` : "";
        const stats = page.stats ? `
            <div class="book-stats">
                ${page.stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
            </div>
        ` : "";
        const tags = page.tags ? `
            <div class="book-tags">
                ${page.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
        ` : "";
        const code = page.code ? `
            <pre class="book-code"><code>${page.code.join("\n")}</code></pre>
        ` : "";
        const timeline = page.timeline ? `
            <div class="book-timeline">
                ${page.timeline.map((item) => `
                    <section>
                        <div>
                            <h3>${item.title}</h3>
                            <time>${item.date}</time>
                        </div>
                        <p>${item.place}</p>
                        ${item.items ? `<ul>${item.items.map((listItem) => `<li>${listItem}</li>`).join("")}</ul>` : ""}
                    </section>
                `).join("")}
            </div>
        ` : "";
        const link = page.link ? `
            <a class="book-link" href="${page.link.href}" target="_blank" rel="noreferrer">${page.link.label}</a>
        ` : "";
        const actions = page.actions ? `
            <div class="book-actions">
                ${page.actions.map((action) => {
                    if (action.href) {
                        const download = action.download ? " download" : "";
                        return `<a class="book-link" href="${action.href}"${download}>${action.label}</a>`;
                    }

                    return `<button type="button" class="book-link" data-book-target="${action.action}">${action.label}</button>`;
                }).join("")}
            </div>
        ` : "";
        const contacts = page.contacts ? `
            <ul class="book-contact-list">
                ${page.contacts.map((contact) => `<li><a href="${contact.href}" target="${contact.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${contact.label}</a></li>`).join("")}
            </ul>
        ` : "";
        const socials = page.socials ? `
            <div class="book-socials">
                ${page.socials.map((social) => `<a href="${social.href}" target="_blank" rel="noreferrer">${social.label}</a>`).join("")}
            </div>
        ` : "";
        const form = page.form ? `
            <form class="book-contact-form">
                <label for="book-nom">Nom</label>
                <input type="text" id="book-nom" name="nom" placeholder="Votre nom">

                <label for="book-email">E-mail</label>
                <input type="email" id="book-email" name="email" placeholder="Votre email">

                <label for="book-message">Message</label>
                <textarea id="book-message" name="message" placeholder="Votre message"></textarea>

                <button class="book-link" type="submit">Envoyer</button>
            </form>
        ` : "";

        return `
            <div class="book-page-top">
                <span>Page ${pageNumber}</span>
                <p>${page.kicker}</p>
            </div>
            ${image}
            <div class="book-page-content">
                <h2>${page.title}</h2>
                ${page.subtitle ? `<p class="book-subtitle">${page.subtitle}</p>` : ""}
                ${paragraphs}
                ${stats}
                ${tags}
                ${code}
                ${timeline}
                ${contacts}
                ${socials}
                ${actions}
                ${link}
                ${form}
            </div>
        `;
    };

    const setSpread = (index, direction = "forward") => {
        currentSpread = Math.max(0, Math.min(index, bookSpreads.length - 1));
        const spread = bookSpreads[currentSpread];

        bookObject.classList.remove("turn-forward", "turn-back");
        void bookObject.offsetWidth;
        bookObject.classList.add(direction === "back" ? "turn-back" : "turn-forward");

        leftPage.innerHTML = renderPage(spread.left, currentSpread * 2 + 1);
        rightPage.innerHTML = renderPage(spread.right, currentSpread * 2 + 2);
        progress.textContent = `${spread.label} · chapitre ${currentSpread + 1} / ${bookSpreads.length}`;
        previousButton.disabled = currentSpread === 0;
        nextButton.disabled = currentSpread === bookSpreads.length - 1;
    };

    const openBook = () => {
        isOpen = true;
        bookWrap.classList.remove("is-closed");
        bookWrap.classList.add("is-open");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const closeBook = () => {
        isOpen = false;
        bookWrap.classList.remove("is-open");
        bookWrap.classList.add("is-closed");
        setSpread(0, "back");
    };

    const goToSpread = (index) => {
        const direction = index < currentSpread ? "back" : "forward";
        openBook();
        setSpread(index, direction);
        app.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    app.addEventListener("click", (event) => {
        const actionButton = event.target.closest("[data-book-action]");
        const targetButton = event.target.closest("[data-book-target]");

        if (targetButton) {
            goToSpread(bookSpreads.findIndex((spread) => spread.id === targetButton.dataset.bookTarget));
            return;
        }

        if (!actionButton) {
            return;
        }

        const action = actionButton.dataset.bookAction;

        if (action === "open") {
            openBook();
        }

        if (action === "close") {
            closeBook();
        }

        if (action === "next") {
            if (!isOpen) {
                openBook();
            }
            setSpread(currentSpread + 1, "forward");
        }

        if (action === "prev") {
            setSpread(currentSpread - 1, "back");
        }
    });

    const openMenu = () => {
        header.classList.add("menu-open");
        openButton.style.visibility = "hidden";
        closeButton.style.visibility = "visible";
        openButton.setAttribute("aria-expanded", "true");
        nav.classList.remove("visi");
    };

    const closeMenu = () => {
        header.classList.remove("menu-open");
        openButton.style.visibility = "visible";
        closeButton.style.visibility = "hidden";
        openButton.setAttribute("aria-expanded", "false");
        nav.classList.add("visi");
    };

    if (header && openButton && closeButton && nav) {
        openButton.setAttribute("aria-expanded", "false");
        openButton.addEventListener("click", openMenu);
        closeButton.addEventListener("click", closeMenu);

        document.querySelectorAll(".header-nav a").forEach((link) => {
            link.addEventListener("click", (event) => {
                const target = link.getAttribute("href").replace("#", "");
                const spreadIndex = bookSpreads.findIndex((spread) => spread.id === target || (target === "projets" && spread.id === "projets"));

                if (spreadIndex >= 0) {
                    event.preventDefault();
                    goToSpread(spreadIndex);
                }

                if (window.innerWidth <= 720) {
                    closeMenu();
                }
            });
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            if (!isOpen) {
                openBook();
                return;
            }
            setSpread(currentSpread + 1, "forward");
        }

        if (event.key === "ArrowLeft") {
            setSpread(currentSpread - 1, "back");
        }

        if (event.key === "Escape") {
            closeBook();
        }
    });

    setSpread(0);
});
}

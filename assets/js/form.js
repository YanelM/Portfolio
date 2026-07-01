window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("submit", (event) => {
        const form = event.target.closest(".book-contact-form, .fresh-contact-form");

        if (!form) {
            return;
        }

        event.preventDefault();
        testChampsRenseignes(form);
    });

    function testChampsRenseignes(form) {
        const monNom = form.querySelector('[name="nom"]');
        const monEmail = form.querySelector('[name="email"]');
        const monMessage = form.querySelector('[name="message"]');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (monNom.value.trim() === "") {
            alert("Nom mal renseigné !");
            return false;
        }

        if (monEmail.value.trim() === "" || !regexEmail.test(monEmail.value.trim())) {
            alert("Email mal renseigné !");
            return false;
        }

        if (monMessage.value.trim() === "") {
            alert("Le message ne peut pas être vide !");
            return false;
        }

        if (!window.emailjs) {
            alert("Le service d'envoi est momentanément indisponible.");
            return false;
        }

        const contenuMail =
            "Nom : " + monNom.value + "\n" +
            "Email : " + monEmail.value + "\n\n" +
            "Message :\n" + monMessage.value;

        emailjs.send("service_6ovvctn", "template_oe0srcp", {
            contenu: contenuMail
        })
        .then(function () {
            alert("Message envoyé avec succès");
            form.reset();
        })
        .catch(function (error) {
            alert("Erreur lors de l'envoi : " + error.text);
        });

        return false;
    }
});

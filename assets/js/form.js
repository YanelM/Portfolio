window.addEventListener("DOMContentLoaded", () => {
// Formulaire de contact

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire
        testChampsRenseignes();
    });

    function testChampsRenseignes() {

        let monNom = document.querySelector('#nom');
        let monEmail = document.querySelector('#email');
        let monMessage = document.querySelector('#message');

        // ===== Vérification Nom =====
        if (monNom.value.trim() === "") {
            alert("Nom mal renseigné !");
            return false;
        }

        // ===== Vérification Email =====
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (monEmail.value.trim() === "") {
            alert("Email mal renseigné !");
            return false;
        }

        if (!regexEmail.test(monEmail.value.trim())) {
            alert("Format de l'email invalide !");
            return false;
        }

        // ===== Vérification Message (textarea) =====
        if (monMessage.value.trim() === "") {
            alert("Le message ne peut pas être vide !");
            return false;
        }

        // ===== Contenu du mail =====
        let contenuMail =
            "Nom : " + monNom.value + "\n" +
            "Email : " + monEmail.value + "\n\n" +
            "Message :\n" + monMessage.value;

        // ===== Envoi EmailJS =====
        emailjs.send("service_6ovvctn","template_oe0srcp", {
            contenu: contenuMail
        })
        .then(function () {
            alert("Message envoyé avec succès");
            document.querySelector('form').reset();
        })
        .catch(function (error) {
            alert("Erreur lors de l'envoi : " + error.text);
        });

        return false;
    }
});
document.querySelector('#send-btn').addEventListener('click', () => {
    const email = document.querySelector('#user-email').value;

    if (!email) {
        alert('Veuillez entrer votre adresse e-mail.');
        return;
    }

    // Utilisation de EmailJS pour envoyer l'e-mail
    emailjs.send("service_f8ncukq", "template_i1rza9v", {
            to_email: email,
            from_email: "ounissibadr1@gmail.com", // Ton email
            message: "Merci d'avoir montré de l'intérêt pour mon CV. Je vais vous l'envoyer au format PDF."
        })
        .then(() => {
            alert('Merci! Votre message a été envoyé.');
        })
        .catch((error) => {
            alert('Une erreur est survenue, veuillez réessayer.');
            console.error("Erreur d'envoi d'email :", error);
        });
});

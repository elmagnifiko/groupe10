const btnConnexion = document.querySelector(".btn button");
const identifiantInput = document.querySelector(".input input[type='text']");
const passwordInput = document.querySelector(".input2 input[type='password']");
const alerte = document.querySelector('.alerte');
const titre =  document.querySelector('.alerte h1');
const paragraphe =  document.querySelector('.alerte p');
let nombreTentatives = 0;
let countdown = 300;
 
let passe = localStorage.getItem('motDePasse');
let motDePasse = "password";
if (!passe) {
    localStorage.setItem('motDePasse',motDePasse ); 
}
console.log(passe)
 localStorage.setItem('nomUtilisateur', "admin");
 let nom = localStorage.getItem('nomUtilisateur')



btnConnexion.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (nom === identifiantInput.value && passe === passwordInput.value) {
        window.location.href = "dashboard.html";
    } else {
        nombreTentatives++;

        if (nombreTentatives >= 3) {
            alerte.style.display = 'block';
            titre.textContent = 'Compte bloqué';
            paragraphe.textContent = 'Oups ! Votre compte est temporairement bloqué';
            identifiantInput.disabled = true;
            passwordInput.disabled = true;
            btnConnexion.disabled = true;

            const reponseSecrete = prompt('La question secrète : Quel est le nom de ton projet ?');

            if (reponseSecrete === 'enval') {
                alerte.style.display = 'none';
                identifiantInput.disabled = false;
                passwordInput.disabled = false;
                btnConnexion.disabled = false;
                window.location.href = "dashboard.html";
            } else {
                alerte.style.display = 'block';
                const timerInterval = setInterval(function () {
                    const minutes = Math.floor(countdown / 60);
                    const seconds = countdown % 60;
                    titre.textContent = 'Temps avant déblocage';
                    paragraphe.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                    countdown--;

                    if (countdown < 0) {
                        clearInterval(timerInterval);
                        titre.textContent = 'Compte débloqué';
                        paragraphe.textContent = '';
                        alerte.style.display = 'none';
                        identifiantInput.disabled = false;
                        passwordInput.disabled = false;
                        btnConnexion.disabled = false;
                        nombreTentatives = 0; 
                    };
                }, 1000);
            };
        } else {
            alerte.style.display = 'block';
            setTimeout(function () {
                alerte.style.display = 'none';
            }, 3000);
        }
    }
});

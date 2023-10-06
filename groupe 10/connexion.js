const btnConnexion = document.querySelector(".btn button");
const identifiantInput = document.querySelector(".input input[type='text']");
const passwordInput = document.querySelector(".input2 input[type='password']");
const alerte = document.querySelector('.alerte');
const titre =  document.querySelector('.alerte h1');
const paragraphe =  document.querySelector('.alerte p');
let nombreTentatives = 0;
let countdown = 300;
let compte = [
    {
        nom: "admin",
        passe: "password"
    }
]
btnConnexion.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (identifiantInput.value == compte.nom && passwordInput.value == compte.passe) {
        window.location.href = "dashboard.html";
    } else {
        nombreTentatives++;

        if (nombreTentatives >= 2) {
            alerte.style.display = 'block';
            titre.textContent = 'Compte bloqué';
            paragraphe.textContent = 'Oups !!! Votre compte est temporairement bloqué';

           
           
                const reponseSecrete = prompt('La question secrète : Quel est le nom de ton projet ?');

                if (reponseSecrete === 'enval') {
                window.location.href = "dashboard.html";
            } else if(reponseSecrete !== 'enval') {
                titre.textContent = 'Compte bloqué';
                paragraphe.textContent = 'Votre compte est définitivement bloqué';
                
                    const timerInterval = setInterval(function () {
                        const minutes = Math.floor(countdown / 60);
                        titre.textContent = 'Timer deblockage';
                        const seconds = countdown % 60;
                        paragraphe.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                        countdown--;

                        identifiantInput.disabled = true;
                        passwordInput.disabled = true;
    
                        if (countdown < 0) {
                            clearInterval(timerInterval);
                            titre.textContent = 'Compte débloqué';
                            paragraphe.textContent = '';
                        }
                    }, 1000);
            
            }
        } else {
            alerte.style.display = 'block';
            setTimeout(function () {
                alerte.style.display = 'none';
            }, 3000);
        }
    }
});




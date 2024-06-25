let btnmodifierPasse = document.querySelector('.btnmodifier');
let btnsupprimerPasse = document.querySelector('.btnsupprimer');
let Nom = document.getElementById('input-sujet');
let Email = document.querySelector('#input-message');
let Envoyer = document.querySelector('.input-button');
let btnSupprimerProfil = document.getElementById('btnSupprimerPhoto');
let btnmodifierProfil = document.getElementById('btnModifierPhoto');
let avatar = document.querySelector('.Avatar');
let avatarIcon = document.querySelector('.icon-avatar')
let Retour = document.querySelector('.Retour');
let accepter = document.querySelector('.accepter');
let ancienPasse = document.querySelector('.ancienPasse');
let nouveauPasse = document.querySelector('.nouveauPasse');
let confirmation = document.querySelector('.confirmation');
let changement = document.querySelector('.changement');
let alerte = document.querySelector('.alerte');
let titre =  document.querySelector('.alerte h1');
let paragraphe =  document.querySelector('.alerte p');
let myTextArea = document.getElementById('myTextArea');
const inputFile = document.querySelector('.inputFile');
let container = document.querySelector('.container');


avatar.style.borderRadius = '250px';
avatarIcon.style.borderRadius = '250px'

const storedImageUrl =JSON.parse(localStorage.getItem('profilImage')) ;
if (storedImageUrl) {
    avatar.src = storedImageUrl;
    avatarIcon.src = storedImageUrl;
}

btnmodifierProfil.addEventListener('click', function() {
    inputFile.click();
});
inputFile.addEventListener('change',()=>{
    const file = inputFile.files[0];
    avatar.src = URL.createObjectURL(file);
    avatarIcon.src = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        localStorage.setItem('profilImage',JSON.stringify(reader.result))
    })
    reader.readAsDataURL(file)
})


btnSupprimerProfil.addEventListener('click', function() {
    avatar.src = 'images/avatar.jpg';
    avatarIcon.src = 'images/avatar.jpg';
    localStorage.removeItem('profilImage'); 
});

let isChangementVisible = false;

btnmodifierPasse.addEventListener('click', function () {
    isChangementVisible = !isChangementVisible;
    changement.style.display = isChangementVisible ? 'block' : 'none';
});




accepter.addEventListener('click', function () {
    const ancienPasseStocke = localStorage.getItem('motDePasse');
    const ancienPasseSaisi = ancienPasse.value;

    if (ancienPasseSaisi === ancienPasseStocke) {
        const nouveauPasseSaisi = nouveauPasse.value;
        const confirmationSaisie = confirmation.value;

        if (nouveauPasseSaisi === confirmationSaisie) {
            localStorage.removeItem('motDePasse');
            localStorage.setItem('motDePasse', nouveauPasseSaisi);
            alerte.style.display = 'block';
            titre.textContent = 'Mot de passe modifié';
            paragraphe.textContent = 'Votre mot de passe a été modifié avec succès.';
            changement.style.display = 'none'
            setTimeout(function() {
                alerte.style.display = 'none';
            }, 3000);
        } else {
            alerte.style.display = 'block';
            titre.textContent = 'Erreur';
            paragraphe.textContent = 'La confirmation du mot de passe ne correspond pas.';

            setTimeout(function() {
                alerte.style.display = 'none';
            }, 3000);
        }
    } else {
        alerte.style.display = 'block';
        titre.textContent = 'Erreur';
        paragraphe.textContent = 'L\'ancien mot de passe est incorrect.';

        setTimeout(function() {
            alerte.style.display = 'none';
        }, 3000);
    }
});


Envoyer.addEventListener('click', function() {

    if(Nom.value === "" && Email.value === "" ){
       alert('remplir')
    }else{
        const nouveauNom = Nom.value;
        const nouvelEmail = Email.value;
        const nouvelleBiographie = myTextArea.value;
        Nom.value = "";
        Email.value = "";
        myTextArea.value = "";
        alerte.style.display = 'block';
        titre.textContent = 'Profil modifié';
        paragraphe.textContent = 'Votre profil a été modifié avec succès.';
        setTimeout(function() {
            alerte.style.display = 'none';
        }, 3000);
    }


});

btnsupprimerPasse.addEventListener('click', function () {
    window.location.href = "index.html";
    alerte.style.display = 'block';
    titre.textContent = 'Compte supprimer';
    paragraphe.textContent = 'Votre compte est temporairement supprimer';
    localStorage.removeItem('motDePasse');
    localStorage.setItem('motDePasse', 'rien');
    setTimeout(function() {
        window.location.href = "index.html";
    }, 5000)
})

// window.onload = function() {
//     const nomUtilisateur = localStorage.getItem('nomUtilisateur') || '';
//     const emailUtilisateur = localStorage.getItem('emailUtilisateur') || '';
//     const biographieUtilisateur = localStorage.getItem('biographieUtilisateur') || '';

//     Nom.value = nomUtilisateur;
//     Email.value = emailUtilisateur;
//     myTextArea.value = biographieUtilisateur;
// };

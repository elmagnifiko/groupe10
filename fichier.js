// Récupérer la valeur du lot à partir du localStorage
const lotContent = JSON.parse(localStorage.getItem('lotContent'));

// Vérifier si la valeur existe avant de l'afficher
if (lotContent) {
    // Afficher la valeur dans l'élément avec la classe 'Rapport'
    let pageTitleDeuxiemePage = document.querySelector('.Rapport');
    let moteur = document.querySelector('.logo-subtitle');
    moteur.textContent = `Rapport d’analyse (${lotContent})`
    pageTitleDeuxiemePage.textContent = `Rapport : ${lotContent}`;
} else {
    console.log("Aucune valeur de lot trouvée dans le stockage local.");
}

let image = document.querySelector('.icon-avatar')
const profilImage = JSON.parse(localStorage.getItem('profilImage')) ;

if (profilImage) {
    image.style.borderRadius = "250px"
    image.src =  profilImage;
}

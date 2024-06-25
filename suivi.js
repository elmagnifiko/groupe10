let Suivi = [
    {
        lot:"TE202303001",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"E202302023",
        etat:"Non Reçu",
        date:"12/03/2023",
        rapport:"Non disponnible"
    },
    {
        lot:"TE20230190",
        etat:"Reçu",
        date:"14/03/2023",
        rapport:"Non disponnible"
    },
    {
        lot:"Carbonate",
        etat:"Reçu",
        date:"14/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Chlourire",
        etat:"Non Reçu",
        date:"15/03/2023",
        rapport:"Non disponnible"
    },
    {
        lot:"CO2 libre",
        etat:"Reçu",
        date:"15/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Conductivité electrique",
        etat:"Non Reçu",
        date:"15/03/2023",
        rapport:"Non disponnible"
    },
    {
        lot:"pH/Temperature",
        etat:"Reçu",
        date:"16/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Couleur Brute",
        etat:"Reçu",
        date:"17/03/2023",
        rapport:"Non disponnible"
    },
    {
        lot:"Cyanure libre",
        etat:"Reçu",
        date:"20/03/2023",
        rapport:"Disponnible"
    }
];

const thody = document.getElementById("tbody");

function ajout (params) {
    thody.innerHTML = ''
    params.forEach(elem => {
        thody.innerHTML += `<tr class="active-ligne">
        <td class="delete-border-left">${elem.lot}</td>
        <td>${elem.etat}</td>
        <td>${elem.date}</td>
        <td>${elem.rapport}</td>
        <td>
        
                <button class="btn-table">Voir</button>
            
        </td>
    </tr>`
    });
}


ajout(Suivi)

function commande() {
    let AZ = document.querySelectorAll('th i');
    for (let i = 0; i < AZ.length; i++) {
        if (AZ[i].classList.contains('fa-arrow-down-a-z')) {
            AZ[i].classList.remove('fa-arrow-down-a-z');
            AZ[i].classList.add('fa-arrow-down-z-a');
        } else {
            AZ[i].classList.remove('fa-arrow-down-z-a');
            AZ[i].classList.add('fa-arrow-down-a-z');
        }
    }
}

let fct = document.querySelectorAll('thead th');

fct.forEach((th, index) => {
    th.addEventListener('click', function() {
        commande()
 console.log("object")
        // Parcours des colonnes à partir de la deuxième (index 1)
        for (let i = 0; i < fct.length ; i++) {
            let icones = document.querySelectorAll(`thead tr th:nth-child(${i + 1}) i`);

            if ( index === i) {
                // Si c'est la première colonne ou la colonne cliquée, afficher l'icône
                icones.forEach((icone) => {
                    icone.classList.remove('hidden');
                });
            } else {
                // Sinon, masquer les icônes des autres colonnes
                icones.forEach((icone) => {
                    icone.classList.add('hidden');
                });
            }
        }
    });
});





let tableau = [];
const check = document.querySelector('#check1');


check.addEventListener('keyup',  () => {
    let recher = check.value.toLowerCase() ;
    console.log(recher)
     tableau = Suivi.filter(function (para) {
     if(para.lot.toLowerCase().includes(recher) || para.etat.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) || para.rapport.toLowerCase().includes(recher) ){
   let objt = {
       lot: para.lot,
        etat: para.etat,
        date: para.date,
        rapport: para.rapport
   }
   return objt
     }

       
    })
    ajout(tableau)
})

let image = document.querySelector('.icon-avatar')
const profilImage = JSON.parse(localStorage.getItem('profilImage')) ;

if (profilImage) {
    image.style.borderRadius = "250px"
    image.src =  profilImage;
}

const compare = function(ids, asc){
    return function(row1, row2){
      const tdValue = function(row, ids){
        return row.children[ids].textContent;
      }
      const tri = function(v1, v2){
        if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)){
          return v1 - v2;
        }
        else {
          return v1.toString().localeCompare(v2);
        }
      };
      return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
  }
  
  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
  thx.forEach(function(th){
    th.addEventListener('click', function(){
      let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
      classe.forEach(function(tr){
         tbody.appendChild(tr)
      });
    })
  });

  

  let btnTable = document.querySelectorAll('.btn-table');

  // Ajoutez ceci à l'intérieur de la fonction qui gère le clic du bouton "Voir"
btnTable.forEach(button => {
    button.addEventListener('click', () => {
        const parentRow = button.closest('tr');

        if (parentRow) {
            const lotContent = parentRow.cells[0].textContent;

            // Stocker le contenu du lot dans le localStorage
            localStorage.setItem('lotContent', JSON.stringify(lotContent));

            // Vérifier si le rapport est disponible
            const rapportCell = parentRow.cells[3].textContent;
            if (rapportCell === 'Disponnible') {
                // Rediriger vers la page suividetail.html
                window.location.href = 'suividetail.html';
            } else {
                // Le rapport n'est pas disponible, afficher un message ou prendre d'autres mesures
                alert("Le rapport n'est pas disponible.");
            }
        }
    });
});

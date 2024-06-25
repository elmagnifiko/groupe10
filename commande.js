let Commande = [
    {
        Commande: "00001",
        laboratoire: "Enval",
        date: "10/03/2023",
        status: "En cours"
    },
    {
        Commande: "00002",
        laboratoire: "Codeloccol",
        date: "10/03/2023",
        status: "En cours"
    },
    {
        Commande: "00003",
        laboratoire: "ANSI",
        date: "12/03/2023",
        status: "Terminé"
    },
    {
        Commande: "00004",
        laboratoire: "CIPMEN",
        date: "12/03/2023",
        status: "En cours"
    },
    {
        Commande: "00005",
        laboratoire: "ADU",
        date: "13/03/2023",
        status: "Terminé"
    },
    {
        Commande: "00006",
        laboratoire: "Codeloccol",
        date: "14/03/2023",
        status: "En cours"
    },
    {
        Commande: "00007",
        laboratoire: "Enval",
        date: "14/03/2023",
        status: "En cours"
    },
    {
        Commande: "00009",
        laboratoire: "ANSI",
        date: "16/03/2023",
        status: "En cours"
    },
    {
        Commande: "00010",
        laboratoire: "ADU",
        date: "18/03/2023",
        status: "Terminé"
    }
];

const thody = document.getElementById("tbody");
function ajout(params) {
    thody.innerHTML = ''
    params.forEach(elem => {
        thody.innerHTML += `<tr>
        <td class="delete-bd-left">${elem.Commande}</td>
        <td>${elem.laboratoire}</td>
        <td>${elem.date}</td>
        <td class="td-color">${elem.status}</td>
        <td><button>Voir</button></td>
    </tr>`
    });
}

 ajout(Commande)

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
     tableau = Commande.filter(function (para) {
     if(para.Commande.toLowerCase().includes(recher) || para.laboratoire.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) || para.status.toLowerCase().includes(recher) ){
   let objt = {
       Commande: para.Commande,
        laboratoire: para.laboratoire,
        date: para.date,
        status: para.status
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
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
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

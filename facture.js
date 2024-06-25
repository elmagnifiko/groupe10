let Facture = [
    {
        facture: "0001",
        laboratoire: "Enval",
        date: "10/03/2023",
    },
    {
        facture: "0002",
        laboratoire: "Biochimie",
        date: "10/03/2023",
    },
    {
        facture: "0003",
        laboratoire: "Biologie",
        date: "11/03/2023",
    },
    {
        facture: "0004",
        laboratoire: "Biologie",
        date: "12/03/2023",
    },
    {
        facture: "0005",
        laboratoire: "Enval",
        date: "12/03/2023",
    },
    {
        facture: "0006",
        laboratoire: "Biochimie",
        date: "12/03/2023",
    },
    {
        facture: "0007",
        laboratoire: "Enval",
        date: "13/03/2023",
    },
    {
        facture: "0008",
        laboratoire: "Géologie",
        date: "13/03/2023",
    },
    {
        facture: "0009",
        laboratoire: "Enval",
        date: "13/03/2023",
    }
];
const thody = document.getElementById("tbody");
function ajout (table){
    thody.innerHTML = ''
table.forEach(elem => {
    thody.innerHTML += `<tr>
    <td class="delete-bd-left">${elem.facture}</td>
    <td>${elem.laboratoire}</td>
    <td>${elem.date}</td>
    <td><button>Voir</button></td>
</tr>`
});
}
 ajout(Facture)

 function facture() {
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
        facture()
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
     tableau = Facture.filter(function (para) {
     if(para.facture.toLowerCase().includes(recher) || para.laboratoire.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) ){
   let objt = {
    facture: para.facture,
    laboratoire: para.laboratoire,
    date: para.date
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
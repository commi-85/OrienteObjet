
//1.	Créez une classe d'objet pour le produit afin de stocker les propriétés pour l'id, le nom et le prix du produit.
//2.	Créez une classe d'objet pour l'élément du panier d'achat afin de stocker les propriétés pour le produit et sa quantité.


class Produit {
    //méthode constructeur pour initialiser les proprietés de l'objet
    constructor(id, nom, prix, quantite) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }
    // methode pour le calcul des totaux
    total() {
        return (this.prix * this.quantite);
    }

    ajoutQuantite() {
        this.quantite += 1;
    }
    diminuQuantite() {
        if (this.quantite === 0) {
            return
        }
        this.quantite -= 1;
    }

    /*  changeImage(){
  this.image = document.getElementById()
      }
  */
}
let produit1 = new Produit(1, "baskets", 100, 0);

let produit2 = new Produit(2, "socks", 20, 0);

let produit3 = new Produit(3, "bag", 50, 0);

// construction de l'objet panier

class Panier {
    constructor() {
        this.items = [];
    }
    // total des elements dans le panier
    PrixTotal() {
        let sum = 0;
        for (let item of this.items) {
            sum += item.total();
        }
        return sum;
    }
    // ajouter un produit
    ajout(produit) {
        this.items.push(produit);
    }
    //supprimer un element
    suppression(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    // affichagr des elements
    afficher() {
        this.items.forEach(item => console.log("id:" + item.id + " " + "nom:" + item.nom + " " + "prix:" + item.prix + " " + "quantite:" + item.quantite))
    }
}
let panier = new Panier();


// Mettre à jour l'interface utilisateur pour afficher les quantités et le prix total
function updateDOM() {
    /* panier.items.forEach(produit => {
         let card = document.querySelector(`.card-body[data-id='${produit.id}']`);
         card.querySelector('.quantity').textContent = produit.quantite;
     });
     TotalPrice();*/
    document.getElementById("Ptotal").innerText = panier.PrixTotal().toString() + "$";
}


/*function TotalPrice() {
    let total = panier.PrixTotal();
    document.querySelector('.total').textContent = 'Total: ' + total + ' $';
}*/
//********************************* debut des ajouts *****************************
document.getElementById("plus1").addEventListener('click', function () {
    // console.log("bonjour")
    produit1.ajoutQuantite();
    document.getElementById("basket").innerText = produit1.quantite.toString();
    updateDOM()
})
document.getElementById("plus2").addEventListener('click', function () {

    produit2.ajoutQuantite();
    document.getElementById("socks").innerText = produit2.quantite.toString();
    updateDOM()
})
document.getElementById("plus3").addEventListener('click', function () {

    produit3.ajoutQuantite();
    document.getElementById("Bag").innerText = produit3.quantite.toString();
    updateDOM()
})
//**************************fin des ajouts********************************

// ************* debut des dimunitions ************************************
document.getElementById("moins1").addEventListener('click', function () {

    produit1.diminuQuantite();
    document.getElementById("basket").innerText = produit1.quantite.toString();
    updateDOM()
})
document.getElementById("moins2").addEventListener('click', function () {

    produit2.diminuQuantite();
    document.getElementById("socks").innerText = produit2.quantite.toString();
    updateDOM()
})
document.getElementById("moins3").addEventListener('click', function () {

    produit3.diminuQuantite();
    document.getElementById("Bag").innerText = produit3.quantite.toString();
    updateDOM()
})
// ************* fin des dimunitions ************************************

// ************* debut des suppression de produit ************************************
document.getElementById("sup1").addEventListener('click', function () {
    document.getElementById("image1").setAttribute("src", "image/delete.png");
produit1.quantite = 0;
//updateDOM()
})

document.getElementById("sup2").addEventListener('click', function () {
    document.getElementById("image2").setAttribute("src", "image/delete.png");
    produit2.quantite = 0;
//updateDOM()
})

document.getElementById("sup3").addEventListener('click', function () {
    document.getElementById("image3").setAttribute("src", "image/delete.png");
    produit3.quantite = 0;
   // updateDOM()
})


/*
document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', function() {
        let card = this.closest('.card');
        let id = parseInt(card.getAttribute('data-id'));
        let produit = panier.items.find(p => p.id === id);

        produit.quantite += 1;
        card.querySelector('.quantity')
        
        .textContent = produit.quantite;
        TotalPrice();
    });
});

document
.querySelectorAll('.fa-minus-circle')
.forEach(button => {
    button.addEventListener('click', function() {
        let card = this.closest('.card');
        let id = parseInt(card.getAttribute('data-id'));
        let produit = panier.items.find(p => p.id === id);

        if (produit.quantite > 0) {
            produit.quantite -= 1;
            card.querySelector('.quantity').textContent = produit.quantite;
        }
       TotalPrice();
    });
});
updateDOM();*/

console.log(panier.items);


panier.items.push(produit1);
panier.items.push(produit2);
panier.items.push(produit3);

console.log(panier)
//updateDOM();
//panier.suppression(2)
/*console.log(panier.PrixTotal());
console.log(panier.items);

console.log(panier.afficher());*/

/*panier.ajout(new Produit(4, "chemise", 100, 4))
//console.log(panier)
//console.log(panier)
panier.afficher()
*/
produit1.ajoutQuantite();
console.log(produit1)
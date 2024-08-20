

// Hijab
const prixUnitaire = document.getElementById('prix-unitaire');
console.log(prixUnitaire)
const quantityInput = document.getElementById('quantity');
const jaime = document.getElementById('aime');
const panier = document.getElementById('ajout-panier');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton = document.getElementById('aime');
    const quantityInput = document.getElementById('quantity');
    const ajoutPanierButton = document.getElementById('ajout-panier');
    const prixUnitaire = document.getElementById('prix-unitaire')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton.addEventListener('click',function() {
        alert('vous avez ajouter le hijab à enfiler sans épingles 2 voiles dans vos favoris')
        aimeButton.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton.addEventListener('click',function() {
        const quantity = parseInt(quantityInput.value);
        const prixUnitaire = parseFloat(document.getElementById('prix-unitaire').innerText.replace('€', '').replace(',', '.'));

        if (quantity > 0) {
            alert(`Vous avez ajouté ${quantity} hijab(s) à enfiler sans épingles 2 voiles au panier. Total: ${(quantity * prixUnitaire).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire2 = document.getElementById('prix-unitaire2');
console.log(prixUnitaire)
const quantityInput2 = document.getElementById('quantity2');
const jaime2 = document.getElementById('aime2');
const panier2 = document.getElementById('ajout-panier2');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton2 = document.getElementById('aime2');
    const quantityInput2 = document.getElementById('quantity2');
    const ajoutPanierButton2 = document.getElementById('ajout-panier2');
    const prixUnitaire2 = document.getElementById('prix-unitaire2')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton2.addEventListener('click',function() {
        alert('vous avez ajouter le Hijab crêpe plissé dans vos favoris')
        aimeButton2.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton2.addEventListener('click',function() {
        const quantity2 = parseInt(quantityInput2.value);
        const prixUnitaire2 = parseFloat(document.getElementById('prix-unitaire2').innerText.replace('€', '').replace(',', '.'));

        if (quantity2 > 0) {
            alert(`Vous avez ajouté ${quantity2} hijab(s) crêpe plissé au panier. Total: ${(quantity2 * prixUnitaire2).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire3 = document.getElementById('prix-unitaire3');
console.log(prixUnitaire3)
const quantityInput3 = document.getElementById('quantity3');
const jaime3 = document.getElementById('aime3');
const panier3 = document.getElementById('ajout-panier3');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton3 = document.getElementById('aime3');
    const quantityInput3 = document.getElementById('quantity3');
    const ajoutPanierButton3 = document.getElementById('ajout-panier3');
    const prixUnitaire3 = document.getElementById('prix-unitaire3')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton3.addEventListener('click',function() {
        alert('vous avez ajouter le Khimar à enfiler - Cape Jilbab dans vos favoris')
        aimeButton3.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton3.addEventListener('click',function() {
        const quantity3 = parseInt(quantityInput3.value);
        const prixUnitaire3 = parseFloat(document.getElementById('prix-unitaire3').innerText.replace('€', '').replace(',', '.'));

        if (quantity3 > 0) {
            alert(`Vous avez ajouté ${quantity3} Khimar(s) à enfiler - Cape Jilbab. Total: ${(quantity3 * prixUnitaire3).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire4 = document.getElementById('prix-unitaire4');
console.log(prixUnitaire4)
const quantityInput4 = document.getElementById('quantity4');
const jaime4 = document.getElementById('aime4');
const panier4 = document.getElementById('ajout-panier4');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton4 = document.getElementById('aime4');
    const quantityInput4 = document.getElementById('quantity4');
    const ajoutPanierButton4 = document.getElementById('ajout-panier4');
    const prixUnitaire4 = document.getElementById('prix-unitaire4')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton4.addEventListener('click',function() {
        alert('vous avez ajouter le Hijab à enfiler en jersey Premium Lycra 2 mètre dans vos favoris')
        aimeButton4.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton4.addEventListener('click',function() {
        const quantity4 = parseInt(quantityInput4.value);
        const prixUnitaire4 = parseFloat(document.getElementById('prix-unitaire4').innerText.replace('€', '').replace(',', '.'));

        if (quantity4 > 0) {
            alert(`Vous avez ajouté ${quantity4} hijab(s) à enfiler en jersey Premium Lycra 2 mètre au panier. Total: ${(quantity4 * prixUnitaire4).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire5 = document.getElementById('prix-unitaire5');
console.log(prixUnitaire5)
const quantityInput5 = document.getElementById('quantity5');
const jaime5 = document.getElementById('aime5');
const panier5 = document.getElementById('ajout-panier5');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton5 = document.getElementById('aime5');
    const quantityInput5 = document.getElementById('quantity5');
    const ajoutPanierButton5 = document.getElementById('ajout-panier5');
    const prixUnitaire5 = document.getElementById('prix-unitaire5')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton5.addEventListener('click',function() {
        alert('vous avez ajouter le Hijab jersey coton qualité supèrieure dans vos favoris')
        aimeButton5.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton5.addEventListener('click',function() {
        const quantity5 = parseInt(quantityInput5.value);
        const prixUnitaire5 = parseFloat(document.getElementById('prix-unitaire5').innerText.replace('€', '').replace(',', '.'));

        if (quantity5 > 0) {
            alert(`Vous avez ajouté ${quantity5} hijab(s) jersey coton qualité supèrieure au panier. Total: ${(quantity5 * prixUnitaire5).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire6 = document.getElementById('prix-unitaire6');
console.log(prixUnitaire5)
const quantityInput6 = document.getElementById('quantity6');
const jaime6 = document.getElementById('aime6');
const panier6 = document.getElementById('ajout-panier6');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton6 = document.getElementById('aime6');
    const quantityInput6 = document.getElementById('quantity6');
    const ajoutPanierButton6 = document.getElementById('ajout-panier6');
    const prixUnitaire6 = document.getElementById('prix-unitaire6')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton6.addEventListener('click',function() {
        alert('vous avez ajouter le Hijab crêpe plissé satiné dans vos favoris')
        aimeButton6.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton6.addEventListener('click',function() {
        const quantity6 = parseInt(quantityInput6.value);
        const prixUnitaire6 = parseFloat(document.getElementById('prix-unitaire6').innerText.replace('€', '').replace(',', '.'));

        if (quantity6 > 0) {
            alert(`Vous avez ajouté ${quantity6} hijab(s) crêpe plissé satiné au panier. Total: ${(quantity6 * prixUnitaire6).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// Sous hijab

const prixUnitaire7 = document.getElementById('prix-unitaire7');
console.log(prixUnitaire7)
const quantityInput7 = document.getElementById('quantity7');
const jaime7 = document.getElementById('aime7');
const panier7 = document.getElementById('ajout-panier7');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton7 = document.getElementById('aime7');
    const quantityInput7 = document.getElementById('quantity7');
    const ajoutPanierButton7 = document.getElementById('ajout-panier7');
    const prixUnitaire7 = document.getElementById('prix-unitaire7')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton7.addEventListener('click',function() {
        alert('vous avez ajouter le Sous hijab fermé à nouer  dans vos favoris')
        aimeButton7.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton7.addEventListener('click',function() {
        const quantity7 = parseInt(quantityInput7.value);
        const prixUnitaire7 = parseFloat(document.getElementById('prix-unitaire7').innerText.replace('€', '').replace(',', '.'));

        if (quantity7 > 0) {
            alert(`Vous avez ajouté ${quantity7} Sous hijab(s) fermé à nouer  au panier. Total: ${(quantity7 * prixUnitaire7).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire8 = document.getElementById('prix-unitaire8');
console.log(prixUnitaire8)
const quantityInput8 = document.getElementById('quantity8');
const jaime8 = document.getElementById('aime8');
const panier8 = document.getElementById('ajout-panier8');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton8 = document.getElementById('aime8');
    const quantityInput8 = document.getElementById('quantity8');
    const ajoutPanierButton8 = document.getElementById('ajout-panier8');
    const prixUnitaire8 = document.getElementById('prix-unitaire8')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton8.addEventListener('click',function() {
        alert('vous avez ajouter le Cagoule en Maille dans vos favoris')
        aimeButton8.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton8.addEventListener('click',function() {
        const quantity8 = parseInt(quantityInput8.value);
        const prixUnitaire8 = parseFloat(document.getElementById('prix-unitaire8').innerText.replace('€', '').replace(',', '.'));

        if (quantity8 > 0) {
            alert(`Vous avez ajouté ${quantity8} le Cagoule en Maille au panier. Total: ${(quantity8 * prixUnitaire8).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire9 = document.getElementById('prix-unitaire9');
console.log(prixUnitaire9)
const quantityInput9 = document.getElementById('quantity9');
const jaime9 = document.getElementById('aime9');
const panier9 = document.getElementById('ajout-panier9');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton9 = document.getElementById('aime9');
    const quantityInput9 = document.getElementById('quantity9');
    const ajoutPanierButton9 = document.getElementById('ajout-panier9');
    const prixUnitaire9 = document.getElementById('prix-unitaire9')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton9.addEventListener('click',function() {
        alert('vous avez ajouter le Bonnet à nouer dans vos favoris')
        aimeButton9.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton9.addEventListener('click',function() {
        const quantity9 = parseInt(quantityInput9.value);
        const prixUnitaire9 = parseFloat(document.getElementById('prix-unitaire9').innerText.replace('€', '').replace(',', '.'));

        if (quantity9 > 0) {
            alert(`Vous avez ajouté ${quantity9} Bonnet à nouer au panier. Total: ${(quantity9 * prixUnitaire9).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire10 = document.getElementById('prix-unitaire10');
console.log(prixUnitaire10)
const quantityInput10 = document.getElementById('quantity10');
const jaime10 = document.getElementById('aime10');
const panier10 = document.getElementById('ajout-panier10');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton10 = document.getElementById('aime10');
    const quantityInput10 = document.getElementById('quantity10');
    const ajoutPanierButton10 = document.getElementById('ajout-panier10');
    const prixUnitaire10 = document.getElementById('prix-unitaire10')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton10.addEventListener('click',function() {
        alert('vous avez ajouter le Sous hijab 2 en 1 dans vos favoris')
        aimeButton10.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton10.addEventListener('click',function() {
        const quantity10 = parseInt(quantityInput10.value);
        const prixUnitaire10 = parseFloat(document.getElementById('prix-unitaire10').innerText.replace('€', '').replace(',', '.'));

        if (quantity10 > 0) {
            alert(`Vous avez ajouté ${quantity10} Sous hijab 2 en 1 au panier. Total: ${(quantity10 * prixUnitaire10).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire11 = document.getElementById('prix-unitaire11');
console.log(prixUnitaire11)
const quantityInput11 = document.getElementById('quantity11');
const jaime11 = document.getElementById('aime11');
const panier11 = document.getElementById('ajout-panier11');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton11 = document.getElementById('aime11');
    const quantityInput11 = document.getElementById('quantity11');
    const ajoutPanierButton11 = document.getElementById('ajout-panier11');
    const prixUnitaire11 = document.getElementById('prix-unitaire11')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton11.addEventListener('click',function() {
        alert('vous avez ajouter le Sous hijab côtelé 2 en 1  dans vos favoris')
        aimeButton11.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton11.addEventListener('click',function() {
        const quantity11 = parseInt(quantityInput11.value);
        const prixUnitaire11 = parseFloat(document.getElementById('prix-unitaire11').innerText.replace('€', '').replace(',', '.'));

        if (quantity11 > 0) {
            alert(`Vous avez ajouté ${quantity11} Sous hijab côtelé 2 en 1  au panier. Total: ${(quantity11 * prixUnitaire11).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire12 = document.getElementById('prix-unitaire12');
console.log(prixUnitaire12)
const quantityInput12 = document.getElementById('quantity12');
const jaime12 = document.getElementById('aime12');
const panier12 = document.getElementById('ajout-panier12');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton12 = document.getElementById('aime12');
    const quantityInput12 = document.getElementById('quantity12');
    const ajoutPanierButton12 = document.getElementById('ajout-panier12');
    const prixUnitaire12 = document.getElementById('prix-unitaire12')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton12.addEventListener('click',function() {
        alert('vous avez ajouter le Sous hijab cagoule  dans vos favoris')
        aimeButton12.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton12.addEventListener('click',function() {
        const quantity12 = parseInt(quantityInput12.value);
        const prixUnitaire12 = parseFloat(document.getElementById('prix-unitaire12').innerText.replace('€', '').replace(',', '.'));

        if (quantity12 > 0) {
            alert(`Vous avez ajouté ${quantity12} Sous hijab cagoule au panier. Total: ${(quantity12 * prixUnitaire12).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// Turban hijab

const prixUnitaire13 = document.getElementById('prix-unitaire13');
console.log(prixUnitaire13)
const quantityInput13 = document.getElementById('quantity13');
const jaime13 = document.getElementById('aime13');
const panier13 = document.getElementById('ajout-panier13');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton13 = document.getElementById('aime13');
    const quantityInput13 = document.getElementById('quantity13');
    const ajoutPanierButton13 = document.getElementById('ajout-panier13');
    const prixUnitaire13 = document.getElementById('prix-unitaire13')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton13.addEventListener('click',function() {
        alert('vous avez ajouter le Turban à enfiler côtelé en jersey premium dans vos favoris')
        aimeButton13.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton13.addEventListener('click',function() {
        const quantity13 = parseInt(quantityInput13.value);
        const prixUnitaire13 = parseFloat(document.getElementById('prix-unitaire13').innerText.replace('€', '').replace(',', '.'));

        if (quantity13 > 0) {
            alert(`Vous avez ajouté ${quantity13} Turban à enfiler côtelé en jersey premium au panier. Total: ${(quantity13 * prixUnitaire13).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire14 = document.getElementById('prix-unitaire14');
console.log(prixUnitaire14)
const quantityInput14 = document.getElementById('quantity14');
const jaime14 = document.getElementById('aime14');
const panier14 = document.getElementById('ajout-panier14');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton14 = document.getElementById('aime14');
    const quantityInput14 = document.getElementById('quantity14');
    const ajoutPanierButton14 = document.getElementById('ajout-panier14');
    const prixUnitaire14 = document.getElementById('prix-unitaire14')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton14.addEventListener('click',function() {
        alert('vous avez ajouter le Turban à enfiler en Daim dans vos favoris')
        aimeButton14.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton14.addEventListener('click',function() {
        const quantity14 = parseInt(quantityInput14.value);
        const prixUnitaire14 = parseFloat(document.getElementById('prix-unitaire14').innerText.replace('€', '').replace(',', '.'));

        if (quantity14 > 0) {
            alert(`Vous avez ajouté ${quantity14} Turban à enfiler en Daim au panier. Total: ${(quantity14 * prixUnitaire14).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire15 = document.getElementById('prix-unitaire15');
console.log(prixUnitaire15)
const quantityInput15 = document.getElementById('quantity15');
const jaime15 = document.getElementById('aime15');
const panier15 = document.getElementById('ajout-panier15');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton15 = document.getElementById('aime15');
    const quantityInput15 = document.getElementById('quantity15');
    const ajoutPanierButton15 = document.getElementById('ajout-panier15');
    const prixUnitaire15 = document.getElementById('prix-unitaire15')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton15.addEventListener('click',function() {
        alert('vous avez ajouter le Turban à enfiler en Maille dans vos favoris')
        aimeButton15.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton15.addEventListener('click',function() {
        const quantity15 = parseInt(quantityInput15.value);
        const prixUnitaire15 = parseFloat(document.getElementById('prix-unitaire15').innerText.replace('€', '').replace(',', '.'));

        if (quantity15 > 0) {
            alert(`Vous avez ajouté ${quantity15} Turban à enfiler en Maille au panier. Total: ${(quantity15 * prixUnitaire15).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// Accessoires

const prixUnitaire16 = document.getElementById('prix-unitaire16');
console.log(prixUnitaire16)
const quantityInput16 = document.getElementById('quantity16');
const jaime16 = document.getElementById('aime16');
const panier16 = document.getElementById('ajout-panier16');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton16 = document.getElementById('aime16');
    const quantityInput16 = document.getElementById('quantity16');
    const ajoutPanierButton16 = document.getElementById('ajout-panier16');
    const prixUnitaire16 = document.getElementById('prix-unitaire16')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton16.addEventListener('click',function() {
        alert('vous avez ajouter Epingle en panel pour hijab 40 piéces noirdans vos favoris')
        aimeButton16.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton16.addEventListener('click',function() {
        const quantity16 = parseInt(quantityInput16.value);
        const prixUnitaire16 = parseFloat(document.getElementById('prix-unitaire16').innerText.replace('€', '').replace(',', '.'));

        if (quantity16 > 0) {
            alert(`Vous avez ajouté ${quantity16} Epingle en panel pour hijab 40 piéces noir au panier. Total: ${(quantity16 * prixUnitaire16).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire17 = document.getElementById('prix-unitaire17');
console.log(prixUnitaire17)
const quantityInput17 = document.getElementById('quantity17');
const jaime17 = document.getElementById('aime17');
const panier17 = document.getElementById('ajout-panier17');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton17 = document.getElementById('aime17');
    const quantityInput17 = document.getElementById('quantity17');
    const ajoutPanierButton17 = document.getElementById('ajout-panier17');
    const prixUnitaire17 = document.getElementById('prix-unitaire17')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton17.addEventListener('click',function() {
        alert('vous avez ajouter Épingle en panel pour hijab 40 pièces colorées dans vos favoris')
        aimeButton17.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton17.addEventListener('click',function() {
        const quantity17 = parseInt(quantityInput17.value);
        const prixUnitaire17 = parseFloat(document.getElementById('prix-unitaire17').innerText.replace('€', '').replace(',', '.'));

        if (quantity17 > 0) {
            alert(`Vous avez ajouté ${quantity17} Épingle en panel pour hijab 40 pièces colorées au panier. Total: ${(quantity17 * prixUnitaire17).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire18 = document.getElementById('prix-unitaire18');
console.log(prixUnitaire18)
const quantityInput18 = document.getElementById('quantity18');
const jaime18 = document.getElementById('aime18');
const panier18 = document.getElementById('ajout-panier18');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton18 = document.getElementById('aime18');
    const quantityInput18 = document.getElementById('quantity18');
    const ajoutPanierButton18 = document.getElementById('ajout-panier18');
    const prixUnitaire18 = document.getElementById('prix-unitaire18')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton18.addEventListener('click',function() {
        alert('vous avez ajouter  Boite épingles pour hijab  dans vos favoris')
        aimeButton18.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton18.addEventListener('click',function() {
        const quantity18 = parseInt(quantityInput18.value);
        const prixUnitaire18 = parseFloat(document.getElementById('prix-unitaire18').innerText.replace('€', '').replace(',', '.'));

        if (quantity18 > 0) {
            alert(`Vous avez ajouté ${quantity18} Boite épingles pour hijab  au panier. Total: ${(quantity18 * prixUnitaire18).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire19 = document.getElementById('prix-unitaire19');
console.log(prixUnitaire19)
const quantityInput19 = document.getElementById('quantity19');
const jaime19 = document.getElementById('aime19');
const panier19 = document.getElementById('ajout-panier19');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton19 = document.getElementById('aime19');
    const quantityInput19 = document.getElementById('quantity19');
    const ajoutPanierButton19 = document.getElementById('ajout-panier19');
    const prixUnitaire19 = document.getElementById('prix-unitaire19')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton19.addEventListener('click',function() {
        alert('vous avez ajouter Lot de 3 attaches hijab magnétiques double puissance dans vos favoris')
        aimeButton19.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton19.addEventListener('click',function() {
        const quantity19 = parseInt(quantityInput19.value);
        const prixUnitaire19 = parseFloat(document.getElementById('prix-unitaire19').innerText.replace('€', '').replace(',', '.'));

        if (quantity19 > 0) {
            alert(`Vous avez ajouté ${quantity19} Lot de 3 attaches hijab magnétiques double
puissance au panier. Total: ${(quantity19 * prixUnitaire19).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire20 = document.getElementById('prix-unitaire20');
console.log(prixUnitaire20)
const quantityInput20 = document.getElementById('quantity20');
const jaime20 = document.getElementById('aime20');
const panier20 = document.getElementById('ajout-panier20');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton20 = document.getElementById('aime20');
    const quantityInput20 = document.getElementById('quantity20');
    const ajoutPanierButton20 = document.getElementById('ajout-panier20');
    const prixUnitaire20 = document.getElementById('prix-unitaire20')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton20.addEventListener('click',function() {
        alert('vous avez ajouter Attache Hijab Magnétique Double puissance dans vos favoris')
        aimeButton20.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton20.addEventListener('click',function() {
        const quantity20 = parseInt(quantityInput20.value);
        const prixUnitaire20 = parseFloat(document.getElementById('prix-unitaire20').innerText.replace('€', '').replace(',', '.'));

        if (quantity20 > 0) {
            alert(`Vous avez ajouté ${quantity20} Attache Hijab Magnétique Double puissance au panier. Total: ${(quantity20 * prixUnitaire20).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire21 = document.getElementById('prix-unitaire21');
console.log(prixUnitaire21)
const quantityInput21 = document.getElementById('quantity21');
const jaime21 = document.getElementById('aime21');
const panier21 = document.getElementById('ajout-panier21');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton21 = document.getElementById('aime21');
    const quantityInput21 = document.getElementById('quantity21');
    const ajoutPanierButton21 = document.getElementById('ajout-panier21');
    const prixUnitaire21 = document.getElementById('prix-unitaire21')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton21.addEventListener('click',function() {
        alert('vous avez ajouter Chouchou Volumateur Hijab en mousseline de soie dans vos favoris')
        aimeButton21.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton21.addEventListener('click',function() {
        const quantity21 = parseInt(quantityInput21.value);
        const prixUnitaire21 = parseFloat(document.getElementById('prix-unitaire21').innerText.replace('€', '').replace(',', '.'));

        if (quantity21 > 0) {
            alert(`Vous avez ajouté ${quantity21} Chouchou Volumateur Hijab en mousseline de soie au panier. Total: ${(quantity21 * prixUnitaire21).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire22 = document.getElementById('prix-unitaire22');
console.log(prixUnitaire22)
const quantityInput22 = document.getElementById('quantity22');
const jaime22 = document.getElementById('aime22');
const panier22 = document.getElementById('ajout-panier22');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton22 = document.getElementById('aime22');
    const quantityInput22 = document.getElementById('quantity22');
    const ajoutPanierButton22 = document.getElementById('ajout-panier22');
    const prixUnitaire22 = document.getElementById('prix-unitaire22')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton22.addEventListener('click',function() {
        alert('vous avez ajouter Manchettes longue dans vos favoris')
        aimeButton22.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton22.addEventListener('click',function() {
        const quantity22 = parseInt(quantityInput22.value);
        const prixUnitaire22 = parseFloat(document.getElementById('prix-unitaire22').innerText.replace('€', '').replace(',', '.'));

        if (quantity22 > 0) {
            alert(`Vous avez ajouté ${quantity22} Manchettes longue au panier. Total: ${(quantity22 * prixUnitaire22).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire23 = document.getElementById('prix-unitaire23');
console.log(prixUnitaire23)
const quantityInput23 = document.getElementById('quantity23');
const jaime23 = document.getElementById('aime23');
const panier23 = document.getElementById('ajout-panier23');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton23 = document.getElementById('aime23');
    const quantityInput23 = document.getElementById('quantity23');
    const ajoutPanierButton23 = document.getElementById('ajout-panier23');
    const prixUnitaire23 = document.getElementById('prix-unitaire23')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton23.addEventListener('click',function() {
        alert('vous avez ajouter Faux col - cache cou  dans vos favoris')
        aimeButton23.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton23.addEventListener('click',function() {
        const quantity23 = parseInt(quantityInput23.value);
        const prixUnitaire23 = parseFloat(document.getElementById('prix-unitaire23').innerText.replace('€', '').replace(',', '.'));

        if (quantity23 > 0) {
            alert(`Vous avez ajouté ${quantity23} Faux col - cache cou au panier. Total: ${(quantity23 * prixUnitaire23).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire24 = document.getElementById('prix-unitaire24');
console.log(prixUnitaire24)
const quantityInput24 = document.getElementById('quantity24');
const jaime24 = document.getElementById('aime24');
const panier24 = document.getElementById('ajout-panier24');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton24 = document.getElementById('aime24');
    const quantityInput24 = document.getElementById('quantity24');
    const ajoutPanierButton24 = document.getElementById('ajout-panier24');
    const prixUnitaire24 = document.getElementById('prix-unitaire24')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton24.addEventListener('click',function() {
        alert('vous avez ajouter Lot 4 attaches hijab anti trou  dans vos favoris')
        aimeButton24.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton24.addEventListener('click',function() {
        const quantity24 = parseInt(quantityInput24.value);
        const prixUnitaire24 = parseFloat(document.getElementById('prix-unitaire24').innerText.replace('€', '').replace(',', '.'));

        if (quantity24 > 0) {
            alert(`Vous avez ajouté ${quantity24} Lot 4 attaches hijab anti trou au panier. Total: ${(quantity24 * prixUnitaire24).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// Tenue de priére

const prixUnitaire25 = document.getElementById('prix-unitaire25');
console.log(prixUnitaire25)
const quantityInput25 = document.getElementById('quantity25');
const jaime25 = document.getElementById('aime25');
const panier25 = document.getElementById('ajout-panier25');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton25 = document.getElementById('aime25');
    const quantityInput25 = document.getElementById('quantity25');
    const ajoutPanierButton25 = document.getElementById('ajout-panier25');
    const prixUnitaire25 = document.getElementById('prix-unitaire25')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton25.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière mère fille bleu  dans vos favoris')
        aimeButton25.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton25.addEventListener('click',function() {
        const quantity25 = parseInt(quantityInput25.value);
        const prixUnitaire25 = parseFloat(document.getElementById('prix-unitaire25').innerText.replace('€', '').replace(',', '.'));

        if (quantity25 > 0) {
            alert(`Vous avez ajouté ${quantity25} Ensemble de prière mère fille bleu au panier. Total: ${(quantity25 * prixUnitaire25).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire26 = document.getElementById('prix-unitaire26');
console.log(prixUnitaire26)
const quantityInput26 = document.getElementById('quantity26');
const jaime26 = document.getElementById('aime26');
const panier26 = document.getElementById('ajout-panier26');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton26 = document.getElementById('aime26');
    const quantityInput26 = document.getElementById('quantity26');
    const ajoutPanierButton26 = document.getElementById('ajout-panier26');
    const prixUnitaire26 = document.getElementById('prix-unitaire26')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton26.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière satin uni Bleu Nuit dans vos favoris')
        aimeButton26.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton26.addEventListener('click',function() {
        const quantity26 = parseInt(quantityInput26.value);
        const prixUnitaire26 = parseFloat(document.getElementById('prix-unitaire26').innerText.replace('€', '').replace(',', '.'));

        if (quantity26 > 0) {
            alert(`Vous avez ajouté ${quantity26} Ensemble de prière satin uni Bleu Nuit au panier. Total: ${(quantity26 * prixUnitaire26).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire27 = document.getElementById('prix-unitaire27');
console.log(prixUnitaire27)
const quantityInput27 = document.getElementById('quantity27');
const jaime27 = document.getElementById('aime27');
const panier27 = document.getElementById('ajout-panier27');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton27 = document.getElementById('aime27');
    const quantityInput27 = document.getElementById('quantity27');
    const ajoutPanierButton27 = document.getElementById('ajout-panier27');
    const prixUnitaire27 = document.getElementById('prix-unitaire27')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton27.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière Prada Taupe dans vos favoris')
        aimeButton27.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton27.addEventListener('click',function() {
        const quantity27 = parseInt(quantityInput27.value);
        const prixUnitaire27 = parseFloat(document.getElementById('prix-unitaire27').innerText.replace('€', '').replace(',', '.'));

        if (quantity27 > 0) {
            alert(`Vous avez ajouté ${quantity27} Ensemble de prière Prada Taupe au panier. Total: ${(quantity27 * prixUnitaire27).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire28 = document.getElementById('prix-unitaire28');
console.log(prixUnitaire28)
const quantityInput28 = document.getElementById('quantity28');
const jaime28 = document.getElementById('aime28');
const panier28 = document.getElementById('ajout-panier28');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton28 = document.getElementById('aime28');
    const quantityInput28 = document.getElementById('quantity28');
    const ajoutPanierButton28 = document.getElementById('ajout-panier28');
    const prixUnitaire28 = document.getElementById('prix-unitaire28')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton28.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière satin uni Noir dans vos favoris')
        aimeButton28.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton28.addEventListener('click',function() {
        const quantity28 = parseInt(quantityInput28.value);
        const prixUnitaire28 = parseFloat(document.getElementById('prix-unitaire28').innerText.replace('€', '').replace(',', '.'));

        if (quantity28 > 0) {
            alert(`Vous avez ajouté ${quantity28} Ensemble de prière satin uni Noir au panier. Total: ${(quantity28 * prixUnitaire28).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire29 = document.getElementById('prix-unitaire29');
console.log(prixUnitaire29)
const quantityInput29 = document.getElementById('quantity29');
const jaime29 = document.getElementById('aime29');
const panier29 = document.getElementById('ajout-panier29');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton29 = document.getElementById('aime29');
    const quantityInput29 = document.getElementById('quantity29');
    const ajoutPanierButton29 = document.getElementById('ajout-panier29');
    const prixUnitaire29 = document.getElementById('prix-unitaire29')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton29.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière fleuri vert en satin dans vos favoris')
        aimeButton29.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton29.addEventListener('click',function() {
        const quantity29 = parseInt(quantityInput29.value);
        const prixUnitaire29 = parseFloat(document.getElementById('prix-unitaire29').innerText.replace('€', '').replace(',', '.'));

        if (quantity29 > 0) {
            alert(`Vous avez ajouté ${quantity29} Ensemble de prière fleuri vert en satin au panier. Total: ${(quantity29 * prixUnitaire29).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire30 = document.getElementById('prix-unitaire30');
console.log(prixUnitaire30)
const quantityInput30 = document.getElementById('quantity30');
const jaime30 = document.getElementById('aime30');
const panier30 = document.getElementById('ajout-panier30');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton30 = document.getElementById('aime30');
    const quantityInput30 = document.getElementById('quantity30');
    const ajoutPanierButton30 = document.getElementById('ajout-panier30');
    const prixUnitaire30 = document.getElementById('prix-unitaire30')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton30.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière blanc corail en satin dans vos favoris')
        aimeButton30.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton30.addEventListener('click',function() {
        const quantity30 = parseInt(quantityInput30.value);
        const prixUnitaire30 = parseFloat(document.getElementById('prix-unitaire30').innerText.replace('€', '').replace(',', '.'));

        if (quantity30 > 0) {
            alert(`Vous avez ajouté ${quantity30} Ensemble de prière blanc corail en satin au panier. Total: ${(quantity30 * prixUnitaire30).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire31 = document.getElementById('prix-unitaire31');
console.log(prixUnitaire31)
const quantityInput31 = document.getElementById('quantity31');
const jaime31 = document.getElementById('aime31');
const panier31 = document.getElementById('ajout-panier31');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton31 = document.getElementById('aime31');
    const quantityInput31 = document.getElementById('quantity31');
    const ajoutPanierButton31 = document.getElementById('ajout-panier31');
    const prixUnitaire31 = document.getElementById('prix-unitaire31')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton31.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière satin uni Vert  dans vos favoris')
        aimeButton31.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton31.addEventListener('click',function() {
        const quantity31 = parseInt(quantityInput31.value);
        const prixUnitaire31 = parseFloat(document.getElementById('prix-unitaire31').innerText.replace('€', '').replace(',', '.'));

        if (quantity31 > 0) {
            alert(`Vous avez ajouté ${quantity31} Ensemble de prière satin uni Vert au panier. Total: ${(quantity31 * prixUnitaire31).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire32 = document.getElementById('prix-unitaire32');
console.log(prixUnitaire32)
const quantityInput32 = document.getElementById('quantity32');
const jaime32 = document.getElementById('aime32');
const panier32 = document.getElementById('ajout-panier32');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton32 = document.getElementById('aime32');
    const quantityInput32 = document.getElementById('quantity32');
    const ajoutPanierButton32 = document.getElementById('ajout-panier32');
    const prixUnitaire32 = document.getElementById('prix-unitaire32')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton32.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière mère fille rose  Prix dans vos favoris')
        aimeButton32.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton32.addEventListener('click',function() {
        const quantity32 = parseInt(quantityInput32.value);
        const prixUnitaire32 = parseFloat(document.getElementById('prix-unitaire32').innerText.replace('€', '').replace(',', '.'));

        if (quantity32 > 0) {
            alert(`Vous avez ajouté ${quantity32} Ensemble de prière mère fille rose  au panier. Total: ${(quantity32 * prixUnitaire32).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire33 = document.getElementById('prix-unitaire33');
console.log(prixUnitaire33)
const quantityInput33 = document.getElementById('quantity33');
const jaime33 = document.getElementById('aime33');
const panier33 = document.getElementById('ajout-panier33');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton33 = document.getElementById('aime33');
    const quantityInput33 = document.getElementById('quantity33');
    const ajoutPanierButton33 = document.getElementById('ajout-panier33');
    const prixUnitaire33 = document.getElementById('prix-unitaire33')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton33.addEventListener('click',function() {
        alert('vous avez ajouter Ensemble de prière mère fille beige  dans vos favoris')
        aimeButton33.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton33.addEventListener('click',function() {
        const quantity33 = parseInt(quantityInput33.value);
        const prixUnitaire33 = parseFloat(document.getElementById('prix-unitaire33').innerText.replace('€', '').replace(',', '.'));

        if (quantity33 > 0) {
            alert(`Vous avez ajouté ${quantity33} Ensemble de prière mère fille beige  au panier. Total: ${(quantity33 * prixUnitaire33).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// Lamis-box

const prixUnitaire34 = document.getElementById('prix-unitaire34');
console.log(prixUnitaire34)
const quantityInput34 = document.getElementById('quantity34');
const jaime34 = document.getElementById('aime34');
const panier34 = document.getElementById('ajout-panier34');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton34 = document.getElementById('aime34');
    const quantityInput34 = document.getElementById('quantity34');
    const ajoutPanierButton34 = document.getElementById('ajout-panier34');
    const prixUnitaire34 = document.getElementById('prix-unitaire34')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton34.addEventListener('click',function() {
        alert('vous avez ajouter le box Petite Pépite dans vos favoris')
        aimeButton34.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton34.addEventListener('click',function() {
        const quantity34 = parseInt(quantityInput34.value);
        const prixUnitaire34 = parseFloat(document.getElementById('prix-unitaire34').innerText.replace('€', '').replace(',', '.'));

        if (quantity34 > 0) {
            alert(`Vous avez ajouté ${quantity34} box Petite Pépite au panier. Total: ${(quantity34 * prixUnitaire34).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});


const prixUnitaire35 = document.getElementById('prix-unitaire35');
console.log(prixUnitaire35)
const quantityInput35 = document.getElementById('quantity35');
const jaime35 = document.getElementById('aime35');
const panier35 = document.getElementById('ajout-panier35');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton35 = document.getElementById('aime35');
    const quantityInput35 = document.getElementById('quantity35');
    const ajoutPanierButton35 = document.getElementById('ajout-panier35');
    const prixUnitaire35 = document.getElementById('prix-unitaire35')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton35.addEventListener('click',function() {
        alert('vous avez ajouter le box Coffret Plaisir dans vos favoris')
        aimeButton35.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton35.addEventListener('click',function() {
        const quantity35 = parseInt(quantityInput35.value);
        const prixUnitaire35 = parseFloat(document.getElementById('prix-unitaire35').innerText.replace('€', '').replace(',', '.'));

        if (quantity35 > 0) {
            alert(`Vous avez ajouté ${quantity35} box Coffret Plaisir au panier. Total: ${(quantity35 * prixUnitaire35).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire36 = document.getElementById('prix-unitaire36');
console.log(prixUnitaire36)
const quantityInput36 = document.getElementById('quantity36');
const jaime36 = document.getElementById('aime36');
const panier36 = document.getElementById('ajout-panier36');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton36 = document.getElementById('aime36');
    const quantityInput36 = document.getElementById('quantity36');
    const ajoutPanierButton36 = document.getElementById('ajout-panier36');
    const prixUnitaire36 = document.getElementById('prix-unitaire36')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton36.addEventListener('click',function() {
        alert('vous avez ajouter le box SuperBox dans vos favoris')
        aimeButton36.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton36.addEventListener('click',function() {
        const quantity36 = parseInt(quantityInput36.value);
        const prixUnitaire36 = parseFloat(document.getElementById('prix-unitaire36').innerText.replace('€', '').replace(',', '.'));

        if (quantity36 > 0) {
            alert(`Vous avez ajouté ${quantity36} SuperBox au panier. Total: ${(quantity36 * prixUnitaire36).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

const prixUnitaire37 = document.getElementById('prix-unitaire37');
console.log(prixUnitaire37)
const quantityInput37 = document.getElementById('quantity37');
const jaime37 = document.getElementById('aime37');
const panier37 = document.getElementById('ajout-panier37');


document.addEventListener('DOMContentLoaded',function() {
    const aimeButton37 = document.getElementById('aime37');
    const quantityInput37 = document.getElementById('quantity37');
    const ajoutPanierButton37 = document.getElementById('ajout-panier37');
    const prixUnitaire37 = document.getElementById('prix-unitaire37')
    const prixTotal = document.getElementById('prix-total')

    // Fonction pour gérer le clic sur le bouton "aime"
    aimeButton37.addEventListener('click',function() {
        alert('vous avez ajouter le E-carte cadeau Lamis Hijab dans vos favoris')
        aimeButton37.classList.toggle('liked');
    });

    // Fonction pour ajouter un produit au panier
    ajoutPanierButton37.addEventListener('click',function() {
        const quantity37 = parseInt(quantityInput37.value);
        const prixUnitaire37 = parseFloat(document.getElementById('prix-unitaire37').innerText.replace('€', '').replace(',', '.'));

        if (quantity37 > 0) {
            alert(`Vous avez ajouté ${quantity37} E-carte cadeau Lamis Hijab au panier. Total: ${(quantity37 * prixUnitaire37).toFixed(2)} €`);
        } else {
            alert('Veuillez sélectionner une quantité valide.');
        }
    });
});

// publicité accueil

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Cache toutes les slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";  // Affiche la slide courante
    setTimeout(showSlides, 3000);  // Change de slide toutes les 3 secondes
}
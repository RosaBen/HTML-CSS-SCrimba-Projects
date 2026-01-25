console.log("Exercice : this & fonctions fléchées");

/*
Objectif :
- Comprendre comment 'this' se comporte
- Comparer fonction classique vs fonction fléchée
*/

const user = {
  name: "Alice",

  // TODO 1
  // Créer une méthode classique appelée sayNameClassic
  // Elle doit afficher : "Méthode classique :" + this.name

  sayNameClassic() {
    console.log("Méthode classique : " + this.name);
  },

  // TODO 2
  // Créer une méthode avec une fonction fléchée appelée sayNameArrow
  // Elle doit afficher : "Fonction fléchée :" + this.name
  sayNameArrow: () => {
    console.log("Fonction fléchée : " + this.name);
  },

  // TODO 3
  // Créer une méthode delayedClassic
  // Elle utilise setTimeout avec une fonction CLASSIQUE
  // Après 1 seconde, afficher : "setTimeout classique :" + this.name

  delayedClassic() {
    setTimeout(function () {
      console.log("setTimeout classique : " + this.name);
    }, 1000);
  },

  // TODO 4
  // Créer une méthode delayedArrow
  // Elle utilise setTimeout avec une fonction FLÉCHÉE
  // Après 1 seconde, afficher : "setTimeout fléchée :" + this.name
  delayedArrow() {
    setTimeout(() => {
      console.log("setTimeout fléchée : " + this.name);
    }, 1000);
  },
};

/*
Ne pas modifier le code ci-dessous
Il sert à tester vos fonctions
*/

document.querySelector("#btn1").addEventListener("click", () => {
  console.clear();
  console.log("=== Test méthode classique ===");
  user.sayNameClassic();
});

document.querySelector("#btn2").addEventListener("click", () => {
  console.clear();
  console.log("=== Test fonction fléchée ===");
  user.sayNameArrow();
});

document.querySelector("#btn3").addEventListener("click", () => {
  console.clear();
  console.log("=== Test setTimeout ===");
  user.delayedClassic();
  user.delayedArrow();
});

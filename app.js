// # Définition de variables

// 1. Créez une variable appelée `nom` et affectez-lui la valeur "John".
// nom = "John";
// 2. Affichez la valeur de la variable `nom` dans la console en utilisant la fonction console.log().
// console.log(nom);
// 3. Modifiez la valeur de la variable `nom` pour qu'elle soit "Jane" sans modifier le code précédent.
// nom = "Jane";
// 4. Affichez à nouveau la valeur de la variable nom dans la console.
// console.log(nom);

// # Boucles

// 1. Créez une boucle for qui s'arrête si l'index dépasse 10, le resultat de la boucle doit correspondre aux nombres de 1 à 10 inclus (attention le premier nombre affiché doit être le 1 et non le 0).

// for (let i = 1; i <= 10; i++) {
// console.log(i);
// };
// 2. Dans la boucle, utilisez la fonction console.log() pour afficher chaque nombre du tableau.
// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < myNumbers.length; i++) { // pourquoi à 0 ?  moi j'ai mis à 1 ???
//     console.log(myNumbers[i]);
//     };

// # console.log()

// 1. Utilisez la fonction console.log() pour afficher le message "Bonjour tout le monde!" dans la console.
// console.log("Bonjour tout le monde!");
// 2. Utilisez la fonction console.log() pour afficher le résultat de l'expression mathématique "3 + 4" dans la console.
// console.log(3 + 4);
// 3. Utilisez la fonction console.log() pour afficher la valeur de la variable `nom`, qui contient la chaîne de caractères du premier exercice.
// console.log(nom);



// # Concaténation de chaînes de caractères

// 1. Définissez une variable appelée `firstName` et affectez-lui la valeur "John".
// let firstName = "John";
// 2. Définissez une variable appelée `lastNAme` et affectez-lui la valeur "Doe".
// let lastName = "Doe";
// 3. Utilisez la concaténation de chaînes de caractères pour créer une nouvelle chaîne de caractères qui contient le prénom et le nom séparés par un espace. Par exemple, si prenom vaut "John" et nom vaut "Doe", la chaîne de caractères créée devrait être "John Doe".
// let completeName = `${firstName}` + ` ${lastName}`;
// 4. Affichez la chaîne de caractères créée dans la console en utilisant la fonction console.log().
// console.log(completeName);
// Attention, veillez à bien utiliser les reverse quotes.


// # Conditions

// 1. Définissez une variable appelée `age` et affectez-lui la valeur de votre âge.
// let age = 61;
// 2. Utilisez une conditionnelle if pour vérifier si l'âge est supérieur ou égal à 18. Si c'est le cas, utilisez la fonction console.log() pour afficher le message "Vous êtes majeur". Sinon, utilisez la fonction console.log() pour afficher le message "Vous êtes mineur".

// if (age >= 18) {
//     console.log("Vous êtes majeur");
// } else {
//     console.log("Vous êtes mineur");
// };

// ## Avancé

// # Création et parcours d'un tableau

// 1. Créez un tableau appelé `couleurs` qui contient les éléments suivants : "rouge", "vert", "bleu", "jaune", "orange".
// let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];
// 2. Utilisez une boucle for pour parcourir le tableau couleurs et afficher chaque élément dans la console en utilisant la fonction console.log().
// for (let i = 0; i < couleurs.length; i++) {
//     console.log(couleurs[i]);
// };


// # Utilisation de Array.push() et Array.pop()

// 1. Créez un tableau appelé `numbers` qui contient les nombres suivants : 1, 2, 3, 4, 5.
const numbers = [1, 2, 3, 4, 5];

// 2. Utilisez la méthode push() pour ajouter le nombre 6 au tableau numbers.
numbers.push(6);
// console.log(numbers);
// 3. Utilisez la méthode pop() pour retirer le dernier élément du tableau numbers.
numbers.pop(6);
// 4. Affichez le contenu du tableau numbers dans la console en utilisant la fonction console.log().
console.log(numbers);

// # Fonctions

// 1. Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair, `false` sinon. Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.

// 2. Écrivez une fonction qui prend en argument un tableau d'entiers et renvoie la somme de tous les éléments du tableau. Vous pouvez utiliser une boucle `for` pour parcourir le tableau et ajouter chaque élément à une variable qui tiendra la somme.

// 3. Écrivez une fonction qui prend en argument une chaîne de caractères et renvoie la chaîne de caractères inversée. Par exemple, si la chaîne passée en argument est "bonjour", la fonction doit renvoyer "ruojnob". Vous pouvez utiliser la méthode `split()` pour séparer la chaîne en un tableau de caractères, la méthode `reverse()` pour inverser l'ordre des éléments du tableau, et la méthode `join()` pour reconstruire la chaîne de caractères à partir du tableau inversé.

// ____

// Contrainte :
// - Vous devez commenter votre code pour expliquer ce qu'il fait, ce qu'il produit et à quoi il sert.

// Vous m'enverrez tous les exercices dans un ou plusieurs fichiers .js reliés à un fichier .html via un lien git que vous aurez préalablement créé.
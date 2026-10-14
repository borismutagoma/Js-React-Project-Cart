# 🛒 Projet React : Panier d'achat

Application web de boutique en ligne développée avec **React 18**, permettant de parcourir un catalogue de peluches, filtrer les produits et gérer un panier d'achat interactif.

## 🌐 Démo en ligne

👉 **[Accéder à l'application](https://borismutagoma.github.io/Js-React-Project-Cart/)**

> Aucune installation requise — l'application se charge directement dans le navigateur.

---

## 📋 Table des matières

- [Choix de développement](#-choix-de-développement)
- [Architecture des composants](#-architecture-des-composants)
- [Gestion de l'état](#-gestion-de-létat)
- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Installation et exécution locale](#-installation-et-exécution-locale)

---

## 🎯 Choix de développement

### React 18 avec composants fonctionnels

J'ai choisi d'utiliser **React 18** avec des **composants fonctionnels** plutôt que des composants de classe. Ce choix se justifie par :

- **Lisibilité** : les composants fonctionnels sont plus concis et plus faciles à lire.
- **Hooks** : l'utilisation de `useState` permet une gestion de l'état simple et directe, sans la complexité des méthodes de cycle de vie (`componentDidMount`, `componentDidUpdate`, etc.).
- **Modernité** : les composants fonctionnels sont la norme recommandée par l'équipe React depuis React 16.8+.

### Architecture modulaire par composants

Chaque composant a une **responsabilité unique** (principe de responsabilité unique) :

- Un composant = une fonctionnalité bien définie
- Chaque composant possède son propre fichier CSS dédié
- Les composants sont réutilisables et indépendants les uns des autres

### Remontée de l'état (Lifting State Up)

L'état du panier est centralisé dans le composant `App` (le composant racine) puis transmis aux composants enfants via les **props**. Ce choix permet :

- Une **source unique de vérité** pour les données du panier
- Une **communication unidirectionnelle** des données (de parent vers enfant)
- Des composants enfants **purs** qui ne gèrent pas d'état global, ce qui les rend plus prévisibles et testables

### CSS modulaire

Plutôt qu'un seul fichier CSS monolithique, j'ai opté pour des **fichiers CSS séparés par composant** :

| Fichier CSS        | Composant associé            |
|--------------------|------------------------------|
| `app.css`          | Layout général de l'application |
| `product.css`      | Affichage d'un produit       |
| `productList.css`  | Liste des produits et filtre |
| `cart.css`         | Panier et total              |

Cela facilite la **maintenance** et permet de retrouver rapidement les styles liés à chaque composant.

### Webpack + Babel

Le projet utilise **Webpack** comme bundler et **Babel** pour la transpilation du JSX :

- `@babel/preset-react` : transformation du JSX en JavaScript standard
- `@babel/preset-env` : compatibilité avec les navigateurs anciens
- `file-loader` : gestion des images importées dans les composants
- `HtmlWebpackPlugin` : génération automatique du fichier HTML de production

React est déclaré comme **dépendance externe** (`externals`) dans la configuration Webpack, ce qui signifie que React et ReactDOM sont chargés via CDN plutôt que d'être inclus dans le bundle. Cela réduit la taille du bundle final.

---

## 🧩 Architecture des composants

```
App
├── ProductList
│   ├── ProductFilter
│   └── ForSaleProduct (× N produits)
│       ├── Product
│       └── AddToCart
└── ShoppingCart
    ├── ProductInCart (× N produits dans le panier)
    └── TotalCart
```

### Description de chaque composant

| Composant         | Rôle |
|-------------------|------|
| **App**           | Composant racine. Gère l'état du panier (`cart`) et les fonctions d'ajout, modification et suppression. |
| **ProductList**   | Affiche la liste des produits avec le filtre de recherche. Gère l'état local du texte de filtrage. |
| **ProductFilter** | Champ de saisie pour filtrer les produits par nom. |
| **ForSaleProduct**| Encapsule un `Product` avec son bouton `AddToCart`. |
| **Product**       | Affiche les informations d'un produit (nom, description, image, poids, stock, prix). |
| **AddToCart**     | Bouton image (icône panier) pour ajouter un produit au panier. |
| **ShoppingCart**  | Affiche le contenu du panier avec le poids total et le prix total. |
| **ProductInCart** | Affiche un produit dans le panier avec un champ de quantité modifiable et un bouton de suppression. |
| **TotalCart**     | Affiche le montant total de la commande. |

---

## 🔄 Gestion de l'état

L'état principal est le **panier** (`cart`), un tableau d'objets `{ product, quantity }` géré dans `App` :

```jsx
const [cart, setCart] = useState([]);
```

Trois fonctions de mutation sont définies dans `App` et passées en props :

- **`handleAddToCart(product)`** : ajoute un produit au panier. Si le produit existe déjà, incrémente la quantité (sans dépasser le stock disponible).
- **`handleUpdateQuantity(productId, quantity)`** : modifie la quantité d'un produit dans le panier (bornée entre 1 et le stock max).
- **`handleRemoveFromCart(productId)`** : supprime un produit du panier via `filter`.

Le composant `ProductList` possède également un **état local** pour le texte du filtre :

```jsx
const [filterText, setFilterText] = useState('');
```

---

## ✨ Fonctionnalités

- **Catalogue de produits** : affichage de 16 peluches avec image, nom, description, poids, stock et prix
- **Filtrage en temps réel** : recherche de produits par nom (insensible à la casse)
- **Ajout au panier** : clic sur l'icône panier pour ajouter un produit
- **Gestion des quantités** : modification de la quantité directement dans le panier (champ numérique)
- **Contrôle du stock** : impossible d'ajouter plus que le stock disponible
- **Suppression** : retrait d'un produit du panier via l'icône poubelle
- **Calcul automatique** : poids total et prix total mis à jour en temps réel

---

## 📂 Structure du projet

```
Js-React-Project-Cart/
├── index.html              ← Version standalone (ouvrir directement dans le navigateur)
├── package.json            ← Dépendances et scripts npm
├── webpack.config.js       ← Configuration Webpack + Babel
├── src/
│   ├── index.html          ← Template HTML source (utilisé par Webpack)
│   ├── favicon.ico
│   ├── scripts/
│   │   └── main.js         ← Point d'entrée React (bootstrap)
│   ├── components/
│   │   ├── app.component.jsx
│   │   ├── ProductList.component.jsx
│   │   ├── ProductFilter.component.jsx
│   │   ├── ForSaleProduct.component.jsx
│   │   ├── Product.jsx
│   │   ├── AddToCart.component.jsx
│   │   ├── ShoppingCart.component.jsx
│   │   ├── ProductInCart.component.jsx
│   │   └── TotalCart.component.jsx
│   ├── data/
│   │   ├── products.js     ← Données des produits
│   │   └── images/         ← Images des peluches
│   ├── assets/
│   │   ├── images/         ← Icônes (panier, poubelle)
│   │   └── style/          ← Fichiers CSS par composant
│   └── style/
│       └── style.css       ← Styles globaux
├── vendor/                 ← React & ReactDOM en local (fallback)
└── dist/                   ← Dossier de build (généré par Webpack)
```

---

## 🚀 Installation et exécution locale

### Prérequis

- [Node.js](https://nodejs.org/) (version 16+)
- npm (inclus avec Node.js)

### Option 1 : Ouvrir directement (sans installation)

Double-cliquer sur le fichier `index.html` à la racine du projet.

> ⚠️ Nécessite une connexion internet (React et Babel sont chargés depuis un CDN).

### Option 2 : Avec le serveur de développement Webpack

```bash
# Installer les dépendances
npm install

# Construire le bundle
npm run build

# Lancer le serveur de développement (avec hot reload)
npm run dev-server
```

Le serveur démarre sur `http://localhost:9000` et ouvre automatiquement le navigateur.

---

## 🛠️ Technologies utilisées

| Technologie     | Version | Utilisation                          |
|-----------------|---------|--------------------------------------|
| React           | 18.2    | Bibliothèque UI                      |
| ReactDOM        | 18.2    | Rendu dans le DOM                    |
| Webpack         | 5.97    | Bundler de modules                   |
| Babel           | 7.26    | Transpilation JSX → JavaScript       |
| CSS             | 3       | Mise en page et styles               |

---

*Projet réalisé dans le cadre du cours de JavaScript/React — Université de Lille*

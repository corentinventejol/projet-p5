// Définir l'URL de l'API
const apiUrl = 'http://localhost:3000/api/products';

// Sélectionner l'élément de la section HTML
const section = document.querySelector('#items');

// Fonction fetch qui récupère les données de l'API
fetch(apiUrl)
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Pour chaque élément dans la réponse
    data.forEach(item => {
      // Créer un élément "a" avec un lien vers la page produit
      const link = document.createElement('a');
      link.href = `./product.html?id=${item._id}`;
      section.appendChild(link);

      // Créer un élément "article" pour contenir la fiche produit
      const article = document.createElement('article');
      link.appendChild(article);

      // Ajouter l'image à la fiche produit
      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.altTxt; // Ajout de l'attribut alt avec la valeur de l'attribut "name" de l'objet "item" de l'API
      article.appendChild(img);

      // Ajouter le nom à la fiche produit
      const name = document.createElement('h3');
      name.textContent = item.name;
      name.classList.add('productName');
      article.appendChild(name);

      // Ajouter la description à la fiche produit
      const description = document.createElement('p');
      description.textContent = item.description;
      description.classList.add('productDescription');
      article.appendChild(description);
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
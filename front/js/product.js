// Obtenez les paramètres de recherche de l'URL
const params = new URLSearchParams(window.location.search);

// Obtenez l'identifiant du produit à partir des paramètres de recherche
const productId = params.get('id');

// Utilisez l'API pour obtenir les informations sur le produit
fetch(`http://localhost:3000/api/products/${productId}`)
  .then(response => response.json())
  .then(data => {
    // Récupérez les informations du produit de la réponse de l'API
    const { colors, _id, name, price, imageUrl, description, altTxt } = data;

    // Changez le titre de la page avec le nom du produit
    document.title = name;

    // Mettez l'image dans la div avec la classe "item__img"
    const itemImg = document.querySelector('.item__img');
    itemImg.setAttribute('src', imageUrl);
    itemImg.setAttribute('alt', altTxt);

    // Mettez le nom du produit dans une balise h1
    const productName = document.querySelector('h1');
    productName.textContent = name;

    // Mettez le prix du produit dans une balise span avec l'id "price"
    const productPrice = document.querySelector('#price');
    productPrice.textContent = price;

    // Mettez la description du produit dans une balise p avec l'id "description"
    const productDescription = document.querySelector('#description');
    productDescription.textContent = description;

    // Mettez les couleurs disponibles dans la balise option
    const colorOptions = document.querySelector('#color-options');
    colors.forEach(color => {
      const option = document.createElement('option');
      option.textContent = color;
      colorOptions.appendChild(option);
    });
  })
  .catch(error => console.error(error));

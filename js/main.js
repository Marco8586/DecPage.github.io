//Modal carrito
const cartBtn = document.getElementById('cartBtn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const totalValue = document.querySelector('.total-value');

cartBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

//Añadir al carrito
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');

let totalPrice = 0;

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('click', () => {
    const product = addToCartBtn.parentNode;
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.menu-item-price').textContent;
    const productImage = product.querySelector('.image').src;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productTitle}">
      <span>${productTitle}</span>
      <span>${productPrice}</span>
      <button class="remove-btn">&times;</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
    
    //Borrar del carrito
    const removeBtns = cartItem.querySelectorAll('.remove-btn');

    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.parentNode;
        cartItem.remove();

        totalPrice -= parseFloat(productPrice.substring(1));
        totalValue.textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

    totalPrice += parseFloat(productPrice.substring(1));
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;
  });
});

//Modal favoritos
const likeBtn = document.getElementById('likeBtn');
const modalContainerLikes = document.querySelector('.modal-container-likes');
const closeBtnLikes = document.querySelector('.close-btn-likes');

likeBtn.addEventListener('click', () => {
  modalContainerLikes.classList.add('show');
});

closeBtnLikes.addEventListener('click', () => {
  modalContainerLikes.classList.remove('show');
});

//Añadir a favoritos
const addToFav = document.querySelectorAll('.bi-heart');
const cartItemsLikesContainer = document.querySelector('.like-items');

addToFav.forEach(addToFavs =>{
  addToFavs.addEventListener('click', () => {
    const productLike = addToFavs.closest('.col');
    const productTitleLike = productLike.querySelector('.title').textContent;
    const productPriceLike = productLike.querySelector('.price').textContent;
    const productImageLike = productLike.querySelector('.img').src;

    const likeItem = document.createElement('div');
    likeItem.classList.add('cart-item');
    likeItem.innerHTML = `
      <img src="${productImageLike}" alt="${productTitleLike}">
      <span>${productTitleLike}</span>
      <span>${productPriceLike}</span>
      <button class="remove-btn">&times;</button>
    `;
    
    cartItemsLikesContainer.appendChild(likeItem);
    
    //Borrar de favoritos
    const removeBtns = likeItem.querySelectorAll('.remove-btn');
    const iconos = document.querySelectorAll(".bi-heart");

    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.parentNode;
        const productTitle = cartItem.querySelector('span').textContent;
        const catalogItems = document.querySelectorAll('.title');
        catalogItems.forEach(item => {
          if (item.textContent === productTitle) {
            const icono = item.parentNode.querySelector('.bi-heart-fill');
            if (icono) {
              icono.classList.remove('bi-heart-fill');
              icono.classList.add('bi-heart');
            }
          }
        });
        cartItem.remove();
      });
    });
    

    totalPrice += parseFloat(productPrice.substring(1));
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;
  });
})

// Mandar favoritos al carrito
const addFavsToCartBtn = document.querySelector('.btn-favs');

addFavsToCartBtn.addEventListener('click', () => {
  const favItems = document.querySelectorAll('.like-items .cart-item');
  
  favItems.forEach(favItem => {
    const productTitle = favItem.querySelector('span').textContent;
    const productPrice = favItem.querySelectorAll('span')[1].textContent;
    const productImage = favItem.querySelector('img').src;

    // Crear un nuevo elemento de carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productTitle}">
      <span>${productTitle}</span>
      <span>${productPrice}</span>
      <button class="remove-btn">&times;</button>
    `;

    cartItemsContainer.appendChild(cartItem);

    const removeBtns = cartItem.querySelectorAll('.remove-btn');

    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.parentNode;
        cartItem.remove();

        totalPrice -= parseFloat(productPrice.substring(1));
        totalValue.textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

    totalPrice += parseFloat(productPrice.substring(1));
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;

    favItem.remove();
  });

});

//Animación scroll imágenes
const image1 = document.getElementById('image1');
const image2 = document.getElementById('imagen2');

const loadImage = (entradas, observe) => {
  entradas.forEach((entrada)=> {
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible')
    }
  });
}

const observe = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.8
});

observe.observe(image1);
observe.observe(imagen2);

//Animación icono like
const iconos = document.querySelectorAll(".bi-heart");

iconos.forEach(icono => {
  icono.addEventListener("click", function() {
    if (icono.classList.contains("bi-heart")) {
      icono.classList.remove("bi-heart");
      icono.classList.add("bi-heart-fill");
    } else {
      icono.classList.remove("bi-heart-fill");
      icono.classList.add("bi-heart");
    }
  });
});

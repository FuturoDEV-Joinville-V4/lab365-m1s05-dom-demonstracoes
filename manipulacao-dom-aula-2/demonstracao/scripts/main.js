const response = {
  products: [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "price": 49.99,
      "images": [
        "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt78bf95cc2f846f82/65fb2bd4ff8167040a980bf2/banner-head-products-(7).png"
      ]
    }
  ],
  "total": 6,
  "skip": 0,
  "limit": 6
};

/// elemento pai da lista => #list-products
/**
 *  <div class="product-item">
              <img
                src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg"
                alt="Macbook Pro Retina 14 Inch"
                height="236"
              />
              <div>
                <div class="product-details">
                  <strong>Macbook Pro Retina 14 Inch</strong>
                  <span
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, delectus!</span
                  >
                </div>
                <div class="product-price">
                  <strong>R$ 7.999,00</strong>
                  <button>
                    <img
                      src="./assets/icons/cart.svg"
                      height="20"
                      alt="Icone de carrinho"
                    />
                  </button>
                </div>
              </div>
            </div>
 */
// div => product-item
// img => src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg"
          // alt="Macbook Pro Retina 14 Inch"
          // height="236"
const listaElemento = document.querySelector('#list-products')

response.products.forEach((produto) => {
    /** 
     * Construindo elementos
     */
    // container
    const containerElemento = document.createElement('div')
    containerElemento.classList.add("product-item")
    // img
    const imagemElemento = document.createElement('img')
    // adicionar os atributos
    imagemElemento.setAttribute('src', produto.images[0])
    imagemElemento.setAttribute('alt', produto.title)
    imagemElemento.setAttribute('height', '236')

    // adicionar a imagem no container
    containerElemento.appendChild(imagemElemento)

    // titulo
    // <div class="product-details">
    const detalheProdutoElemento = document.createElement('div')
    detalheProdutoElemento.classList.add("product-details")

    const strongElemento = document.createElement("strong")
    strongElemento.textContent = produto.title;

    detalheProdutoElemento.appendChild(strongElemento)
    containerElemento.appendChild(detalheProdutoElemento)
    // adicionar o elemento na lista
    listaElemento.appendChild(containerElemento)
})
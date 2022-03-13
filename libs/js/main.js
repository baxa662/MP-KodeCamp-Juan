const buildCard = (title, photoUrl, price, productId) => {
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardButton = document.createElement("a");
    
    // Add classes to elements
    cardContainer.classList.add("card", "mt-2", "tarjetas-productos", "text-black");
    cardImage.classList.add("cardImg")
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardButton.classList.add("btn", `btn-primary`);
  
    // Add values to the elements
    cardImage.src = photoUrl;
    cardTitle.innerText = title;
    cardText.innerText = `Precio: $ ${price}`;
    cardButton.innerText = "Detalles";
    cardButton.href = `details.html?productId=${productId}`;
  
    // Build structure
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
  
    return cardContainer;
  };

const buildCardDetails = (title, description, photoUrl, price, productId) => {
    let cardContainer = document.createElement("div");
    let cardRow = document.createElement("div");
    let cardColImg = document.createElement("div");
    let cardImage = document.createElement("img");
      let cardColInfo = document.createElement("div");
      let cardBody = document.createElement("div");
      let cardNew = document.createElement("p");
      let cardTitle = document.createElement("h4");
      let cardPrice = document.createElement("p");
      let cardDesc = document.createElement("p");
      let cardStock = document.createElement("p");
      let cardBtnContainer = document.createElement("div");
      let cardButtonAdd = document.createElement("a");
      
      // Add classes to elements
      cardContainer.classList.add("card", "mb-3", "centrar", "detalles", "mt-2");
      cardRow.classList.add("row", "g-0")
      cardColImg.classList.add("col-md-8")
      cardImage.classList.add("img-fluid","rounded-start", "detailImg")
      cardColInfo.classList.add("col-md-4")
      cardBody.classList.add("card-body", "info-prod");
      cardNew.classList.add("card-text", "text-muted")
      cardTitle.classList.add("card-title");
      cardPrice.classList.add("card-text", "precio", "mt-3");
      cardDesc.classList.add("card-text");
      cardStock.classList.add("card-text");
      cardBtnContainer.classList.add("d-grid","gap-2");
      cardButtonAdd.classList.add("btn", `btn-primary`,"btn-lg");
    
      // Add values to the elements
      cardImage.src = photoUrl;
      cardTitle.innerText = title;
      cardPrice.innerText =  `Precio: $ ${price}`;
      cardDesc.innerText = `${description}`
      cardNew.innerText = `Aun tenemos stock`
      cardButtonAdd.innerText = "Agregar al carrito";
      
      // Build structure
      cardColImg.appendChild(cardImage)
      cardBody.appendChild(cardNew)
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardPrice)
      cardBody.appendChild(cardDesc)
      cardBody.appendChild(cardStock)
      cardBtnContainer.appendChild(cardButtonAdd)
      cardBody.appendChild(cardBtnContainer)
      cardColInfo.appendChild(cardBody)
      cardRow.appendChild(cardColImg)
      cardRow.appendChild(cardColInfo)
      cardContainer.appendChild(cardRow);
    
      return cardContainer;
    };

  let cardDetail = document.getElementById("cardDetail")

const buildCardDash = (title, description, photoUrl, price, productId) => {
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardBtnContainer = document.createElement("div");
    let cardButtonEdit = document.createElement("a");
    let cardButtonDel = document.createElement("a");
    
    // Add classes to elements
    cardContainer.classList.add("card", "mt-2", "tarjetas-productos", "text-black");
    cardImage.classList.add("mt-2","cardImg")
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardBtnContainer.classList.add("d-flex","justify-content-between");
    cardButtonEdit.classList.add("btn", `btn-primary`);
    cardButtonDel.classList.add("btn", `btn-danger`);
  
    // Add values to the elements
    cardImage.src = photoUrl;
    cardTitle.innerText = title;
    cardText.innerText =  `${description} \n Precio: $${price}`;
    cardButtonEdit.innerText = "Editar";
    cardButtonDel.innerText = "Eliminar";
    cardButtonEdit.setAttribute("data-bs-toggle","modal")
    cardButtonEdit.setAttribute("data-bs-target","#editar")
    cardButtonDel.setAttribute("onclick",`deleteProduct("${productId}")`)
    cardButtonEdit.setAttribute("onclick",`getValues("${productId}")`)
    
    // Build structure
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
  
    cardBtnContainer.appendChild(cardButtonEdit);
    cardBtnContainer.appendChild(cardButtonDel);
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBtnContainer);
  
    return cardContainer;
  };
  
  let mainContent = document.getElementById("productos");

  const createProduct = (title, description, price, imageUrl) => {
    const url =
      "https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos.json";
  
    const product = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
  
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        return res.json();
      })
      .then((product) => {
        window.location.href = `dashboard.html`;
      });
  };
  
  const getProduct = (id) => {
    const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos/${id}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        const card = buildCardDetails(
          product.title,
          product.description,
          product.imageUrl,
          product.price
        );
  
        cardDetail.appendChild(card);
      });
  };
  
  const getAllProducts = () => {
    const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        for (const key in products) {
          const product = products[key];
  
          const card = buildCard(
            product.title,
            product.imageUrl,
            product.price,
            key
          );
  
          mainContent.appendChild(card);
        }
      });
  };

  const getAllProductsDash = () => {
    const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        for (const key in products) {
          const product = products[key];
  
          const card = buildCardDash(
            product.title,
            product.description,
            product.imageUrl,
            product.price,
            key
          );
  
          mainContent.appendChild(card);
        }
      });
  };
  
  const updateProduct = (title, description, price, imageUrl, productId) => {
    const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos/${productId}.json`;
  
    const product = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => {
      if (res.ok) {
        window.location.href = `dashboard.html`;
      } else {
        console.error(res);
      }
    });
  };
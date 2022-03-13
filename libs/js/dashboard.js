const getDataCreate = () => {
  const titleElement = document.getElementById("nombre-input");
  const descriptionElement = document.getElementById("descripcion-input");
  const photoUrlElement = document.getElementById("foto-input");
  const priceElement = document.getElementById("precio-input");
  
    const title = titleElement.value;
    const description = descriptionElement.value;
    const photoUrl = photoUrlElement.value;
    const price = priceElement.value;
  
    createProduct(title, description, price, photoUrl);
  };
  
  const submitBtn = document.getElementById("agregar-btn");
  
  submitBtn.addEventListener("click", getDataCreate);

  getAllProductsDash();

const deleteProduct = (productId) => {
  const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos/${productId}.json`;

  fetch(url, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      window.location.href = "dashboard.html";
    } else {
      console.error(res);
    }
  });
};

const productIdElement = document.getElementById("id");
const titleElementEdit = document.getElementById("NombreEdit-input");
const descriptionElement = document.getElementById("DescripcionEdit-input");
const photoUrlElement = document.getElementById("FotoEdit-input");
const priceElement = document.getElementById("PrecioEdit-input");
const submitBtnEdit = document.getElementById("EditBtn");

const getDataEdit = () => {
  const title = titleElementEdit.value;
  const description = descriptionElement.value;
  const photoUrl = photoUrlElement.value;
  const price = priceElement.value;
  const id = productIdElement.value;

  updateProduct(title, description, price, photoUrl, id);
};

const getValues = (productId) => {
  const url = `https://mp-kodecamp-juan-default-rtdb.firebaseio.com/productos/${productId}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        titleElementEdit.value = product.title
        descriptionElement.value = product.description
        photoUrlElement.value = product.imageUrl
        priceElement.value = product.price
        productIdElement.value = productId
      });
};

submitBtnEdit.addEventListener("click", getDataEdit);
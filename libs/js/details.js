const params = new URLSearchParams(window.location.search);

const productId = params.get("productId");

getProduct(productId);
getAllProductsDetail();
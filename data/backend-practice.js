const xhr = new XMLHttpRequest();
// this methode wait for the response to come back

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/products/first");
xhr.send();

let products = [];

export function loadProducts() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response);
    console.log(products);
    
    
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
loadProducts();

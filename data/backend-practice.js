const xhr = new XMLHttpRequest();
// this methode wait for the response to come back

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/products/first");
xhr.send();

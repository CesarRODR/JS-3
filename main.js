const misPodrutos = [
    {
        id: 1,
        nombre: "dvr",
        imagen: "https://images.app.goo.gl/xxa6jMhs5wh3thXy6",
        precio:65399.99,
    },
    {
        id: 2,
        nombre: "camara domo",
        imagen: "https://images.app.goo.gl/ZurXaoGixJRVP4FUA",
        precio: 15600,
    },
    {
        id: 3,
        nombre: "camara bullet",
        imagen: "https://images.app.goo.gl/86yw44Gx5v1QFPa2A",
        precio:12400
    },
    {
        id: 4,
        nombre: "disco rigido 1TB",
        imagen: "https://images.app.goo.gl/FpQMARt2fGm3hQAD7",
        precio:26450,
    },
    {
        id: 5,
        nombre: "balun",
        imagen: "https://images.app.goo.gl/WrGbmSMoQF8aRkBKA",
        precio:850,
    },
    {
        id: 6,
        nombre: "caja estanco",
        imagen: "https://images.app.goo.gl/6QTvM7Yq9EecefCdA",
        precio:700,
    },
    {
        id: 6,
        nombre: "conector macho cctv",
        imagen: "https://images.app.goo.gl/LJDMn1ckN3KxCvZv6",
        precio: 250,
    } 
]

let contDeProductos = document.getElementById("losproductos");

function brindarProductos(prods){
    for (const prod of prods){
        contDeProductos.innerHTML +=`
        <div class="card col-sm-2">
        <img src= ${prod.imagen} alt="card img cap" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title">${prod.nombre}</h4>
            <p class="card-text"> $ ${prod.precio}</p>
            <button class="btn btn-success   compra">comprar</button>
        </div>
     </div> 
        `;
    }
}
brindarProductos(misPodrutos);












/* let div =document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
let cartas = document.getElementById("cards");

//div.innerText = "Clase de dom 🤓"
div.style.background="blue";
div.style.fontSize="40px";

let parrafos = document.getElementsByTagName("p");

console.log(parrafos); */
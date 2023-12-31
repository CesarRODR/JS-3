const misPodrutos = [
    {
        id: 1,
        nombre: "dvr",
        imagen: "https://axa.com.ar/webaxa/28469/dvr-hikvision-8-canales-1080n-720p-deteccion-humana-y-vehiculos.jpg",
        precio:65399.99,
        descripcion: "DVR 8ch de video 1ch de audio tecnologia 1080p lite",
    },
    {
        id: 2,
        nombre: "camara domo",
        imagen: "https://www.rosarioseguridad.com.ar/admin/productos/60516656dc9cccae8539e193b83ae4f1.jpg",
        precio: 15600,
        descripcion: "Camara mini domo exterior lente 3,6mm 1080p cuatrinorma",
    },
    {
        id: 3,
        nombre: "camara bullet",
        imagen: "https://www.rosarioseguridad.com.ar/admin/productos/58a85d579621b14341073daf99ab1328.jpg",
        precio:12400,
        descripcion: "Camara bullet exterior lente 3,6mm 1080p cuatrinorma",
    },
    {
        id: 4,
        nombre: "disco rigido 1TB",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXL3wX7gAYj3oBzarZtHWZSpZj-JOMfPNbA&usqp=CAU",
        precio:26450,
        descripcion: "Disco rigido purple 1Tb 5400rpm apto para nvr,dvr",
    },
    {
        id: 5,
        nombre: "balun",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgx0bXoJIVLHBOlWAihiZT5B3BCtZ9LldhsQ&usqp=CAU",
        precio:850,
        descripcion: "Conector de video balun pasivo full hd rango de transmision hasta 300m",
    },
    {
        id: 6,
        nombre: "caja estanco",
        imagen: "https://electricabeltran.com.ar/images/product_image/1833/0?w=200&h=199&fit=crop&dpr=2.625&q=80",
        precio:700,
        descripcion: "Cajas estanco para resguardar conectores diferentes medidas",
    },
    {
        id: 7,
        nombre: "conector macho",
        imagen: "https://www.cclink.cl/wp-content/uploads/2020/04/Conector-DC-Macho.png",
        precio: 250,
        descripcion: "Conector macho de alimentacion con borneras para 12v",
    },
    {
        id: 8,
        nombre: "Fuente de alimentacion",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_772735-MLA47308429234_082021-O.webp",
        precio: 5550,
        descripcion: "Fuente switch de alimentacion 12v 5A para cctv soporta hasta 5 camaras ",
    } 
]


let contDeProductos = document.getElementById("losproductos");
let miCarrito = document.getElementById("carrito-contenedor");

const carrito = [];

function brindarProductos(prods){
    for (const prod of prods){
        contDeProductos.innerHTML +=`
     <div class="card col-sm-2 col-8 col-sm-3 text-center shadow-lg p-3 mb-5 bg-body rounded ">
        <img src= ${prod.imagen} alt="card img cap" class="img-fluid ">
        <div class="card-body">
            <h4 class="card-title ">${prod.nombre}</h4>
            <p class="card-text">$ ${prod.precio} <br> ${prod.descripcion}</p>
            <button id=${prod.id} class="btn btn-success container text-center  compra">Agregar al Carrito</button>
        </div>
     </div> 
        `;
    }

    //eventos
    let botones = document.getElementsByClassName("compra");
    for (const boton of botones) {
        boton.onclick = () =>{
            const producACarro = misPodrutos.find((producto) => producto.id == boton.id);
            console.log(producACarro);
            
           agregarAcarrito(producACarro);
        }
        
    }
}
           brindarProductos(misPodrutos);

//carrito de compras
    function agregarAcarrito (producto) {
        let alCarro = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
        carrito.push(producto);
        tablaCarrito.innerHTML += `     
    
            <table class="table">
    
                 <tbody>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.id}</td>
    
                </tbody>
            </table>`; 
    
    precioTotal+=producto.precio;
            totalActual();
            saveLocal();
};

let precioTotal=0;
    function totalActual(){
        const todoElTotal = document.getElementById("total");
        todoElTotal.innerHTML = "El precio total es: $" + precioTotal;
};
    //local storage para el carrito
    const saveLocal = () =>{
       localStorage.setItem("carrito", JSON.stringify(carrito)); 
    }
    
 
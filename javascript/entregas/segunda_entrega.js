// ----- Constructor de clases ----- //
class Cake {
    constructor(cake) {
        this.id = cake.id;
        this.nombre = cake.nombre;
        this.precio = cake.precio;
        this.cantidad = 1;
        this.precioTotal = cake.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}


// Constantes y variables
const cakes = [
    {
        id: 0,
        nombre: "Lemon Pie",
        descripcion: "Torta de limon con merengue italiano",
        precio: 990,
        img: "/images/30.png",

    },
    {
        id: 1,
        nombre: "Cheese cake",
        descripcion: "Torta de mouse de queso con frutos rojos",
        precio: 1100,
        img: "/images/31.png",

    },
    {
        id: 2,
        nombre: "Chocomouse",
        descripcion: "Torta de bizcochuelo con mouse de chocolate y nutella",
        precio: 1500,
        img: "/images/32.png",

    },
    {
        id: 3,
        nombre: "Choco en rama",
        descripcion: "Torta con chantilly y chocolate en rama",
        precio: 1300,
        img: "/images/33.png",

    },
    {
        id: 4,
        nombre: "Frutos rojos y chocolate",
        descripcion: "Mouse de chocolate blanco con una ganache de chocolate negro y frutos rojos",
        precio: 1200,
        img: "/images/34.png",

    },
    {
        id: 5,
        nombre: "Torta Caramelo",
        descripcion: "Torta con base de caramelo",
        precio: 1050,
        img: "/images/35.png",

    },
    {
        id: 6,
        nombre: "Macarron cake",
        descripcion: "Torta con toppings de macarons",
        precio: 1500,
        img: "/images/36.png",

    },
    {
        id: 7,
        nombre: "Strawberry and cream",
        descripcion: "Torta con base de bizcochuelo, con butter cream y frutillas ",
        precio: 890,
        img: "/images/37.png",

    },
    {
        id: 8,
        nombre: "Arcoiris",
        descripcion: "Torta con base de de bizcochuelo de colores pasteles",
        precio: 1500,
        img: "/images/38.png",

    },
    {
        id: 9,
        nombre: "Primavera",
        descripcion: "Torta con butter cream y flores comestibles",
        precio: 1200,
        img: "/images/39.png",

    },
    {
        id: 10,
        nombre: "Torta menta",
        descripcion: "Torta de chocolate y menta",
        precio: 990,
        img: "/images/40.png",

    },
    {
        id: 11,
        nombre: "Macarron gigante",
        descripcion: "Macarron gigante con frutos del bosque",
        precio: 890,
        img: "/images/41.png",

    },
    {
        id: 12,
        nombre: "Red Velvet",
        descripcion: "Bizcochuelo rojo con butter cream y frutos del bosque",
        precio: 1200,
        img: "/images/42.png",

    },
    {
        id: 13,
        nombre: "Arandanos",
        descripcion: "Bizcochuelo relleno de duce de leche con una butter cream de arandanos",
        precio: 1400,
        img: "/images/43.png",

    },
    {
        id: 14,
        nombre: "Kit Kat",
        descripcion: "Bizcochuelo relleno de duce de leche con Kit Kat",
        precio: 1400,
        img: "/images/44.png",

    },
    {
        id: 15,
        nombre: "Oreo",
        descripcion: "Bizcochuelo relleno de duce de leche con butter cream y oreos",
        precio: 1400,
        img: "/images/45.png",

    },
    {
        id: 16,
        nombre: "Torta citrica",
        descripcion: "Bizcochuelo relleno de mouse de naranja con butter cream naranja y crema inglesa",
        precio: 1050,
        img: "/images/46.png",

    },
    {
        id: 17,
        nombre: "Reversion de lemon pie",
        descripcion: "Bizcochuelo relleno de crema pastelera de limon con merengue italiano flambeado",
        precio: 950,
        img: "/images/47.png",

    },   

];


let carrito;
// ----- Declaración de funciones ----- //

// ----- Chquear carrito en Storage ----- //

function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
    console.log("contenido en chequear Carrito en ls ", contenidoEnStorage);

    if (contenidoEnStorage) {
        let array = [];
        for (let i = 0; i < contenidoEnStorage.length; i++) {
            let cake = new Cake (contenidoEnStorage[i]);
            cake.actualizarPrecioTotal();
            array.push(cake);
        }

        return array;
    }
    return [];
}


// ----- Imprimir productos en el HTML ----- //
function imprimirProductosEnHTML(cakes) {
 
    let cards = document.getElementById("cards");
    
    for (const cake of cakes) {
    
        let card = document.createElement("div");

        card.innerHTML = `
            <img class="card-img-top" src="${cake.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title"><a href="./subpages-cakes/cake18.html" title="View Product">${cake.nombre}</a></h4>
                <div class="row">
                    <div class="col">
                        <p class="card-price btn btn-dark btn-block">$${cake.precio}</p>
                    </div>
                    <div class="row">
                        <button id="agregar${cake.id}" type="button" onclick="" class="addToCart btn btn-success btn-block fa fa-shopping-cart fa-2x"> Agregar </button>
                    </div>
                </div>
            </div>
        `;


        cards.appendChild(card);


        let boton = document.getElementById(`agregar${cake.id}`);


        boton.onclick = () => agregarAlCarrito(cake.id);

    }
}



// ----- Carrito ----- //
function dibujarTabla(array) {
    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    let precioTotal = obtenerPrecioTotal(array);

    let tabla = document.createElement("div");

    tabla.innerHTML = `
        <table id="tablaCarrito" class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Parcial</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">
                <tr>
                    <td>Total: $${precioTotal}</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            <tr> 
                <td> <button id="vaciarCarrito" class="btn btn-dark"> Vaciar Carrito </button> </td>
            </tr>

            </tbody>
        </table>
    `;

    contenedor.appendChild(tabla);


    let bodyTabla = document.getElementById("bodyTabla");
    for (let cake of array) {
        let datos = document.createElement("div");
        datos.innerHTML = `
            <tr>
                <th scope="row"></th>
                <td>${cake.nombre}</td>
                <td>${cake.cantidad}</td>
                <td>$${cake.precioTotal}</td>
                <td><button id="eliminar${cake.id}" type="button" class="btn btn-dark">Eliminar</button></td>
            </tr>
      `;

        bodyTabla.appendChild(datos);

        $(`#eliminar${cake.id}`).on("click", () => {
            eliminarDelCarrito(cake.id);
        });
    }
}


function agregarAlCarrito(idProducto) {

    let cakeEnCarrito = carrito.find((elemento) => {
        if (elemento.id == idProducto) {
            return true;
        }
    });

    if (cakeEnCarrito) {

        let index = carrito.findIndex((elemento) => {
            if (elemento.id === cakeEnCarrito.id) {
                return true;
            }
        });

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {

        carrito.push(new Cake (cakes[idProducto], 1));
    }

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    dibujarTabla(carrito);
}

function eliminarDelCarrito(id) {
    let cake = carrito.find((cake) => cake.id === id);

    let index = carrito.findIndex((element) => {
        if (element.id === cake.id) {
            return true;
        }
    });

    if (cake.cantidad > 1) {

        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {

        carrito.splice(index, 1);

        if (carrito.lenght === 0) {
            carrito = [];
        }
    }

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    dibujarTabla(carrito);
}


// ----- Precio Total ----- //
function obtenerPrecioTotal(array) {
    let precioTotal = 0;

    for (const producto of array) {
        precioTotal += producto.precioTotal;

    }

    return precioTotal;


  
}

// --- Invocación de funciones ---//
imprimirProductosEnHTML(cakes);
carrito = chequearCarritoEnStorage();
dibujarTabla(carrito);


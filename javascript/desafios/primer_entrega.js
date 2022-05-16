// ----- Contructor de clases ----- //
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

// ----- Variables ----- //
const cakes = [
    {
        id: 0,
        nombre: "Lemon Pie",
        descripcion: "Torta de limon con merengue italiano",
        precio: 990,
    },
    {
        id: 1,
        nombre: "Cheese cake",
        descripcion: "Torta de mouse de queso con frutos rojos",
        precio: 1100,
    },
    {
        id: 2,
        nombre: "Chocomouse",
        descripcion: "Torta de bizcochuelo con mouse de chocolate y nutella",
        precio: 1500,
    },
    {
        id: 3,
        nombre: "Choco en rama",
        descripcion: "Torta con chantilly y chocolate en rama",
        precio: 1300,
    },
    {
        id: 4,
        nombre: "Frutos rojos y chocolate",
        descripcion: "Mouse de chocolate blanco con una ganache de chocolate negro y frutos rojos",
        precio: 1200,
    },
    {
        id: 5,
        nombre: "Torta Caramelo",
        descripcion: "Torta con base de caramelo",
        precio: 1050,
    },
    {
        id: 6,
        nombre: "Macarron cake",
        descripcion: "Torta con toppings de macarons",
        precio: 1500,
    },
    {
        id: 7,
        nombre: "Strawberry and cream",
        descripcion: "Torta con base de bizcochuelo, con butter cream y frutillas ",
        precio: 890,
    },
    {
        id: 8,
        nombre: "Arcoiris",
        descripcion: "Torta con base de de bizcochuelo de colores pasteles",
        precio: 1500,
    },
    {
        id: 9,
        nombre: "Primavera",
        descripcion: "Torta con butter cream y flores comestibles",
        precio: 1200,
    },
    {
        id: 10,
        nombre: "Torta menta",
        descripcion: "Torta de chocolate y menta",
        precio: 990,
    },
    {
        id: 11,
        nombre: "Macarron gigante",
        descripcion: "Macarron gigante con frutos del bosque",
        precio: 890,
    },
    {
        id: 12,
        nombre: "Red Velvet",
        descripcion: "Bizcochuelo rojo con butter cream y frutos del bosque",
        precio: 1200,
    },
    {
        id: 13,
        nombre: "Arandanos",
        descripcion: "Bizcochuelo relleno de duce de leche con una butter cream de arandanos",
        precio: 1400,
    },
    {
        id: 14,
        nombre: "Kit Kat",
        descripcion: "Bizcochuelo relleno de duce de leche con Kit Kat",
        precio: 1400,
    },
    {
        id: 15,
        nombre: "Oreo",
        descripcion: "Bizcochuelo relleno de duce de leche con butter cream y oreos",
        precio: 1400,
    },
    {
        id: 16,
        nombre: "Torta citrica",
        descripcion: "Bizcochuelo relleno de mouse de naranja con butter cream naranja y crema inglesa",
        precio: 1050,
    },
    {
        id: 17,
        nombre: "Reversion de lemon pie",
        descripcion: "Bizcochuelo relleno de crema pastelera de limon con merengue italiano flambeado",
        precio: 950,
    },   

];

let carrito = [];
let precioTotal;

// ----- Declaración de funciones ----- //
function menuDeCompras() {
    let stringProductos = "";

    for (let i = 0; i < cakes.length; i++) {
        stringProductos += `${cakes[i].id}: ${cakes[i].nombre}. Precio: $${cakes[i].precio} \n`;

    }

    let idProducto = prompt(`
    Escriba el número de cakes que desea comprar, o escriba 'terminar' para finalizar
    ${stringProductos} \n`);

    while (idProducto !== "terminar") {

        let cakeEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (cakeEnCarrito) {

            let index = carrito.findIndex((elemento) => elemento.id === cakeEnCarrito.id);

            carrito[index].agregarUnidad();
            carrito[index].actualizarPrecioTotal();
            alert(`
            Se ha añadido otra unidad ${carrito[index].nombre} 
            Unidades: ${carrito[index].cantidad}`);
            console.table(carrito);
        } else {
            
            carrito.push(new Cake (cakes[idProducto]));

        
            alert(`Se ha añadido al carrito ${cakes[idProducto].nombre}`);
            console.table(carrito);
        }

        idProducto = prompt(`
        Desea seguir comprando? 
        Escriba el número del producto a comprar, o escriba 'terminar' para finalizar 
        ${stringProductos}`);
    }
}



function calculadoraiva (precioProducto, impuestos) {
const iva = 0.21
const conDescuento = calculadoraiva (precioTotal, iva);
if (precioProducto >= 2500) {

    return precioProducto - (precioProducto * impuestos)


} else {

    return precioProducto

}
}

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    } 
    if (precioTotal >= 2500) {

        return conDescuento;
       
       } else {
          
        return precioTotal;

       }
    
}


menuDeCompras();
calculadoraiva ()
precioTotal = obtenerPrecioTotal();
alert(`El precio total de tu compra es de $${precioTotal}
Gracias!`);
console.table(carrito);









cakes.sort((a, b) => a.precio - b.precio);
console.log("Array ordenado por precio ascendente");
console.table(cakes);

cakes.sort((a, b) => a.precio - b.precio);
console.log("Array ordenado por precio descendente");
console.table(cakes);


let nuevoArray = cakes.filter((elemento) => elemento.precio < 1500);
console.log("Nuevo array con precio menor a 1500");
console.table(nuevoArray);
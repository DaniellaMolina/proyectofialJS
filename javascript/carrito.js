// ----- Constructor de clases ----- //
class Cake {
    constructor(cake) {
        this.id = cake.id;
        this.nombre = cake.nombre;
        this.cantidad = cake.cantidad;
        this.precio = cake.precio;
        this.precioTotal = cake.precio;
    }

    agregarUnidadAlStock() {
        return this.cantidad++;
    }

    quitarUnidadDelStock() { 
        return (this.cantidad-= 1) ;
    }

    actualizarPrecio() {
        return (this.precioTotal = this.precio * this.cantidad);
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
    {
        id: 18,
        nombre: "Butter cream cake",
        descripcion: "Bizcochuelo relleno de crema citrica y dulce de leche con merengues italianos",
        precio: 1200,
        img: "/images/48.png",

    },
    {
        id: 19,
        nombre: "Nutella",
        descripcion: "Bizcochuelo relleno de nutella",
        precio: 1500,
        img: "/images/49.png",

    },    {
        id: 20,
        nombre: "Menta y cream",
        descripcion: "Bizcochuelo relleno de crema de menta con butter cream de jengibre",
        precio: 950,
        img: "/images/50.png",

    },    {
        id: 21,
        nombre: "Spring Cake",
        descripcion: "Bizcochuelo relleno de crema pastelera de frambuesa con mermelada de arandanos",
        precio: 1250,
        img: "/images/51.png",

    },    {
        id: 22,
        nombre: "Violet",
        descripcion: " ",
        precio: 1200,
        img: "/images/52.png",

    },    {
        id: 23,
        nombre: "Choco pasión",
        descripcion: "",
        precio: 950,
        img: "/images/53.png",

    },     {
        id: 24,
        nombre: "Carrot cake",
        descripcion: "",
        precio: 1200,
        img: "/images/54.png",

    },  {
        id: 25,
        nombre: "Torta Alfajor",
        descripcion: "",
        precio: 1300,
        img: "/images/55.png",

    },
    {
        id: 26,
        nombre: "Chajá",
        descripcion: "",
        precio: 1400,
        img: "/images/56.png",

    },  {
        id: 27,
        nombre: "Coffee Cake",
        descripcion: "",
        precio: 1200,
        img: "/images/57.png",

    },
    {
        id: 28,
        nombre: "Torta Salchichón de chocolate",
        descripcion: "",
        precio: 1300,
        img: "/images/58.png",

    },
    {
        id: 28,
        nombre: "Laberinto",
        descripcion: "",
        precio: 1300,
        img: "/images/59.png",

    },
    {
        id: 29,
        nombre: "Valentin's cake",
        descripcion: "",
        precio: 1200,
        img: "/images/60.png",

    },
    {
        id: 30,
        nombre: "Chocotorta con Ferrero Rocher",
        descripcion: "",
        precio: 1500,
        img: "/images/61.png",

    },

];


// ----- Chquear carrito en Storage ----- //
let carrito= chequearCarritoEnStorage ();

console.log("contenido del carrito: ", carrito);
dibujarTabla(carrito);

// ----- Declaración de funciones  -----//

function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
    console.log("contenido en chequear Carrito en ls ", contenidoEnStorage);

    if (contenidoEnStorage) {
        let array = [];
        for (let i = 0; i < contenidoEnStorage.length; i++) {
            console.log("indices del array: ", contenidoEnStorage[i].nombre);
            array.push(new Cake (contenidoEnStorage[i]));
          }
        console.log("array: ", array);
        return array;
    }
    return [];
}


// ----- Imprimir productos en el HTML ----- //
for (let cake of cakes) {
    $("#cuerpo").append(`
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
            <img src="${cake.img}" id="" class="card-img-top img-fluid" alt="">
            <h2 class="card-title">${cake.nombre}</h2>
            <h5 class="card-subtitle mb-2 text-muted">${cake.descripcion}</h5>
            <p class="card-text">$${cake.precio}</p>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="agregar${cake.id}" type="button" onclick="agregarCarrito(${cake.id})" class="btn btn-dark"> Agregar </button>
            </div>
        </div>
    </div>
    `);
}


// ----- Carrito ----- //
// ----- Tabla del carrito ----- //
function dibujarTabla(carrito) {
    let precioTotal;

    if (carrito) {
      precioTotal = carrito.reduce(
        (total, elemento) => total + elemento.precioTotal,
        0
      );
    }
  
    $("#carro").empty();
    $("#carro").append(`
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
    `);
  
    for (let cake of carrito) {
      $("#bodyTabla").append(`
              <tr>
                  <th scope="row">1</th>
                  <td>${cake.nombre}</td>
                  <td>${cake.cantidad}</td>
                  <td>$${cake.precioTotal}</td>
                  <td><button id="eliminar${cake.id}" type="button" class="btn btn-dark">Eliminar</button></td>
              </tr>
        `);
  
      $(`#eliminar${cake.id}`).on("click", () => {
        eliminarDelCarrito(cake.id);
      });
      console.log("se agrego al carrito", cake.nombre);
    }
}

// ----- Agregar al carrito ----- //
function agregarCarrito(id) {

    let cake = carrito.find((cake) => cake.id === id);

    console.log(
      `Cake encontrado con find en el array del carrito: ${cake}`
    );
    if (cake) {
      console.log(cake);
  
      let index = carrito.findIndex((element) => {
        if (element.id === cake.id) {
          return true;
        }
      });
      console.log(
        `Indice de la cake agregado ${cake.nombre} en el carrito: ${index}`
      );
      console.log("Carrito[index]: ", carrito[index]);
      console.log("Carrito: ", carrito);
      carrito[index].cantidad++;
      carrito[index].actualizarPrecio();
      console.log(
        "funcion actualizar precio: ",
        carrito[index].actualizarPrecio()
      );
    } else {
    
      cake = cakes.find((cake) => cake.id === id);
      let nuevoCake = new Cake(cake);
      nuevoCake.cantidad = 1;
  
      carrito = chequearCarritoEnStorage();
      console.log(`carrito ${carrito}`);
      carrito.push(nuevoCake);
      console.log("carrito por primera vez ", carrito);
    }
  
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));

    let carritoEnLS = chequearCarritoEnStorage();
    dibujarTabla(carritoEnLS);
}

// ----- Eliminar al carrito ----- //
function eliminarDelCarrito(id) {
    console.log("entre en eliminarDelCarrito");
    let carrito = JSON.parse(localStorage.getItem("carritoEnStorage"));
    console.log(`carrito en eliminar storage ${carrito}`);

    let cake = carrito.find((cake) => cake.id === id);
    console.log(`cake devuelto en eliminar del carrito: ${cake.nombre}`);
  
    let index = carrito.findIndex((element) => {
      if (element.id === cake.id) {
        return true;
      }
    });

    if (cake.cantidad > 1) {
      console.log(`cantidad disponible: ${cake.cantidad}`);
  

      console.log(`index de la cake: ${index}`);
      console.log(`Cantidad previa de la cake: ${carrito[index].cantidad}`);
      console.log(`Objeto de la cake: ${carrito[index]}`);
      carrito[index].quitarCantidadDelStock();
      carrito[index].actualizarPrecio();
      console.log(
        `El precio de la cake ${carrito[index].nombre} es de ${carrito[index].precioTotal} y su cantidad es ${carrito[index].cantidad}`
      );
    } else {
    
      carrito.splice(index);
  
      if (carrito.lenght === 0) {
        carrito = [];
      }
    }
  

    localStorage.setItem("carritoEnStorage", carrito);
    let carritoEnStorage = chequearCarritoEnStorage();
    dibujarTabla(carritoEnStorage);
}


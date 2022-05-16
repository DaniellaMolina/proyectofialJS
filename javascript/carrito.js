  // Si existe me guarda en la variable, sino lo deja vacio.
let carrito = JSON.parse(localStorage.getItem("carritoEnStorage")) || [];
console.log(carrito);
dibujarTabla(carrito);

// ----- Imprimir productos en el HTML, convertir un archivo json a datos javascript----- //
for (let cake of cakes ) {
  $("#cuerpo").append(`
            <div class="card text-center" style="width: 15rem; margin:1rem;">
            <div class="card-body">
                <img src="${cake.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title h3">${cake.nombre}</h2>
                <p class="card-text">$${cake.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${cake.id}" type="button" onclick="agregarCarrito(${cake.id})" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>
        `);
} 

for (let cake of macarons) {
  $("#cuerpo2").append(`
            <div class="card text-center" style="width: 15rem; margin:1rem;">
            <div class="card-body">
                <img src="${cake.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title h3">${cake.nombre}</h2>
                <p class="card-text">$${cake.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${cake.id}" type="button" onclick="agregarCarrito(${cake.id})" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>
        `);
} 

for (let cake of te) {
  $("#cuerpo3").append(`
            <div class="card text-center" style="width: 15rem; margin:1rem;">
            <div class="card-body">
                <img src="${cake.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title h3">${cake.nombre}</h2>
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
  if (carrito.length === 0) {
    $("#carro").empty();
    return;
  }

  let precioTotal = 0;
  precioTotal = calcularPrecioTotal(carrito);

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
                      <td> <button id="comprar" class="btn btn-dark" type="button" data-toggle="modal" data-target="#comprarModal" onclick="location.href='../html/comprar.html'">Comprar</button><td> 
                  </tr>

                  </tbody>
              </table>
        `
        );

  for (let cake of carrito) {
    $("#bodyTabla").append(`
                  <tr>
                      <th scope="row"><img src=${cake.img} class="shopping-cart-image"></th>
                      <td>${cake.nombre}</td>
                      <td>${cake.cantidad}</td>
                      <td>$${cake.precio}</td>
                      <td><button id="eliminar${cake.id}" type="button" class="btn-group btn-dark">Eliminar</button></td>
                  </tr>
            `);     

    $(`#eliminar${cake.id}`).on("click", () => {
      eliminarDelCarrito(cake.id);
    });

    $(`#eliminar${cake.id}`).on("click", () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El producto fue quitado",
        showConfirmButton: false,
        timer: 1500,
      });
    });

  }

  
}


// ----- Precio Total ----- //
function calcularPrecioTotal(data) {
  let precioTotal = 0;

  data.forEach((element) => {

    precioTotal = precioTotal + element.precio *element.cantidad; 
  }); 

  return precioTotal;

}



// la propiedad cantidad si queres la podes rear directamente en el array de tortas
// ----- Agregar al carrito ----- //
function agregarCarrito(id) {
  //find cake in array
  const cakeExisteEnCarrito = carrito.some((e) => e.id === id);

  //me fijo si cake tiene la propiedad cantidad. Con ! consulto si es false.
  if (!cakeExisteEnCarrito) {
    //Si no lo tiene...
    //busco el cake en el array de tortas
    const cake = cakes.find((e) => e.id === id);
    //agrego el cake al carrito con nueva propiedad de cantidad
    const cakeComplete = {...cake, cantidad: 1};
    //agrego el cake completo al carrito
    carrito.push(cakeComplete);

   
    //Dibujo la tabla
    dibujarTabla(carrito);
    //guardar en storage
    guardarAlLocal("carritoEnStorage", carrito);
    //return vacio para que pare la funcion
    return Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto fue agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
      });;
    
  }

  //Si ya lo tiene...
  for (let cake of carrito) {
    //Si el id del cake que estoy buscando es igual al id del cake que estoy recorriendo
    if (cake.id === id) {
      //Aumento la cantidad
      cake.cantidad++;
      //Calculo el precio total
      cake.precioTotal = cake.precio * cake.cantidad;
      //Vuelvo a dibujar la tabla
      dibujarTabla(carrito);
      //Guardo en el localStorage
      guardarAlLocal("carritoEnStorage", carrito);
      return 	Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto fue agregado al carrito correctamente",
        showConfirmButton: false,
        timer: 1500,
      });;
    }
  }


}


// ----- Eliminar al carrito ----- //
function eliminarDelCarrito(id) {
  //Pequeña logica que borra un elemento del array. Con el ! Le digo que me saque y me deje los elementos que no tengan el id con el que comparo.
  carrito = carrito.filter((cake) => cake.id !== id);

  if (carrito.length === 0) {
    localStorage.removeItem("carritoEnStorage");
  }
  guardarAlLocal("carritoEnStorage", carrito);
  dibujarTabla(carrito);
}


// ----- Vaciar al carrito ----- //
const vaciarCarrito = document.getElementById ("vaciarCarrito")
vaciarCarrito.addEventListener ("click", () => {
  carrito = []
  
  dibujarTabla(carrito);
  eliminarAlLocal ("carritoEnStorage", carrito);
})

// ----- Vaciar el Storage ----- //
function eliminarAlLocal(key, data) {
  return localStorage.clear(key, JSON.stringify(data));
}

// ----- Guardar el Storage ----- //
function guardarAlLocal(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}






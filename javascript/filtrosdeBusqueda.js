// --- -Buscar ---//
function filtrarBusqueda(e) {
	e.preventDefault();


	let ingreso = document.getElementById("#busqueda").value.toLowerCase();
	let filtro = cakes.filter((elemento) => elemento.nombre.toLowerCase().includes(ingreso));
	console.log(filtro);
	imprimirProductosEnHTML(filtro);
}


let btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarBusqueda);

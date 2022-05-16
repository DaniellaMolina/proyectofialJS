// --- -Buscar ---//
function filtrarBusqueda(e) {
	e.preventDefault();

	let ingreso = document.getElementById("#busqueda").value.toLowerCase();
	let filtro = cake.find((elemento) => elemento.nombre.toLowerCase().includes(ingreso));
	console.log(filtro);
	cakes(filtro);
}


let btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarBusqueda);

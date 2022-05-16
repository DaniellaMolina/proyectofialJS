    document.getElementById ('terminos').onclick = async function () {
    const { value: accept } = await Swal.fire({
      title: 'Terminos y condiciones',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder:
        '¿Estas de acuerdo con los terminos y condicones?',
      confirmButtonText:
        'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'You need to agree with T&C'
      }
    })
  
  }

document.getElementById ('finalizar').onclick = async function () {

  let timerInterval
Swal.fire({
  title: 'Procesando sus datos!',
  html: 'Espere <b></b> unos segundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('Procesando sus datos')

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Su compre fue realizada con éxito. Gracias por elegirnos.",
      showConfirmButton: false,
      timer: 2000,
    });;

    
  } else {
    eliminarAlLocal ("carritoEnStorage", carrito);
  }

  return location.href='../index.html';

})

}

document.getElementsByClassName ('.fa-user-circle ').onclick = async function () {

  
}

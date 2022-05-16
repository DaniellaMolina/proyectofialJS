document.addEventListener('submit', (e)=>{
    if(e.target.matches('#contactoForm'))
    e.preventDefault()
  })
  const fValidar=(e)=>{
    let $cMensaje=document.getElementById(`${e.target.id}Div`),
        $elemento=document.getElementById(e.target.id),
        isValido=e.target.validity.valid,
        mensaje=e.target.title,
        textInput=e.target.value
    if(e.target.id==='aContacto')(textInput.length>=5 && textInput.length<=255)? isValido=true: isValido=false;
    console.log(isValido,textInput,textInput.length)
    if(isValido){
      $cMensaje.innerHTML=``
      $elemento.classList.add('bValid')
      $elemento.classList.remove('nValid')
      
    } else {
      $cMensaje.innerHTML=`<h6 class="smallMsj">${mensaje}</h6>`
      $elemento.classList.add('nValid')
      $elemento.classList.remove('bValid')
      // remueve classe hidden 
    }
  }
  
  document.addEventListener('keyup',(e)=>{
    if(e.target.matches('.inputContacto')) fValidar(e)
  })
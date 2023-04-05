function ativa(elemento){
  const arrawtext = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  
  arrawtext.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i )
    
  })
}

const titulo = document.querySelector('.digitando')
ativa(titulo);
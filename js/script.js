const navegacao = document.querySelector('nav#navegacao');

function abrirNavegacao(id,estado){
  document.querySelector(`${id}`).addEventListener('click', () =>{
    navegacao.style.display = `${estado}`;

  })
}

abrirNavegacao('#navopen', 'block')
abrirNavegacao('#navclose', 'none')


const navegacao = document.querySelector('nav#navegacao');

function abrirNavegacao(){
  document.getElementById('navopen').addEventListener('click', () =>{
    navegacao.style.display = 'block'
  })
}

abrirNavegacao()

function fecharNavegacao(){
  document.getElementById('navclose').addEventListener('click', () =>{
    navegacao.removeAttribute('style')})
}

fecharNavegacao()
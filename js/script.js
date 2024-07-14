const navegacao = document.querySelector('nav#navegacao');

function abrirNavegacao(id,estado){
  document.querySelector(`${id}`).addEventListener('click', () =>{
    navegacao.style.display = `${estado}`;

  })
}

abrirNavegacao('#navopen', 'block')
abrirNavegacao('#navclose', 'none')

//------------------------------

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2,5 seconds
}

//------------------------------


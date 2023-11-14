function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio);
   if(elemento === null){
      alert('Elemento nao encontrado');
   }
   if (elemento && elemento.localName === 'audio'){
   elemento.play();
   }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrutura de repeticao - Enquanto 
for( let contador = 0; contador < listaDeTeclas.leight; contador++){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList [1];
   const idAudio = `#som_ ${instrumento}`;

   console.log (idAudio);

   tecla.onclick = function(){
      tocaSom(idAudio);
   };
   tecla.onkeydown = function(evento){
      console.log(evento.code);
      if(evento.code ==='Enter'|| evento.code ==='Space'){
      tecla.classList.add('ativa')
      }
   };
   tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
   };
   console.log(instrumento);
 console.log (contador);
}



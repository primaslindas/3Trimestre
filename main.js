function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');

//Estrutura de repetição - Enquanto 
for( let contador = 0; contador < listaDeTeclas.leight; contador++){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList [1];
   const idAudio = `#som_ ${instrumento}`;
   console.log (idAudio);

   tecla.onclick = function(){
      tocaSom(idAudio);
   };
   tecla.onkeydown = function(){
      tecla.classList.add('ativa');
   }
   tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
   }
   
 console.log (contador);
}



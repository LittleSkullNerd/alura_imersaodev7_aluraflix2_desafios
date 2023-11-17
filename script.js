var listaFilmes = []; 

function adicionarFilme(){
   var filmeFavorito = document.getElementById('filme').value
   var elementoListaFilmes = document.getElementById('listaFilmes')
   var urlFilme = filmeFavorito.toLowerCase();
   
   
   if (urlFilme.endsWith('.jpg') || urlFilme.endsWith('.jpeg') || urlFilme.endsWith('.png') || urlFilme.endsWith('.gif')) {
      listaFilmes.push(filmeFavorito);
      elementoListaFilmes.innerHTML = '';
     for (var i = 0; i < listaFilmes.length; i++){
       elementoListaFilmes.innerHTML += '<img src =' + listaFilmes[i] + '>';
     }
     document.getElementById('filme').value ='';
   }  else {
     alert('URL inválida! Por favor, insira o endereço de uma imagem!')
   }
   
 
 }
function redirecionarTrailer(){
  var linkTrailer = document.getElementById('trailer').value;
  window.open(linkTrailer, '_blank', 'noopener');
}
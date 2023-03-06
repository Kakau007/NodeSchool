

function Qual(tamanho) {
 // console.log(element.message);
  if(tamanho.message.length< 50){
	  return tamanho.message;
	}
}

function simpler(tamanho){
	return tamanho.message;
}


module.exports = function getShortMessages(mensagem) {
	return mensagem.filter(Qual)
				   .map(simpler);

}
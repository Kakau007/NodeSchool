module.exports = function checarUsuario(usuariosValidos) {
    return function(usuariosEnviados) {
      return usuariosEnviados.every(function(elemento){
          
          return (usuariosValidos.some(
              function(usuario){
              
              return elemento.id === usuario.id;
              }
          ));
          
      }
      )
    };
  }


 

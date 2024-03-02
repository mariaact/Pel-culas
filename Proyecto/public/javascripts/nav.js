window.addEventListener("scroll", function(){

    var scrollPosotion = window.scrollY;
    var fondoNegro = document.getElementById('contenedorFondoNegro');
    var altura = window.innerHeight * 0.1;

    console.log(scrollPosotion + '---' + altura)
    if(scrollPosotion >=  600){
        fondoNegro.style.display = 'block';
    } else{
        fondoNegro.style.display = 'none';
    }

});

document.addEventListener('DOMContentLoaded', function () {
    var btnMostrarDivUser = document.querySelector('.btn-User');
    var divSobresaliente = document.getElementById('navbarUsuario');

  
    btnMostrarDivUser.addEventListener('click', function (event) {
        console.log("estoy en el perfil ");
      event.preventDefault(); 
      if (divSobresaliente.style.display === 'block') {
        divSobresaliente.style.display = 'none'; 
      } else {
        divSobresaliente.style.display = 'block'; 
      }
    });
  });
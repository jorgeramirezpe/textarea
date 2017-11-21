document.addEventListener("DOMContentLoaded", function() {
    console.log("Estoy listo!!");

    var form = document.querySelectorAll("form");

    form[0].addEventListener("submit", function(event){
      event.preventDefault();
      console.log("Enviando");
    });

    console.log(form);
})

// contenedor Modal
var modal = document.getElementById("popUpGame");

// boton de ayuda, el que despliega el modal
var btn = document.getElementById("btnHelp");

// referencia al boton cerrar
var span = document.getElementsByClassName("close")[0];

// apretamos abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// apretamos cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// cuando apretamos en cualquier lugar por fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var contraseña2 = document.getElementsByClassName("input")[7];
contraseña2.addEventListener("blur",function () {
  var contraseña1 = document.getElementsByClassName("input")[6];
  if (contraseña1.value == contraseña2.value) {
    document.getElementById("button").removeAttribute("disabled");
    alert("Las contraseñas no coinciden");
  }
  else if (contraseña1.value != contraseña2.value){
    document.getElementById("button").setAttribute("disabled", true)
  }
})

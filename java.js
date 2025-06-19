const autos = {

  "Mustang": "El Ford Mustang representa la esencia del muscle car estadounidense, combinando potencia bruta con un diseño icónico desde los años 60.",
  "Ferrari": "Ferrari encarna la máxima expresión de lujo, velocidad y pasión en el automovilismo, con un legado de campeonatos y elegancia inigualable." ,
  "Porsche": "Porsche es sinónimo de precisión alemana y rendimiento deportivo, con un estilo atemporal que ha definido a generaciones.",
  "Lamborghini": "Lamborghini impresiona con su diseño audaz y futurista, ofreciendo una experiencia de conducción visceral y un rendimiento extremo.",
  "Bugatti": "Bugatti simboliza la cúspide de la ingeniería automotriz, combinando una velocidad deslumbrante con una artesanía exquisita."

};

function detalles(nombre) {

  document.getElementById("modalTitle").innerText = nombre;
  document.getElementById("modalBody").innerText = autos[nombre];
  const modal = new bootstrap.Modal(document.getElementById("infoModal"));
  modal.show();

  

}


function validar() {

    let valido = true
  
    let mensajeError = ''
  
  
    if (document.getElementById('nombre-input').value == '') {
  
      valido = false
  
      mensajeError = mensajeError + 'el campo nombre está vacío\n'
  
    }
  
    if (!isNaN(parseInt(document.getElementById('nombre-input').value))) {
  
      valido = false
  
      mensajeError = mensajeError + 'el campo nombre no puede contener numeros\n'
  
    }
  
  
    if (document.getElementById('apellidos-input').value == '') {
  
      valido = false
  
      mensajeError = mensajeError + 'el campo dirección está vacío\n'
  
    }
  
  
    if (document.getElementById('telefono-input').value == '') {
  
      valido = false
  
      mensajeError = mensajeError + 'el campo telefono está vacío\n'
  
    }
  
    let expresionRegular = /^(6|7|8|9)[0-9]{8}$/
  
    if (!expresionRegular.test(document.getElementById('telefono-input').value)) {
  
      valido = false;
  
      mensajeError += 'el numero de telefono es incorrecto\n'
  
    }
  
  
    if (document.getElementById('email-input').value == '') {
  
      valido = false
  
      mensajeError = mensajeError + 'el campo email está vacío\n'
  
    }
  
    var email = /^(.+@.+..+)$/;
  
    if (!email.test(document.getElementById('email-input').value)) {
  
      valido = false;
      mensajeError = mensajeError + 'Email no valido\n';
  
    }
  
    alert(mensajeError)
  
  }



  ////////// API google maps //////////

  function inicializarMapa() {
    // configuración inicial del mapa
    var ubicacionInicial = { lat: 36.7212, lng: -4.4217 };

    // opciones
    var opcionesMapa = {
        zoom: 12,
        center: ubicacionInicial,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // crear mapa
    var mapa = new google.maps.Map(document.getElementById('map'), opcionesMapa);

    // marcador
  var marcador = new google.maps.Marker({
    position: ubicacionInicial,
    map: mapa,
    title: 'MasterD Málaga'
});
}


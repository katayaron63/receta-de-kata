function obtenerDatos()  {
    $.ajax('https://62b7c0fbf4cb8d63df54c235.mockapi.io/receta',{
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice=0;indice<data.length;indice++) {
                var receta = data[indice].receta
                var precio = data[indice].precio
                var avatar = data[indice].avatar
                var filaTAbla = '<tr>'
                                +  '<td class="prc-25"'+receta+'</td>'
                                +   '<td class="prc-25">'+precio+'</td>'
                                +   '<td class="prc-25"><img src="https://comidasparaguayas.com/wp-content/uploads/2019/11/empanada-de-carne-paraguaya_700x465.jpg"'+avatar+'" alt="" style="width: 131px"></td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tablaempanada").append(filaTAbla)                
            }
        }
    });
}
function validarDatos() {
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    edad = parseInt(document.getElementById("edad").value)
    direccion = document.getElementById("direccion").value
    mensaje = "nombre:" + nombre + "apellido:" + apellido + "edad:" + edad + "direccion:" + direccion
    errores = 0
    if(nombre.length <3){
        document.getElementById("errorNombre").style.display="block"
        errores++
    }else{
        document.getElementById("errorNombre").style.display="none"
    }
    if(edad<18){
        document.getElementById("errorEdad").style.display="block"
        errores++

    }else{
        document.getElementById("errorEdad").style.display="none"
    }
}

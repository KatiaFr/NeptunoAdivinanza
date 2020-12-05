//const lastResult = document.getElementsByClassName('lastResult');
const obtenerResultado = document.getElementById('obtenerResultado'); //<button submit="respondiendo()" class="obtenerResultado">Enviar respuesta</button>


var respuestaCorrecta = "Urano"; 
const intentosMax = 4;
var acierto = false;
var contadorDeIntentos = 1;


function respondiendo (){

        var valorRespondido =  document.getElementById('textBox').value;

if (contadorDeIntentos <= intentosMax)
{
     if (valorRespondido === respuestaCorrecta)
     {
        acierto = true;
        alert("¡Respondiste bien! Ahora la página se volverá a cargar");
        console.log("¡Respondiste bien! Ahora la página se volverá a cargar");
        location.reload();
      }

      else (valorRespondido !== respuestaCorrecta)
        { (acierto = false) 
        }
             switch(contadorDeIntentos)
                {     case 1:
                        
                        document.getElementById("tusIntentos1").innerHTML = "Ingresaste:" + valorRespondido + " y ese fue tu intento número " + contadorDeIntentos; 
                        console.log(contadorDeIntentos);
                        console.log(valorRespondido +"resp incorrecta 1");
                        break;
                 case 2:

                        document.getElementById("tusIntentos2").innerHTML = "Ingresaste:" + valorRespondido + " y ese fue tu intento número " + contadorDeIntentos; 
                        document.getElementById("pistas1").innerHTML =  "Te doy una pista: Mercurio, Venus, Tierra, son los primeros 4 planetas y el que buscamos es el séptimo" ; 
                        console.log(contadorDeIntentos);
                        console.log(valorRespondido + "respuesta incorrecta 2");
                        break;
        
                case 3:
                           document.getElementById("tusIntentos3").innerHTML = "Ingresaste:" + valorRespondido + " y ese fue tu intento número " + contadorDeIntentos; 
                         document.getElementById("pistas2").innerHTML =  "Otra pista pero ¡ojo! último INTENTO: Este planeta fue descubiero en el año 1781" ; 
                         
                         alert("Te queda UN INTENTO");
                          console.log(contadorDeIntentos);
                           console.log(valorRespondido + "respuesta incorrecta 3" );
                           break;
                 }
                 contadorDeIntentos++;
      } 
      else  {       
             alert('Perdiste. Recarga la página o apreta en volver a jugar');
             location.reload();

            }

}

reset = () =>{
  location.reload()
}

         //for else { actualizarIntentos ()     };

/*
function actualizarIntentos () {
    if (valorRespondido !== respuestaCorrecta); {
         function crearRespuestaIncorrecta (){
            let tusIntentos = document.getElementById('tusIntentos');

            let algo = document.createElement("h5");
            let algo2 = document.createTextNode(valorRespondido + " no es correcto ");
                    
            algo.appendChild(algo2);
            tusIntentos.appendChild(algo);

                    contadorDeIntentos ++;
       } 
       
}crearRespuestaIncorrecta ();
console.log("ni ahí");

}

/* cómo reemplazar un for por un for each
myArray.forEach(function (value) {
  console.log(value);
});*/
obtenerResultado.addEventListener("click", respondiendo);



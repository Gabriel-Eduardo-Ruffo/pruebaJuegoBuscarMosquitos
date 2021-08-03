//Las referencias de las variables que hace este script estan en game.js
//Si se mueve el mouse sobre el div magnify
document.addEventListener("mousemove",function(e){

    //cuando entramos a la imagen.
    if(!native_width && !native_height)
    {
        //creamos el objeto imagen base. imagen original.
        var image_object = new Image();
        image_object.src = imgBase.src;

        native_width = image_object.width;
        native_height = image_object.height;
    }else{          
        lupaX = e.pageX;
        lupaY = e.pageY;
        //ajuste de la imagen de la lupa con respecto al zoom del lente
        lupa.style.left = lupaX -35 +'px';
        lupa.style.top = lupaY - 86 +'px'; 
        //coordenadas X Y y el offset de la imagen ampliada
        var mx = e.pageX - imageGame.getBoundingClientRect().left;
        var my = e.pageY - imageGame.getBoundingClientRect().top;

        //Verificica que este dentro de la imagen para mostrar o no la lupa y que estemos jugando y no pausado o mostrando un cartel
        if((mx < imageGame.getBoundingClientRect().width-5 && my < imageGame.getBoundingClientRect().height-5 && mx > 5 && my > 5) && gameOn && startGame)
        {
            document.getElementById('body').style.cursor = 'none';//ocultamos
            lupa.style.display = 'block';//mostramos la lupa
            imgZoomDiv.style.display = 'block';
        }else{

        }

        //Si esta visible el contenedor large....Se muestra la imagen ampliada
        if(window.getComputedStyle(imgZoomDiv)['display'] != 'none')
        {
            //La imagen ampliada se tiene que mover para emular el efecto de lupa.
            //Se toma de referencia la imagen original (no ampliada)
            //se calcula su tamanio y se le resta el tamanio de la imagen ampliada. 
            //El 1.5 es la velocidad que tendra de movimiento la lupa con respecto a la imagen ampliada.
            var rx = (Math.round(((mx/imgBase.width*native_width)*1) - (imgZoomDiv.clientWidth)+50)*-1);
            var ry = (Math.round(((my/imgBase.height*native_height)*1) - (imgZoomDiv.clientHeight)+50)*-1);
            var bgp = rx + "px " + ry + "px";

            //posicion el centro de la lupa (vidrio) con el puntero
            var px = mx - imgZoomDiv.clientWidth/2;
            var py = my - imgZoomDiv.clientHeight/2;
            
            //Se muestra la imagen y se va ajustando la posicion de la imagen de fondo (se mueve la imagen ampliada emulando el zoom de la lupa)
            imgZoomDiv.style.left = px +'px';
            imgZoomDiv.style.top = py +'px';
            imgZoomDiv.style.backgroundPosition=bgp;
        }
    }
});

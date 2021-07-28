
//armar popup para mostrar mensajes e imagenes de ganar, encontrado objeto y de perder
//armar logica para contador de objetos
//armar logica para que no se repitan los juegos (guardar en localstorage las pantalla jugadas)
//armar seteo de juegos(cantidad de pantallas)(cantidad de objetos a encontrar)(posicion de objetos)


//formato y caracteristica de juego
/*
ejemplo

arrayObjetosBuscar = [posX,posY,divRadioClick]------es el div que deveremos poner para que se le pueda hacer click
    setear los divRadioClick para que tengan un estado de clickeados, visibles
lista de imagenes para los objetos a buscar
lista de imagenes para los objetos encontrados (para la barra contadora de objetos encontrados)
lista de imagenes para mostrar los mensajes de encontraste algo.
lista de imagenes para mostrar los mensajes de encontraste ganaste.
lista de imagenes para mostrar los mensajes de encontraste perdiste.
*/

/*****************************************************************************************************/
//variable para crear y usar un localStorage
let myLocalStorage = 'games';
//variables para iniciar el juego.
let numGames;//cantidad maxima de plantillas a jugar
let arrayTotalsGames=[];//todos las plantillas posibles, se pone en un array para luego comparar con el localStorage
let arrayTotalGamesPossible=[];//resultado de los juegos posibles
let selectedGame//juego seleccionado aleatoriamente, dependiendo de la info del localStorage






/****************************************************************************************************/
//variables para mostrar distintos mensajes del juego (el juego consta de 2 niveles)

let messageIni   = "¡Juntos podemos prevenir las enfermedades transmitidas por mosquitos!"+"<br>"+"Detectá dónde están los Aedes aegypti y encontrá sus posibles criaderos para construir entre todos un Mundo Sano.";
let messageLvl1  = "Al estar al aire libre, es necesario usar repelente y renovarlo cada 4 horas. Además, es importante usar ropa clara y, en lo posible, que cubra brazos y piernas. También en casa podemos cuidarnos: colocando mosquiteros en puertas y ventanas y utilizando espirales o tabletas insecticidas en el interior. ¡Encontrá los mosquitos y evitá que te piquen!";
let messageLost1 = "¡Intentá de nuevo y encontrá todos los mosquitos!";
let messageLvl2  = "Los mosquitos depositan sus huevos en recipientes o superficies en los que se acumula agua. ¡Detectá los posibles criaderos y sumá tu aporte a la prevención de dengue, chikungunya, zika y fiebre amarilla!";
let messageLost2 = "Intentá de nuevo! Para prevenir el Dengue y otras enfermedades transmitidas por mosquitos es necesario prestar atención a todos los posibles criaderos. ¡Encontralos!";
let messageWin   = "¡Felicitaciones! Ya sabés cómo prevenir el Dengue y otras enfermedades transmitidas por mosquitos. ¡Construyamos juntos un Mundo Sano!";

/*****************************************************************************************************/
//variables para la logica de ejecucion del juego

let gameOn = false;
let mosquitoCount = 0;
let mosquito1 = false;
let mosquito2 = false;
let mosquito3 = false;
let mosquito4 = false;
let mosquito5 = false;
let mosquito6 = false;
let mosquito7 = false;
let mosquito8 = false;
let mosquito9 = false;




/*****************************************************************************************************/
//variables para la referencias de las imagenes del juego

//array con los nombres de todas las imagenes base del juego. Tambien puede ser una imagen que este online.
let nameImageBase = ['../img/game/plantilla1.jpg','../img/game/plantilla2.jpg'];
//array con los nombres de todas las imagenes zomm del juego. Tambien puede ser una imagen que este online.
let nameImageBaseZoom = ['../img/game/plantilla1zoom.jpg','../img/game/plantilla2zoom.jpg']

/*****************************************************************************************************/
//variables para la referencias de los lugares a descubrir

let objectFindLvl1=[
    {
        objectFind: 1,
        objectPosX: 100,
        objectPosY: 100
    }
];







//todo lo que esta en este bloque tiene que ir en un onLoada y se tiene que armar la logica de inicio de todos los script y componentes del juego

//tiene que tener la misma cantidad de plantillas base y de plantillas zoom para iniciar el juego.
if(nameImageBase.length == nameImageBaseZoom.length){
    initMainGame();
}else{
    console.log('Error, no tiene la misma cantidad de plantillas base y de plantillas zoom')
}


function initMainGame(){
    //dependiendo la cantidad de plantillas, son la cantidad de juegos posibles
    numGames = nameImageBase.length;   
    for(let i=0; i<numGames; i++){
        arrayTotalsGames.push(i);//guardamos en este array el total de juegos posibles. Sera para comparar despus con los juegos jugados del localStorage        
    }

    //verificamos que exista un localStorage sobre este juego.
    if(localStorage.getItem(myLocalStorage)){
        //accedemos a la info guardada en el localStorage y despues la pasamos a un array
        let tempSelectedLocalStorageGames = localStorage.getItem(myLocalStorage);
        let tempSelectedGames = [];
        tempSelectedGames = tempSelectedLocalStorageGames.split(',');
        tempSelectedGames.pop();
        //verificamos cuantos juegos hay hechos de la totalidad de plantillas
        //si se hicieron todos borramos la info del localStorage y empezamos de nuevo
        if(tempSelectedGames.length >= numGames){
            console.log('reiniciamos');
            localStorage.removeItem(myLocalStorage);
            selectedGame = (Math.floor(Math.random() * numGames));//aleatoriamente se selecciona la plantilla a ser jugada.
            
        }else{  
            console.log('buscamos un numero que no se repita');           
            selectedGame = buscar();

        }
    }else{
        console.log('iniciamos por que no existe un localStorage');
        selectedGame = (Math.floor(Math.random() * numGames));//aleatoriamente se selecciona la plantilla a ser jugada.

    }

    temp = localStorage.getItem(myLocalStorage) + selectedGame + ',';
    localStorage.setItem(myLocalStorage, temp); //creamos un localStorage para guardar el juego

    console.log('localStorage '+localStorage.getItem(myLocalStorage))
    console.log('juego elejido '+selectedGame)
}

function buscar(){
    console.log('buscamos');
    //accedemos a la info guardada en el localStorage y despues la pasamos a un array
    /*
    let tempSelectedLocalStorageGames = localStorage.getItem(myLocalStorage);
    let tempSelectedGames = [];
    tempSelectedGames = tempSelectedLocalStorageGames.split(',');
    tempSelectedGames.pop();
    console.log(tempSelectedGames)


    Math.floor(Math.random() * numGames);
    for(let i = 0; i<numGames-1;i++){
        console.log('I '+i+'::'+tempSelectedGames[i])
        console.log('A '+a)
        if(tempSelectedGames[i] != a){
            return a;
        }
    }
    buscar();
    */
}




window.addEventListener('load', function(){
    
    console.log('inicio juego');
//------INICIO DEL JUEGO MUESTRA POPUP INICIAL--------
    //blur de fondo para los popups
    let blurGame = document.getElementById('blurBackground');
    blurGame.style.display = 'block';

    document.getElementById('initMessageGame').style.display = 'block';
    let messagePopUpGame = document.getElementById('message-game-p');
    messagePopUpGame.innerHTML = messageIni;

    document.querySelector('#btnContinue').addEventListener('click', ()=>{
        document.getElementById('initMessageGame').style.display = 'none';
        blurGame.style.display = 'none';
    });
    
//------PANTALLA PRINCIPAL DEL JUEGO-------------------

//se aprieta el boton jugar
    document.querySelector('#btn_Play').addEventListener('click', ()=>{
        //referencia al script time.js a la funcion startClock para que comience el conteo del reloj
        startClock();
    });



//contenedor de div para clickear mosquito
    let imageFind1 = document.querySelector('#objeto-1');
    let imageFind2 = document.querySelector('#objeto-2');
    let imageFind3 = document.querySelector('#objeto-3');
    let imageFind4 = document.querySelector('#objeto-4');
    let imageFind5 = document.querySelector('#objeto-5');
    let imageFind6 = document.querySelector('#objeto-6');
    let imageFind7 = document.querySelector('#objeto-7');
    let imageFind8 = document.querySelector('#objeto-8');
    let imageFind9 = document.querySelector('#objeto-9');
//imagen de mosquito que se mostrara al ser encontrado (en la plantilla del juego)
    let imageMosquito1 = document.querySelector('#img_mosquito1');
    let imageMosquito2 = document.querySelector('#img_mosquito2');
    let imageMosquito3 = document.querySelector('#img_mosquito3');
    let imageMosquito4 = document.querySelector('#img_mosquito4');
    let imageMosquito5 = document.querySelector('#img_mosquito5');
    let imageMosquito6 = document.querySelector('#img_mosquito6');
    let imageMosquito7 = document.querySelector('#img_mosquito7');
    let imageMosquito8 = document.querySelector('#img_mosquito8');
    let imageMosquito9 = document.querySelector('#img_mosquito9');
//imagen del mosquito encontrado (contador de mosquito)    
    let imageCount1 = document.querySelector('#object_Find-1');
    let imageCount2 = document.querySelector('#object_Find-2');
    let imageCount3 = document.querySelector('#object_Find-3');
    let imageCount4 = document.querySelector('#object_Find-4');
    let imageCount5 = document.querySelector('#object_Find-5');
    let imageCount6 = document.querySelector('#object_Find-6');
    let imageCount7 = document.querySelector('#object_Find-7');
    let imageCount8 = document.querySelector('#object_Find-8');
    let imageCount9 = document.querySelector('#object_Find-9');



    imageFind1.addEventListener('click',function(e){       
        if(mosquito1 == false){
            imageCount1.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito1.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito1 = true;
            //console.log('objeto1 encontrado');
            checkEndGame()
        }       
    });

    imageFind2.addEventListener('click',function(e){
        if(mosquito2 == false){
            imageCount2.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito2.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito2 = true;
            //console.log('objeto2 encontrado');
            checkEndGame()
        }        
    });
    imageFind3.addEventListener('click',function(e){
        if(mosquito3 == false){
            imageCount3.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito3.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito3 = true;
            //console.log('objeto3 encontrado');
            checkEndGame()
        }        
    });
    imageFind4.addEventListener('click',function(e){
        if(mosquito4 == false){
            imageCount4.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito4.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito4 = true;
            //console.log('objeto4 encontrado');
            checkEndGame()
        }        
    });
    imageFind5.addEventListener('click',function(e){
        if(mosquito5 == false){
            imageCount5.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito5.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito5 = true;
            //console.log('objeto5 encontrado');
            checkEndGame()
        } 
    });
    imageFind6.addEventListener('click',function(e){
        if(mosquito6 == false){
            imageCount6.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito6.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito6 = true;
            //console.log('objeto6 encontrado');
            checkEndGame()
        } 
    });
    imageFind7.addEventListener('click',function(e){
        if(mosquito7 == false){
            imageCount7.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito7.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito7 = true;
            //console.log('objeto7 encontrado');
            checkEndGame()
        } 
    });
    imageFind8.addEventListener('click',function(e){
        if(mosquito8 == false){
            imageCount8.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito8.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito8 = true;
            //console.log('objeto8 encontrado');
            checkEndGame()
        } 
    });
    imageFind9.addEventListener('click',function(e){
        if(mosquito9 == false){
            imageCount9.src = "./img/game/mosquitoEncontrado.png";
            imageMosquito9.src = "./img/game/mosquito2.png";
            mosquitoCount++;
            mosquito9 = true;
            //console.log('objeto9 encontrado');
            checkEndGame();
        } 
    });

    function checkEndGame(){
        if(mosquitoCount == 9){
            setTimeout(function () {
                alert('termino el primer nivel');
                mosquitoCount = 0;
                mosquito1 = false;
                mosquito2 = false;
                mosquito3 = false;
                mosquito4 = false;
                mosquito5 = false;
                mosquito6 = false;
                mosquito7 = false;
                mosquito8 = false;
                mosquito9 = false;
                imageCount1.src = "./img/game/mosquito.png";
                imageCount2.src = "./img/game/mosquito.png";
                imageCount3.src = "./img/game/mosquito.png";
                imageCount4.src = "./img/game/mosquito.png";
                imageCount5.src = "./img/game/mosquito.png";
                imageCount6.src = "./img/game/mosquito.png";
                imageCount7.src = "./img/game/mosquito.png";
                imageCount8.src = "./img/game/mosquito.png";
                imageCount9.src = "./img/game/mosquito.png";

            }, 1000);
        }
        
    }

});


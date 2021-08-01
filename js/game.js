
/*****************************************************************************************************/
//referencia al formulario Iframe html
//let formGame=document.querySelector('#formGame');
//let innerFormGame = formGame.parentNode;

/****************************************************************************************************/
//audios y musica del juego
let musicGame;
let selectGame;
let celebrationWinGame;

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
let startGame = false;
let gameOver = false;

let totalNumGames;
let actualGame = 1;

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
let refImageBase = ['./img/game/plantilla1.jpg','./img/game/plantilla2.jpg'];
//array con los nombres de todas las imagenes zomm del juego. Tambien puede ser una imagen que este online.
let refImageBaseZoom = ['./img/game/plantilla1zoom.jpg','./img/game/plantilla2zoom.jpg']

//imagen para la lupa
let refImgLupa = '../img/lupa.png';
//imagen para fondo popup
let refImgPopUp = '../img/marco.png';
//referencia fondo de la ventana
let refImgBackGround = '../img/background.jpg';
//referencia imagen para el reloj
let refImgClock = '../img/clock.png';

//referencia a la imagen blur
let blurGame;
//contenedor de popup
let popupGame;
//referencia al mensaje a ser mostrado
let messagePopUpGame;

/*****************************************************************************************************/
//Referencias al efecto de la lupa y las imagenes del fuego
//creamos variables para mover la imagen
let lupaX=0;
let lupaY=0;
//referencia al div que contiene la imagen
let lupa;
//referencia del div que contiene la imagen ampliada
let imgZoomDiv;
//referencia del div que contiene la imagen original
let imgBase;
//referencia a la imagen del juego
let imageGame;
//tamanio inicial de la imagen
let native_width = 0;
let native_height = 0;

/*****************************************************************************************************/
//variables para la referencias de los lugares a descubrir del NNIVEL 1 y del NIVEL 2
//Juego 1
let objectFindLvl1=[
    {
        objectFind: 1,
        objectPosY: 13,
        objectPosX: 40,
        size: 5
    },
    {
        objectFind: 2,
        objectPosY: 22,
        objectPosX: 17,
        size: 5
    },
    {
        objectFind: 3,
        objectPosY: 31,
        objectPosX: 8,
        size: 5
    },
    {
        objectFind: 4,
        objectPosY: 45,
        objectPosX: 59,
        size: 5
    },
    {
        objectFind: 5,
        objectPosY: 42,
        objectPosX: 92,
        size: 5
    },
    {
        objectFind: 6,
        objectPosY: 52,
        objectPosX: 80,
        size: 5
    },
    {
        objectFind: 7,
        objectPosY: 61,
        objectPosX: 85,
        size: 5
    },
    {
        objectFind: 8,
        objectPosY: 83,
        objectPosX: 36,
        size: 5
    },
    {
        objectFind: 9,
        objectPosY: 90,
        objectPosX: 48,
        size: 5
    }
];
//Juego 2
let objectFindLvl2=[
    {
        objectFind: 1,
        objectPosY: 17,
        objectPosX: 42,
        size: 5
    },
    {
        objectFind: 2,
        objectPosY: 40,
        objectPosX: 17,
        size: 5
    },
    {
        objectFind: 3,
        objectPosY: 41,
        objectPosX: 3,
        size: 5
    },
    {
        objectFind: 4,
        objectPosY: 53,
        objectPosX: 18,
        size: 5
    },
    {
        objectFind: 5,
        objectPosY: 31,
        objectPosX: 68,
        size: 5
    },
    {
        objectFind: 6,
        objectPosY: 52,
        objectPosX: 95,
        size: 5
    },
    {
        objectFind: 7,
        objectPosY: 64,
        objectPosX: 88,
        size: 5
    },
    {
        objectFind: 8,
        objectPosY: 72,
        objectPosX: 74,
        size: 5
    },
    {
        objectFind: 9,
        objectPosY: 90,
        objectPosX: 59,
        size: 5
    }
];

/*****************************************************************************************************/
//variables para las imagenes de referencia del juego.




/*****************************************************************************************************/
/*******************************         LOGICA INICIAL          *************************************/
/*****************************************************************************************************/
window.addEventListener('load', function(){
    
    console.log('inicio juego');
//-----------Mostramos el form-------------------------NO ANDA TODAVIA, ESTA COMENTADO EL FORM********



    //-----------Inicializamos las variables del juego----------------------------------------------------
    //musica y audio del juego
    musicGame = document.getElementById("music");
    selectGame = document.getElementById("click");
    celebrationWinGame = document.getElementById("celebrate");
    //musicGame.play();    
    //selectGame.play();
    //celebrationWinGame.play();
    musicGame.volume = 0.2;


    //cantidad de juegos (para saber cuando se jugaron todos los juegos)
    totalNumGames = refImageBase.length; 

    //referencia al div que contiene la imagen
    lupa = document.querySelector('#lupa');
    //referencia a la imagen de la lupa
    lupaImg = document.querySelector('imgLupa');
    //referencia del div que contiene la imagen ampliada
    imgZoomDiv = document.querySelector(".large");
    //referencia del div que contiene la imagen original
    imgBase = document.querySelector(".small");
    //referencia a la imagen del juego
    imageGame= document.querySelector('#img_Game');

    //*****Referencia a  los popups y mensajes a ser mostrados*******************/
    // imagen blur
    blurGame = document.getElementById('blurBackground');
    //contenedor de popup
    popupGame = document.getElementById('messageGame');
    //mensaje a ser mostrado
    messagePopUpGame = document.getElementById('message-game-p');


    //*****Todo lo referente a los mosquitos a ser encontrados*******************/
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



    //----------INICIAMOS--- NO se puede interactuar con el juego hasta que no se apriete el boton Iniciar/jugar-------------
    if(!gameOn){
        //------INICIO DEL JUEGO MUESTRA POPUP INICIAL--------
        showModal(messageIni);  
        
    }

    //se aprieta el boton jugar
    document.querySelector('#btn_Play').addEventListener('click', ()=>{
            gameOn = true;// seteamos que comenzo el juego
            startGame = true;// seteamos que comenzo el juego
            actualGame = 1;
            musicGame.pause();//pausar
            musicGame.currentTime = 0;//desde el inicio del audio
            musicGame.play();
            //verificamos si ya paso por el mensaje inicial o comienza a jugar
            showModal(messageLvl1);      
            resetCount();//resetea el contador de la cantidad de mosquitos encontrados
            resetCounterTime();//para reiniciar la cuenta del reloj por que se maneja 2 tiempos distintos para los juegos
            //referencia al script time.js a la funcion startClock para que comience el conteo del reloj
            startClock(); //inicia el reloj
            initGame();  //inicia el juego con el primer nivel
            console.log('Comienza el juego = '+startGame);               
    });


    //************A LA ESPERA DE QUE SE HAGA CLICK EN ALGUN LUGAR DONDE HAY MOSQUITOS ***************/
    imageFind1.addEventListener('click',function(e){       
        if(mosquito1 == false && gameOn && startGame){
            imageCount1.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito1 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto1 encontrado');
            checkEndGame()
        }       
    });

    imageFind2.addEventListener('click',function(e){
        if(mosquito2 == false && gameOn && startGame){
            imageCount2.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito2 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto2 encontrado');
            checkEndGame()
        }        
    });
    imageFind3.addEventListener('click',function(e){
        if(mosquito3 == false && gameOn && startGame){
            imageCount3.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito3 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto3 encontrado');
            checkEndGame()
        }        
    });
    imageFind4.addEventListener('click',function(e){
        if(mosquito4 == false && gameOn && startGame){
            imageCount4.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito4 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto4 encontrado');
            checkEndGame()
        }        
    });
    imageFind5.addEventListener('click',function(e){
        if(mosquito5 == false && gameOn && startGame){
            imageCount5.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito5 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto5 encontrado');
            checkEndGame()
        } 
    });
    imageFind6.addEventListener('click',function(e){
        if(mosquito6 == false && gameOn && startGame){
            imageCount6.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito6 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto6 encontrado');
            checkEndGame()
        } 
    });
    imageFind7.addEventListener('click',function(e){
        if(mosquito7 == false && gameOn && startGame){
            imageCount7.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito7 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto7 encontrado');
            checkEndGame()
        } 
    });
    imageFind8.addEventListener('click',function(e){
        if(mosquito8 == false && gameOn && startGame){
            imageCount8.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito8 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto8 encontrado');
            checkEndGame()
        } 
    });
    imageFind9.addEventListener('click',function(e){
        if(mosquito9 == false && gameOn && startGame){
            imageCount9.src = "./img/game/mosquitoEncontrado.png";
            mosquitoCount++;
            mosquito9 = true;
            selectGame.pause();//pausar
            selectGame.currentTime = 0;//desde el inicio del audio
            selectGame.play();
            //console.log('objeto9 encontrado');
            checkEndGame();
        } 
    });

    function initGame(){
        
        if (actualGame == 1){
            
            imgBase.src = refImageBase[0];
            imgZoomDiv.style.backgroundImage = "url("+refImageBaseZoom[0]+")";            

            imageFind1.style.left = objectFindLvl1[0].objectPosX+"%";
            imageFind1.style.top = objectFindLvl1[0].objectPosY+"%";
            imageFind1.style.width = objectFindLvl1[0].size+"%";
            imageFind1.style.height = objectFindLvl1[0].size+"%";

            imageFind2.style.left = objectFindLvl1[1].objectPosX+"%";
            imageFind2.style.top = objectFindLvl1[1].objectPosY+"%";
            imageFind2.style.width = objectFindLvl1[1].size+"%";
            imageFind2.style.height = objectFindLvl1[1].size+"%";

            imageFind3.style.left = objectFindLvl1[2].objectPosX+"%";
            imageFind3.style.top = objectFindLvl1[2].objectPosY+"%";
            imageFind3.style.width = objectFindLvl1[2].size+"%";
            imageFind3.style.height = objectFindLvl1[2].size+"%";

            imageFind4.style.left = objectFindLvl1[3].objectPosX+"%";
            imageFind4.style.top = objectFindLvl1[3].objectPosY+"%";
            imageFind4.style.width = objectFindLvl1[3].size+"%";
            imageFind4.style.height = objectFindLvl1[3].size+"%";

            imageFind5.style.left = objectFindLvl1[4].objectPosX+"%";
            imageFind5.style.top = objectFindLvl1[4].objectPosY+"%";
            imageFind5.style.width = objectFindLvl1[4].size+"%";
            imageFind5.style.height = objectFindLvl1[4].size+"%";

            imageFind6.style.left = objectFindLvl1[5].objectPosX+"%";
            imageFind6.style.top = objectFindLvl1[5].objectPosY+"%";
            imageFind6.style.width = objectFindLvl1[5].size+"%";
            imageFind6.style.height = objectFindLvl1[5].size+"%";

            imageFind7.style.left = objectFindLvl1[6].objectPosX+"%";
            imageFind7.style.top = objectFindLvl1[6].objectPosY+"%";
            imageFind7.style.width = objectFindLvl1[6].size+"%";
            imageFind7.style.height = objectFindLvl1[6].size+"%";

            imageFind8.style.left = objectFindLvl1[7].objectPosX+"%";
            imageFind8.style.top = objectFindLvl1[7].objectPosY+"%";
            imageFind8.style.width = objectFindLvl1[7].size+"%";
            imageFind8.style.height = objectFindLvl1[7].size+"%";

            imageFind9.style.left = objectFindLvl1[8].objectPosX+"%";
            imageFind9.style.top = objectFindLvl1[8].objectPosY+"%";
            imageFind9.style.width = objectFindLvl1[8].size+"%";
            imageFind9.style.height = objectFindLvl1[8].size+"%";

        }else{
            imgBase.src = refImageBase[1];
            imgZoomDiv.style.backgroundImage = "url("+refImageBaseZoom[1]+")"; 

            imageFind1.style.left = objectFindLvl2[0].objectPosX+"%";
            imageFind1.style.top = objectFindLvl2[0].objectPosY+"%";
            imageFind1.style.width = objectFindLvl2[0].size+"%";
            imageFind1.style.height = objectFindLvl2[0].size+"%";

            imageFind2.style.left = objectFindLvl2[1].objectPosX+"%";
            imageFind2.style.top = objectFindLvl2[1].objectPosY+"%";
            imageFind2.style.width = objectFindLvl2[1].size+"%";
            imageFind2.style.height = objectFindLvl2[1].size+"%";

            imageFind3.style.left = objectFindLvl2[2].objectPosX+"%";
            imageFind3.style.top = objectFindLvl2[2].objectPosY+"%";
            imageFind3.style.width = objectFindLvl2[2].size+"%";
            imageFind3.style.height = objectFindLvl2[2].size+"%";

            imageFind4.style.left = objectFindLvl2[3].objectPosX+"%";
            imageFind4.style.top = objectFindLvl2[3].objectPosY+"%";
            imageFind4.style.width = objectFindLvl2[3].size+"%";
            imageFind4.style.height = objectFindLvl2[3].size+"%";

            imageFind5.style.left = objectFindLvl2[4].objectPosX+"%";
            imageFind5.style.top = objectFindLvl2[4].objectPosY+"%";
            imageFind5.style.width = objectFindLvl2[4].size+"%";
            imageFind5.style.height = objectFindLvl2[4].size+"%";

            imageFind6.style.left = objectFindLvl2[5].objectPosX+"%";
            imageFind6.style.top = objectFindLvl2[5].objectPosY+"%";
            imageFind6.style.width = objectFindLvl2[5].size+"%";
            imageFind6.style.height = objectFindLvl2[5].size+"%";

            imageFind7.style.left = objectFindLvl2[6].objectPosX+"%";
            imageFind7.style.top = objectFindLvl2[6].objectPosY+"%";
            imageFind7.style.width = objectFindLvl2[6].size+"%";
            imageFind7.style.height = objectFindLvl2[6].size+"%";

            imageFind8.style.left = objectFindLvl2[7].objectPosX+"%";
            imageFind8.style.top = objectFindLvl2[7].objectPosY+"%";
            imageFind8.style.width = objectFindLvl2[7].size+"%";
            imageFind8.style.height = objectFindLvl2[7].size+"%";

            imageFind9.style.left = objectFindLvl2[8].objectPosX+"%";
            imageFind9.style.top = objectFindLvl2[8].objectPosY+"%";
            imageFind9.style.width = objectFindLvl2[8].size+"%";
            imageFind9.style.height = objectFindLvl2[8].size+"%";
        }
    }

    function checkEndGame(){
        if(mosquitoCount == 9){
            console.log ('mosquitoCount' +mosquitoCount +"-----"+"actualGame "+actualGame);
            setTimeout(function () {
                if(actualGame == 1){
                    console.log ('pasa al siguiente nivel');
                    celebrationWinGame.pause();//pausar
                    celebrationWinGame.currentTime = 0;//desde el inicio del audio
                    celebrationWinGame.play();
                    actualGame = 2;
                    showModal(messageLvl2);//gano el primer nivel
                    initGame();
                    console.log ('mosquitoCount' +mosquitoCount +"-----"+"actualGame "+actualGame);
                }else if (actualGame == 2){
                    console.log ('win');
                    celebrationWinGame.pause();//pausar
                    celebrationWinGame.currentTime = 0;//desde el inicio del audio
                    celebrationWinGame.play();
                    musicGame.pause();//pausar
                    musicGame.currentTime = 0;//desde el inicio del audio                   
                    actualGame = 1;
                    showModal(messageWin);//fin del juego mensaje de que gano los 2 niveles
                    resetCount();
                    resetCounterTime();
                    init();
                    gameOn = false;
                    startGame = false;
                    gameOver = false;
                    initGame();
                    console.log ('mosquitoCount' +mosquitoCount +"-----"+"actualGame "+actualGame);
                }
                
                resetCount();

            }, 200);
        }        
    }

    function resetCount(){
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
    }

    document.querySelector('#btnContinue').addEventListener('click', ()=>{
        popupGame.style.display = 'none';
        blurGame.style.display = 'none';
        //Si pierde reiniciamos el juego
        if(gameOver){
            resetCount();
            startGame = false;
            gameOver = false;
            initGame(1);
        }else{//continuamos el mismo nivel
            startGame = true; 
        }     
    });

});

function showModal(messageShow){
    //blur de fondo para los popups
    startGame = false;
    blurGame.style.display = 'block';
    popupGame.style.display = 'block';
    messagePopUpGame.innerHTML = messageShow;
}


/*
formGame.addEventListener('click',function(e){   
    alert(document.querySelector('freebirdFormviewerViewNavigationLeftButtons'));
    //document.childNodes[1].childNodes[1].childNodes[7].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0]
    //window.frames['formGame'].document.getElementById('idDelElemento')
    

});
*/

let settingSeconds = 20;//seteo de los segundos iniciales del juego
let settingMinutes = 0;//seteo de los minutos iniciales del juego

let timeSeconds;
let timeMinutes;

let seconds;
let minutes;
let textSeconds = 00;
let textMinutes = 00;

let timeGame;

let timeEndFirstGame = false;

window.addEventListener('load', function(){
    timeSeconds = document.querySelector('#timeSeconds');//referencia al tag que muestra los segundos
    timeMinutes = document.querySelector('#timeMinutes');//referencia al tag que muestra los minutos
    init();
});

function init(){
    seconds = settingSeconds ;
    minutes = settingMinutes ;

    if(seconds<10){
        textSeconds = '0'+seconds;
    }else{
        textSeconds = seconds;
    }
    if(minutes<10){
        textMinutes = '0'+minutes;
    }else{
        textMinutes = minutes;
    }
    timeSeconds.innerHTML = textSeconds;
    timeMinutes.innerHTML = textMinutes; 
}

function resetCounterTime(){
    timeEndFirstGame = false;
}

//esta funcion puede ser llamada de otro script para comenzar el conteo del juego
function startClock(){

    clearInterval(timeGame);//detenemos el interval de timeGame

    init();//seteamos las variables iniciales
   
    timeGame = setInterval(counterSeconds, 1000);//iniciamos el interval de timeGame
    
    function counterSeconds(){
        if(gameOn && startGame){
            //solo va a correr el reloj si se esta jugando el juego
            //console.log('pasa el tiempo');
            if(seconds == 0 && minutes == 0)
            {
                //fin del juego
                clearInterval(timeGame);
                //mostramos popup emergente que diga que se termino el juego.
                //luego en aceptar de ese popup, dar opcion de jugar de nuevo o jugar otro????
                if(timeEndFirstGame == false){
                    //Damos la posibillidad de que se siga jugando con el tiempo del segundo nivel que es el mismo que el del primero
                    timeEndFirstGame = true;
                    init();
                    startClock();
                    //Se hace referencia a la clase game.js para que muestre el popup de que todavia tiene oportunidad
                    showModal(messageLost1);
                }else{
                    //Se finaliza el juego no hay mas oportunidades
                    //Se hace referencia a la clase game.js para que muestre el popup de que se perdio el juego
                    console.log ('Lost game');
                    gameOver = true;// se cambia de estado esta variable para que termine el juego. (la logica del juego para que pierda es por el tiempo transcurrido)
                    actualGame = 1;//seteamos para que no vuelva a empezar del nivel 2
                    resetCounterTime();
                    init();
                    startGame = false;
                    showModal(messageLost2);
                }
                
            }
            if(seconds<0){
                counterMinutes();//actualizamos los minutos
                seconds=59;       
            }
            if(seconds<10){
                textSeconds = '0'+seconds;
            }else{
                textSeconds = seconds;
            }
            timeSeconds.innerHTML = textSeconds;
            seconds--;
        }else{
            //console.log('en pausa el tiempo');
        }
    }
    
    function counterMinutes(){
        minutes--;
        if(minutes<0){
            clearInterval(timeGame);
        }
        if(minutes<10){
            textMinutes = '0'+minutes;
        }else{
            textMinutes = minutes;
        }
        timeMinutes.innerHTML = textMinutes;
    }


}
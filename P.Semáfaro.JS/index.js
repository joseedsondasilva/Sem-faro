const img = document.getElementById ( 'img' );
const bouttons = document.getElementById ( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () =>{
    if (colorIndex <2){
        colorIndex++
    }else {
        colorIndex = 0; 
    }

}

const changecolor = () => { 
    const colors = ['red', 'yellow', 'green'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':        () => img.src = './images/vermelho.png',
    'yellow':     () => img.src = './images/amarelo.png',
    'green':      () => img.src = './images/verde.png',
    'automatic':  () => intervalId = setInterval(changecolor, 1000)
}


buttons.addEventListener('click', trafficLight );
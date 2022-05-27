window.addEventListener('load', ()=> {
    const display = document.querySelector ('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => {
        
        button.addEventListener('click', ()=> {

            calculadora (button, display);

        })
    })
});


function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
            case '←':
                supr(display);
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }

}

function calcular(display, button) {

    display.innerHTML = eval(display.innerHTML)
}

function supr(display){
    let disp = display.innerHTML;
    if (disp.length >= 2){
    display.innerHTML = disp.slice(0, -1);}
    else
    display.innerHTML = 0
 }

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}


function borrar(display) {
    display.innerHTML = 0
}
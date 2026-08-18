/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

// 1.1 Evento click en el botón con id 'btnToClick'
const boton = document.querySelector('#btnToClick');
boton.addEventListener('click', (event) => {
    console.log(event);
});

// 1.2 Evento 'focus' en el input con la clase 'focus'
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

// 1.3 Evento 'input' en el input con la clase 'value'
const inputElement = document.querySelector('.value');
inputElement.addEventListener('input', (event) => {
    console.log(event.target.value);
});

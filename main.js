let buttonElement = document.getElementsByClassName('button')[0];
let buttonElement2 = document.getElementsByClassName('button')[1];
let buttonElement3 = document.getElementsByClassName('button')[2];
let buttonElement4 = document.getElementsByClassName('button')[3];
let buttonElement5 = document.getElementsByClassName('button')[4];
let buttonElement6 = document.getElementsByClassName('button')[5];

let changeTextWhenClicked = () => {
    buttonElement.innerText = "I'm glad you're here!";
};

let changeTextWhenClicked2 = () => {
    buttonElement2.innerText = "Nice! Keep going!";
};

let changeTextWhenClicked3 = () => {
    buttonElement3.innerText = "Don't give up!";
};

let changeTextWhenClicked4 = () => {
    buttonElement4.innerText = "Almost there!";
};

let changeTextWhenClicked5 = () => {
    buttonElement5.innerText = "Just one more!";
};

let changeTextWhenClicked6 = () => {
    buttonElement6.innerText = "You are awesome!";
};

buttonElement.addEventListener('click', changeTextWhenClicked);
buttonElement2.addEventListener('click', changeTextWhenClicked2);
buttonElement3.addEventListener('click', changeTextWhenClicked3);
buttonElement4.addEventListener('click', changeTextWhenClicked4);
buttonElement5.addEventListener('click', changeTextWhenClicked5);
buttonElement6.addEventListener('click', changeTextWhenClicked6);




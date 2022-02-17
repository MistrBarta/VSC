/*
const myDiv = document.getElementsByClassName("myDiv");

const change = () => {
    let element = event.target;
    element.style.backgroundColor = "green";
    
}

[...myDiv].forEach((div) => {
    div.onclick = change;
});


const myDiv = document.getElementsByClassName("myDiv");


const change = () => {
    let element = event.target;
    element.innerText++;
    if (element.innerText% 2 ==0) {
        element.style.backgroundColor = "red";
    } else {
        element.style.backgroundColor = "green";
    }
}

[...myDiv].forEach((div) => {
    div.onclick = change;
});


const myDiv = document.getElementsByClassName("myDiv");
const info = document.getElementById("info");

let counter = 0;

const change = () => {
    let element = event.target;
    if ( ! element.style.backgroundColor) {
        counter++
        element.style.backgroundColor = "green";
    }
    if (counter ==9) {
        info.innerText = "DONE";
    }
}

[...myDiv].forEach((div) => {
    div.onclick = change;
});
¨
*/
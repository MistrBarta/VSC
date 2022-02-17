// propoji html canvas do js, do promenne canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//stetec pro malovani
const ctx = canvas.getContext("2d");

const split = (x, y, w, h, color, secoudColor) => {
    ctx.fillStyle = color;
    let yS = y / 2;
    let hS = h / 2;
    ctx.fillRect(x, yS, w, hS);

    ctx.fillStyle = secoudColor;
    ctx.fillRect(x, y, w, h);
}

split(100, 100, 100, 500, "red", "green");
split(300, 500, 100, 500, "orange", "blue");
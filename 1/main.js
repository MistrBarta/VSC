const cups = document.getElementsByClassName("cup");
const wrapper = document.getElementById("wrapper");
const ball = document.getElementById("ball");
const button = document.getElementById("btn");
let sc = document.getElementById("sc");


[...cups].forEach((cup) => {
    cup.onclick = () => {
        cup.classList.add("active-cup");
        change();
        setTimeout(clearCup, 2000);
    };
});

const clearCup = () => {
    [...cups].forEach((cup) => {
        cup.classList.remove("active-cup");
    });
};


button.onclick = () => {
    [...cups].forEach((cup) => {
        cup.dataset.cup = 0;
    });

    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            cups[0].dataset.cup = 1;
            document.getElementById("ball").style.left = "38%";
            document.getElementById("ball").style.marginBottom = "15%";
            break;
        case 1:
            cups[1].dataset.cup = 1;
            document.getElementById("ball").style.left = "48%";
            document.getElementById("ball").style.marginBottom = "15%";
            break;
        case 2:
            cups[2].dataset.cup = 1;
            document.getElementById("ball").style.left = "58%";
            document.getElementById("ball").style.marginBottom = "15%";
            break;
    }
};

let score = 0;

const change = () => {
    let e = event.target;
    if (e.dataset.cup == 1) {
        score++;
        sc.innerText = `Score: ${score}`;
        e.dataset.cup = 0;
    }
}
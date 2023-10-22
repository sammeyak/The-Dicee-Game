
document.querySelector("button").addEventListener("click", () => {
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    console.log(x);
    console.log(y);
    if (x > y) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
        document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${x}.png`);
        document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${y}.png`);
    }
    else if (x < y) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
        document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${x}.png`);
        document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${y}.png`);
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
        document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${x}.png`);
        document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${y}.png`);
    }
})
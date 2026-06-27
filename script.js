const words = [
    {word:"FROST", clue:"Something very cold"},
    {word:"TIGER", clue:"A powerful wild animal"},
    {word:"ROBOT", clue:"A machine that performs tasks"},
    {word:"EARTH", clue:"The planet we live on"},
    {word:"OCEAN", clue:"A huge body of salt water"},
    {word:"APPLE", clue:"A famous fruit"},
    {word:"LIGHT", clue:"It removes darkness"},
    {word:"SPACE", clue:"Beyond Earth's atmosphere"},
    {word:"MUSIC", clue:"People love listening to it"},
    {word:"CLOUD", clue:"It floats in the sky"}
];

const selected = words[Math.floor(Math.random() * words.length)];

const secretCode = selected.word;

document.querySelector(".mission").innerHTML =
"Mission: Defuse the bomb!<br><br><b>Clue:</b> " + selected.clue;

let time = 60;

const timer = document.getElementById("timer");
const input = document.getElementById("codeInput");
const button = document.getElementById("defuseBtn");
const message = document.getElementById("message");

const countdown = setInterval(function(){

    time--;

    timer.innerHTML = time;

    if(time <= 0){

    clearInterval(countdown);

    message.innerHTML =
"💥 BOOM! The bomb exploded.<br><br>" +
"✅ Correct Code: <span style='color:yellow;'>" + secretCode + "</span>" +
"<br><br><button onclick='location.reload()'>🔄 Play Again</button>";

    message.style.color = "red";

    input.disabled = true;
    button.disabled = true;

    }

},1000);

button.addEventListener("click", function(){

    if(input.value.trim().toUpperCase() === secretCode){

        clearInterval(countdown);

        message.innerHTML =
"🎉 Bomb Defused Successfully!<br><br>" +
"<button onclick='location.reload()'>🔄 Play Again</button>";

        message.style.color = "lime";

        input.disabled = true;
        button.disabled = true;

    }

    else{

        message.innerHTML = "❌ Wrong code! Try again.";

        message.style.color = "orange";

    }

});

function blastoffTimerV1() {
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer = "Blastoff!!!"
    }, 50000)
}
//identifying variables as required by assignment
var wins = 0;
var losses = 0;
var ties = 0;
//start button as required for assignment
function playCraps() {
    console.log("playCraps() started");
    var die1;
    var die2;
    //math function to play craps game as required by assignment
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //results of rolled dice
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
    //create if sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11
    if (sum == 7 || sum == 11) {
        //tallies of results after each spin
        document.getElementById("crapsRes").innerHTML = "<h1>Craps, You lose!!!</h1>";
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "<h1>Huzzah, You Win!!!</h1>";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, You win!!!")
    } else {
        document.getElementById("crapsRes").innerHTML = "<h2>You did not lose or win. Please try again.</h2>";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
    }

}

function blastoffTimerV2() {
    //varibles
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;

    //loop
    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            console.log(countdownTimer);
            if (countdownTimer == 0) {
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!!";
            } else if (countdownTimer < halfCDT) {
                document.getElementById("countdownDisplay").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)

    }
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(timer);
}

function playStation() {
    console.log("playStation() started")
    sound = new sound("us-lab-background.mp3");
    sound.play();
    setTimeout(function () {
        sound.stop()
    }, 5000)
}

class sound {
    constructor(srcFile) {
        this.sound = document.createElement("audio");
        this.sound.src = srcFile;
        this.sound.setAttribute("preload", "none");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}
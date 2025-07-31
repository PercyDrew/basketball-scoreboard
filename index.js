let awayScore = 0
let peopleScore = 0

function increment1Home(){
    peopleScore += 1
    homeScore.textContent = peopleScore
}
function increment2Home(){
    peopleScore += 2
    homeScore.textContent = peopleScore
}
function increment3Home(){
    peopleScore += 3
    homeScore.textContent = peopleScore
}
let homeScore = document.getElementById("home-score")
function reset() {
    peopleScore = 0
    awayScore = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}
let guestScore = document.getElementById("away-score")
function increment1(){
    awayScore += 1
    guestScore.textContent = awayScore
}
function increment2(){
    awayScore += 2
    guestScore.textContent = awayScore
}
function increment3(){
    awayScore += 3
    guestScore.textContent = awayScore
}
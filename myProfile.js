window.onload=function(){
    const favColor = document.getElementById("favoriteColor")
    favColor.addEventListener("click", myColor)
  }


const favColor = document.getElementById("favoriteColor")
const favPlace = document.getElementById("place")
const favRitual = document.getElementById("ritual")

function myColor(){
alert("My favorite color is black")
}

function myPlace(){
    alert("My favorite place is Ireland")
}

function myRitual(){
    alert("My favorite ritual is saying my daily affirmations")
}

favColor.addEventListener("click", myColor)
favPlace.addEventListener("click", myPlace)
favRitual.addEventListener("click", myRitual)

console.log("whats up")
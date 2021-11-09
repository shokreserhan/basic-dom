// // console.log(document)
const playField = document.getElementById( "playing-field" )
const ball = document.getElementById( "block" )
ball.style.backgroundColor = "yellow"

//creating header,give style and adding it to document body
const header = document.createElement( "h1" )
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild( header )

const subHeader = document.createElement( "h2" )
subHeader.innerHTML = "Lets play:"
document.body.appendChild( subHeader )

subHeader.setAttribute( "class" , "sub-header" )

//function that change the background color of the playing field when clicking on it 
const clickdiv = function () {
   playField.style.backgroundColor = "#8e44ad"
}

 //all this functions to move the ball when pressing on the arrows
const up = document.getElementById( "up" )

up.onclick = function () {
   let up1 = parseInt( ball.style.top ) || 0
   if( up1 >= 15 )
      ball.style.top = up1 - 15 + "px"
}

const right = document.getElementById( "right" )

right.onclick = function () {
   let left1 = parseInt( ball.style.left ) || 0
   if( left1 < playField.offsetWidth - ball.offsetWidth - 15)
      ball.style.left = left1 + 15 + "px"
}

const left = document.getElementById( "left" )

left.onclick = function () {
   let left1 = parseInt( ball.style.left ) || 0
   if( left1 >= 15 )
      ball.style.left = left1 - 15 + "px"
}

const down = document.getElementById( "down" )

down.onclick = function () {
   let up1 = parseInt( ball.style.top ) || 0
   if( up1 < playField.offsetHeight - ball.offsetHeight - 15)
      ball.style.top = up1 + 15 + "px"
}
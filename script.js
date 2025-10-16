// console.log("testing")

// Better Comment Extension

// normal comment
//* highligh
//! error
//? question
//todo 



// Asynchronous methods

// let someVar = "hello"
// console.log(someVar)
// someVar += " Bob"
// console.log(someVar)


//*setTimeout

// setTimeout( functionToExecute, timeInMiliseconds )

// setTimeout( () => {
//   console.log("this is hapening in 2 seconds")
// }, 2000 )

// setTimeout( () => {
//   console.log("this is happening after 0 miliseconds")
// }, 0 )

// for (let i = 0; i < 100000; i++) {
//   console.log(i)
// }

// console.log("this is synchronous code") 


//* setInterval

// const timerCounter = document.querySelector("#timer")
// let timerValue = 0

// const timerId = setInterval(() => {
//   console.log("something")
//   timerValue++
//   timerCounter.innerHTML = timerValue

//   if (timerValue >= 5) {
//     clearInterval( timerId )
//     console.log("interval stopping")
//   }

// }, 1000)

// console.log(timerId)


// clearInterval


// setTimeout(() => {
//   clearInterval( timerId )
//   console.log("interval stopping")
// }, 5000)


//* Animating the DOM

const gameBox = document.querySelector("#game-box")
gameBox.style.backgroundColor = "darkgray"
gameBox.style.width = "100vw"
gameBox.style.height = "400px"
gameBox.style.position = "relative" // only because we want to position elements inside via absolute


const cube = document.querySelector("#cube")
cube.style.backgroundColor = "black"
cube.style.width = "50px"
cube.style.height = "50px"
cube.style.position = "absolute"
cube.style.top = "20px"

let cubePosX = 50
cube.style.left = `${cubePosX}px` // the line of code that updates the DOM using the JS variable.

const animationIntervalId = setInterval(() => {
  console.log("testing")

  cubePosX++
  console.log(cubePosX)
  cube.style.left = `${cubePosX}px`

  if (cubePosX > (gameBox.offsetWidth - 50)) {
    clearInterval(animationIntervalId)
  }

}, 20)


// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

let previousGamePiece = null

function addGamePiece(selectedElement) {
  //create new element
  let newElement = document.createElement('h1')
  if (previousGamePiece === 'x') {
    // add text to element
    newElement.innerHTML = 'o'
    // set previousGamePiece
    previousGamePiece = 'o'
  } else {
    // add text to element
    newElement.innerHTML = 'x'
    // set previousGamePiece
    previousGamePiece = 'x'
  }
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  console.log('show clicked div', selectedElement)
}
// if statement
// example below
// if (player1 = 'x') {
//   newElement.innerHTML = 'o'
// } else {
//   newElement.innerHTML = 'x'
// }
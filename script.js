var character = document.querySelector('.character')
var map = document.querySelector('.map')

const block = document.querySelector('.block-item')
const wall = document.querySelector('.wall')

const objWall = {
  background: 'red',
  props: [
    { x: 0, y: 20, width: 385, height: 50 },
    { x: 0, y: 350, width: 385, height: 50 },
    { x: 0, y: 680, width: 385, height: 50 },
    { x: 0, y: 1010, width: 385, height: 50 },
    { x: 0, y: 1340, width: 428, height: 50 },

    { x: 635, y: 20, width: 385, height: 50 },
    { x: 635, y: 350, width: 385, height: 50 },
    { x: 635, y: 680, width: 385, height: 50 },
    { x: 635, y: 1010, width: 385, height: 50 },
    { x: 595, y: 1340, width: 428, height: 50 },
  ],
}

for (let i = 0; i < objWall.props.length; i++) {
  console.log('created wall on map ')
  const wall = document.createElement('div')
  wall.className = 'wall'
  wall.style.left = objWall.props[i].x + 'px'
  wall.style.top = objWall.props[i].y + 'px'
  wall.style.width = objWall.props[i].width + 'px'
  wall.style.height = objWall.props[i].height + 'px'
  wall.style.backgroundColor = '#f89c9c'
  // wall.style.transform = `translate3d( ${x * pixelSize}px, ${
  //   y * pixelSize
  // }px, 0 )`
  map.appendChild(wall)
}

const wallPositionY = 95
//start in the middle of the map
var x = 112
var y = 290
var held_directions = [] //State of which arrow keys we are holding down
var speed = 1.5 //How fast the character moves in pixels per frame

const placeCharacter = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
  )

  const held_direction = held_directions[0]
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed
    }
    if (held_direction === directions.left) {
      x -= speed
    }
    if (held_direction === directions.down) {
      y += speed
    }
    if (held_direction === directions.up) {
      y -= speed
      // for (let i = 0; i < objWall.length; i++) {}
    }
    character.setAttribute('facing', held_direction)
  }
  character.setAttribute('walking', held_direction ? 'true' : 'false')

  const characterX0 = character.getBoundingClientRect().x
  const characterX1 = character.getBoundingClientRect().right

  const characterY0 = character.getBoundingClientRect().y
  const characterY1 = character.getBoundingClientRect().bottom

  const blockX0 = block.getBoundingClientRect().x
  const blockX1 = block.getBoundingClientRect().right

  const blockY0 = block.getBoundingClientRect().y
  const blockY1 = block.getBoundingClientRect().bottom

  const question = document.querySelector('.question')
  //Limits (gives the illusion of walls)
  var leftLimit = -8
  var rightLimit = 230
  var topLimit = 0
  var bottomLimit = 320

  console.log('y = ' + parseInt(y) + ' | wallPositionY = ' + wallPositionY)
  if (parseInt(y) >= wallPositionY && wallPositionY >= parseInt(y)) {
    console.log('WALL')
  }
  if (x < leftLimit) {
    x = leftLimit
  }
  if (x > rightLimit) {
    x = rightLimit
  }
  if (y < topLimit) {
    y = topLimit
  }
  if (y > bottomLimit) {
    y = bottomLimit
  }

  var camera_left = pixelSize * 66
  var camera_top = pixelSize * 42

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`

  if (
    characterX0 >= blockX0 - 50 &&
    characterX1 <= blockX1 + 50 &&
    characterY0 >= blockY0 - 100 &&
    characterY1 <= blockY1 + 30
  ) {
    question.style.display = 'block'
  } else {
    question.style.display = 'none'
  }
}

//Set up the game loop
const step = () => {
  placeCharacter()
  window.requestAnimationFrame(() => {
    step()
  })
}
step() //kick off the first step!

/* Direction key state */
const directions = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
}
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
}
document.addEventListener('keydown', (e) => {
  var dir = keys[e.which]
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir)
  }
})

document.addEventListener('keyup', (e) => {
  var dir = keys[e.which]
  var index = held_directions.indexOf(dir)
  if (index > -1) {
    held_directions.splice(index, 1)
  }
  //   console.log("Y = ", character.getBoundingClientRect().y)
})

/* BONUS! Dpad functionality for mouse and touch */
// var isPressed = false
// const removePressedAll = () => {
//   document.querySelectorAll('.dpad-button').forEach((d) => {
//     d.classList.remove('pressed')
//   })
// }
// document.body.addEventListener('mousedown', () => {
//   console.log('mouse is down')
//   isPressed = true
// })
// document.body.addEventListener('mouseup', () => {
//   console.log('mouse is up')
//   isPressed = false
//   held_directions = []
//   removePressedAll()
// })
// const handleDpadPress = (direction, click) => {
//   if (click) {
//     isPressed = true
//   }
//   held_directions = isPressed ? [direction] : []

//   if (isPressed) {
//     removePressedAll()
//     document.querySelector('.dpad-' + direction).classList.add('pressed')
//   }
// }
//Bind a ton of events for the dpad
// document.querySelector(".dpad-left").addEventListener("touchstart", (e) => handleDpadPress(directions.left, true));
// document.querySelector(".dpad-up").addEventListener("touchstart", (e) => handleDpadPress(directions.up, true));
// document.querySelector(".dpad-right").addEventListener("touchstart", (e) => handleDpadPress(directions.right, true));
// document.querySelector(".dpad-down").addEventListener("touchstart", (e) => handleDpadPress(directions.down, true));

// document.querySelector(".dpad-left").addEventListener("mousedown", (e) => handleDpadPress(directions.left, true));
// document.querySelector(".dpad-up").addEventListener("mousedown", (e) => handleDpadPress(directions.up, true));
// document.querySelector(".dpad-right").addEventListener("mousedown", (e) => handleDpadPress(directions.right, true));
// document.querySelector(".dpad-down").addEventListener("mousedown", (e) => handleDpadPress(directions.down, true));

// document.querySelector(".dpad-left").addEventListener("mouseover", (e) => handleDpadPress(directions.left));
// document.querySelector(".dpad-up").addEventListener("mouseover", (e) => handleDpadPress(directions.up));
// document.querySelector(".dpad-right").addEventListener("mouseover", (e) => handleDpadPress(directions.right));
// document.querySelector(".dpad-down").addEventListener("mouseover", (e) => handleDpadPress(directions.down));

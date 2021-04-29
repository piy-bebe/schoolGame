import {questionsList} from './classes.js'

const data = questionsList

const questions = {
  complexity: ["easy", "medium", "hard"],
  class1: [
    {
      name: "Устный счет #1",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #2",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #3",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #4",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #5",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #6",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #7",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
    {
      name: "Устный счет #8",
      listQuestions: [
        {
          question: "2 + 2 = ?",
          answer: "4",
        },
        {
          question: "23 + 42 = ?",
          answer: "65",
        },
        {
          question: "21 * 10 = ?",
          answer: "210",
        },
        {
          question: "10 + 2 = ?",
          answer: "12",
        },
      ],
    },
  ],
}




const questionText = document.querySelector(".question__text");
const questionTitle = document.querySelector(".question__title");

const reply = document.querySelector("#reply");
// const randomSubject = Math.floor(Math.random() * questions.class1.length);

const randomSubject = 0;
const submit = document.querySelector(".form-submit");
const question_result = document.querySelector(".question_result");

let stepQuestion = 0;

questionTitle.textContent = questions.class1[randomSubject].name;
questionText.textContent =
questions.class1[randomSubject].listQuestions[stepQuestion].question;



/* -------------- [ Авторизация ] -------------- */

// Получаем ID класса
let classID
// Random
let random = ""
// Уровень сложности
let complexity = 1

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#name").value;
  const userSurname = document.querySelector("#surname").value;
  const userPatronymic = document.querySelector("#patronymic").value;
  const userPhone = document.querySelector("#phone").value;
  const userDate = document.querySelector("#date").value;
  const userClass = document.querySelector("#class").value;
  const userEmail = document.querySelector("#email").value;
  let formListEnter = ""

  if(userName == "") {
    formListEnter += "Имя\n";
  }
  if(userSurname == "") {
    formListEnter += "Фамилия\n";
  }
  if(userPatronymic == "") {
    formListEnter += "Отчество\n";
  }
  if(userPhone == "") {
    formListEnter += "Телефон\n";
  }
  if(userDate == "") {
    formListEnter += "Дата рождения\n";
  }
  if(userClass == "") {
    formListEnter += "Класс\n";
  }
  else if(userClass <= 0 || userClass > 9) {
    formListEnter += "Номер класса от 1 до 9\n"
  }
  if(userEmail == "") {
    formListEnter += "Почта\n";
  }

  if(formListEnter != "") {
    alert("Введите пожалуйста данные: \n" + formListEnter)
  } else {

    // Получаем ID класса для составление вопросов
    classID = data.classes.map(e => e.classID).indexOf(parseInt(userClass))
    console.log(`Выбран класс: ${userClass} | ID класса: ${classID}`)


    document.querySelector(".report__span-surname").textContent = userSurname
    document.querySelector(".report__span-name").textContent = userName
    document.querySelector(".report__span-patronymic").textContent = userPatronymic
    document.querySelector(".report__span-phone").textContent = userPhone
    document.querySelector(".report__span-date").textContent = userDate
    document.querySelector(".report__span-class").textContent = userClass

    const spanUser = document.querySelector(".info__username");
    spanUser.textContent = userName || "def";

    const spanClass = document.querySelector(".info__userclass");
    spanClass.textContent = userClass || "def";
  
    const authField = document.querySelector(".auth");
    authField.style.display = "none";
  }


});

const question = document.querySelector(".question");

var character = document.querySelector(".character");
var map = document.querySelector(".map");

let id

/* -------------- [ Конфиг placeBlocks ] -------------- */
const placeBlocks = {
  props: [
    {top: 71, left: 18, width: 10, height: 5},  // class 1
    {top: 49, left: 18, width: 10, height: 5},  // class 2
    {top: 28, left: 18, width: 10, height: 5},  // class 3
    {top: 6, left: 18, width: 10, height: 5},   // class 4
    {top: 6, left: 73, width: 10, height: 5},   // class 5
    {top: 28, left: 73, width: 10, height: 5},  // class 6
    {top: 49, left: 73, width: 10, height: 5},  // class 7
    {top: 71, left: 73, width: 10, height: 5},  // class 8
    
  ]
}

/* -------------- [ Создание placeBlocks ] -------------- */
for (let i = 0; i < placeBlocks.props.length; i++) {
  const placeBlock = document.createElement("div");
  placeBlock.className = "placeBlock";
  placeBlock.style.width = placeBlocks.props[i].width + "%";
  placeBlock.style.height = placeBlocks.props[i].height + "%";
  placeBlock.style.top = placeBlocks.props[i].top + "%";
  placeBlock.style.left = placeBlocks.props[i].left + "%";
  map.appendChild(placeBlock);
}

/* -------------- [ Позиции placeBlocks ] -------------- */
let positionBlocks = {
  places: [
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
    {x: 0, right: 0, y: 0, bottom: 0},
  ]
}

  // {
  // x: {type: Number}, right: {type: Number}, y: {type: Number}, bottom: {type: Number}
  // }

const blocks = document.querySelectorAll(".placeBlock");



const wall = document.querySelector(".wall");
const wallLong = document.querySelector(".wall-long");

var pixelSize = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
);
var leftLimit = -8;
var rightLimit = 230;
var topLimit = 0;
var bottomLimit = 320;

var wallShortLeft = 85;
var wallShortRight = 140;

const objWall = {
  props: [
    { x: 0, y: 233, width: 385, height: 50 },
    { x: 0, y: 68, width: 385, height: 50 },
    { x: 0, y: 150, width: 385, height: 50 },
    { x: 0, y: 233, width: 385, height: 50 },
    { x: 0, y: 315, width: 428, height: 50 },

    { x: 159, y: 233, width: 385, height: 50 },
    { x: 159, y: 68, width: 385, height: 50 },
    { x: 159, y: 150, width: 385, height: 50 },
    { x: 159, y: 233, width: 385, height: 50 },
    { x: 148, y: 315, width: 428, height: 50 },
  ],
};

const objLongWall = {
  props: [
    { x: 96, y: 278, width: 5, height: 150 },
    { x: 96, y: 198, width: 5, height: 160 },
    { x: 96, y: 112, width: 5, height: 160 },
    { x: 96, y: 30, width: 5, height: 160 },

    { x: 158, y: 278, width: 5, height: 150 },
    { x: 158, y: 198, width: 5, height: 150 },
    { x: 158, y: 112, width: 5, height: 150 },
    { x: 158, y: 30, width: 5, height: 150 },
  ],
};

for (let i = 0; i < objLongWall.props.length; i++) {
  const wall = document.createElement("div");
  wall.className = "long-wall";
  wall.style.width = objLongWall.props[i].width + "px";
  wall.style.height = objLongWall.props[i].height + "px";
  wall.style.transform = `translate3d( ${
    objLongWall.props[i].x * pixelSize
  }px, ${objLongWall.props[i].y * pixelSize}px, 0 )`;
  map.appendChild(wall);
}

for (let i = 0; i < objWall.props.length; i++) {
  const wall = document.createElement("div");
  wall.className = "wall";
  wall.style.width = objWall.props[i].width + "px";
  wall.style.height = objWall.props[i].height + "px";
  wall.style.transform = `translate3d( ${objWall.props[i].x * pixelSize}px, ${
    objWall.props[i].y * pixelSize
  }px, 0 )`;
  map.appendChild(wall);
}

const wallPositionY = 95;
//start in the middle of the map
var x = 112;
var y = 290;
var held_directions = []; //State of which arrow keys we are holding down
var speed = 1.0; //How fast the character moves in pixels per frame

const placeCharacter = () => {
  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("walking", held_direction ? "true" : "false");

  const characterX0 = character.getBoundingClientRect().x;
  const characterX1 = character.getBoundingClientRect().right;

  const characterY0 = character.getBoundingClientRect().y;
  const characterY1 = character.getBoundingClientRect().bottom;

  // blocks.forEach(element => {
  //     positionBlocks.push({x: element.getBoundingClientRect().x, right: element.getBoundingClientRect().right, y: element.getBoundingClientRect().y, bottom: element.getBoundingClientRect().bottom})
    
  // });

  for(let i = 0; i < placeBlocks.props.length; i++) {
    positionBlocks.places[i] = {
      x: blocks[i].getBoundingClientRect().x,
      right: blocks[i].getBoundingClientRect().right,
      y: blocks[i].getBoundingClientRect().y,
      bottom: blocks[i].getBoundingClientRect().bottom,
    }
  }

  //Limits (gives the illusion of walls)

  // console.log("y = " + parseInt(y) + " | wallPositionY = " + wallPositionY);
  if (x < leftLimit) {
    x = leftLimit;
  }
  if (x > rightLimit) {
    x = rightLimit;
  }
  if (y < topLimit) {
    y = topLimit;
  }
  if (y > bottomLimit) {
    y = bottomLimit;
  }

  // Проверка на стены
  for (let i = 0; i < objWall.props.length; i++) {
    if (objWall.props[i].y + 15 == y && x <= wallShortLeft) {
      y = objWall.props[i].y + 16;
    } else if (objWall.props[i].y - 10 == y && x <= wallShortLeft) {
      y = objWall.props[i].y - 11;
    } else if (objWall.props[i].y - 10 == y && x >= wallShortRight) {
      y = objWall.props[i].y - 11;
    } else if (objWall.props[i].y + 15 == y && x >= wallShortRight) {
      y = objWall.props[i].y + 16;
    }
  }

  for (let i = 0; i < objLongWall.props.length; i++) {
    if (
      objLongWall.props[i].x - 8 == x &&
      y >= objLongWall.props[i].y - 12 &&
      objLongWall.props[i].y + 60 >= y
    ) {
      x = objLongWall.props[i].x - 7;
    } else if (
      objLongWall.props[i].x - 20 == x &&
      y >= objLongWall.props[i].y - 12 &&
      objLongWall.props[i].y + 60 >= y
    ) {
      x = objLongWall.props[i].x - 21;
    }
  }

  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;


  if (
    characterX0 >= positionBlocks.places[0].x - 50 &&
    characterX1 <= positionBlocks.places[0].right + 50 &&
    characterY0 >= positionBlocks.places[0].y - 100 &&
    characterY1 <= positionBlocks.places[0].bottom + 30 &&
    (blocks[0].classList[1] != "block-item__success" && 
    blocks[0].classList[1] != "block-item__disabled")
  ) {
    id = 0
    if(random.length == "" && complexity == 1) {
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.easy.length)
    } else if (random.length == "" && complexity == 2){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.medium.length)
    } else if (random.length == "" && complexity == 3){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.hard.length)
    }
    questionStart(random);
  } 
  else if (
    characterX0 >= positionBlocks.places[1].x - 50 &&
    characterX1 <= positionBlocks.places[1].right + 50 &&
    characterY0 >= positionBlocks.places[1].y - 100 &&
    characterY1 <= positionBlocks.places[1].bottom + 30 &&
    (blocks[1].classList[1] != "block-item__success" && 
    blocks[1].classList[1] != "block-item__disabled")
  ) {
    id = 1
    if(random.length == "" && complexity == 1) {
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.easy.length)
    } else if (random.length == "" && complexity == 2){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.medium.length)
    } else if (random.length == "" && complexity == 3){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.hard.length)
    }
    questionStart(random);
  } else if (
    characterX0 >= positionBlocks.places[2].x - 50 &&
    characterX1 <= positionBlocks.places[2].right + 50 &&
    characterY0 >= positionBlocks.places[2].y - 100 &&
    characterY1 <= positionBlocks.places[2].bottom + 30 &&
    (blocks[2].classList[1] != "block-item__success" && 
    blocks[2].classList[1] != "block-item__disabled")
  ) {
    id = 2
    if(random.length == "" && complexity == 1) {
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.easy.length)
    } else if (random.length == "" && complexity == 2){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.medium.length)
    } else if (random.length == "" && complexity == 3){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.hard.length)
    }
    questionStart(random);
  }
  else if (
    characterX0 >= positionBlocks.places[3].x - 50 &&
    characterX1 <= positionBlocks.places[3].right + 50 &&
    characterY0 >= positionBlocks.places[3].y - 100 &&
    characterY1 <= positionBlocks.places[3].bottom + 30 &&
    (blocks[3].classList[1] != "block-item__success" && 
    blocks[3].classList[1] != "block-item__disabled")
  ) {
    id = 3
    if(random.length == "" && complexity == 1) {
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.easy.length)
    } else if (random.length == "" && complexity == 2){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.medium.length)
    } else if (random.length == "" && complexity == 3){
      random = Math.floor(Math.random() * data.classes[classID].subject[id].complexity.hard.length)
    }
    questionStart(random);
  }
  else if (
    characterX0 >= positionBlocks.places[4].x - 50 &&
    characterX1 <= positionBlocks.places[4].right + 50 &&
    characterY0 >= positionBlocks.places[4].y - 100 &&
    characterY1 <= positionBlocks.places[4].bottom + 30 &&
    (blocks[4].classList[1] != "block-item__success" && 
    blocks[4].classList[1] != "block-item__disabled")
  ) {
    id = 4
    questionStart();
  }
  else if (
    characterX0 >= positionBlocks.places[5].x - 50 &&
    characterX1 <= positionBlocks.places[5].right + 50 &&
    characterY0 >= positionBlocks.places[5].y - 100 &&
    characterY1 <= positionBlocks.places[5].bottom + 30 &&
    (blocks[5].classList[1] != "block-item__success" && 
    blocks[5].classList[1] != "block-item__disabled")
  ) {
    id = 5
    questionStart();
  }
  else if (
    characterX0 >= positionBlocks.places[6].x - 50 &&
    characterX1 <= positionBlocks.places[6].right + 50 &&
    characterY0 >= positionBlocks.places[6].y - 100 &&
    characterY1 <= positionBlocks.places[6].bottom + 30 &&
    (blocks[6].classList[1] != "block-item__success" && 
    blocks[6].classList[1] != "block-item__disabled")
  ) {
    id = 6
    questionStart();
  }
  else if (
    characterX0 >= positionBlocks.places[7].x - 50 &&
    characterX1 <= positionBlocks.places[7].right + 50 &&
    characterY0 >= positionBlocks.places[7].y - 100 &&
    characterY1 <= positionBlocks.places[7].bottom + 30 &&
    (blocks[7].classList[1] != "block-item__success" && 
    blocks[7].classList[1] != "block-item__disabled")
  ) {
    id = 7
    questionStart();
  }
  else {
    question.style.display = "none";
  }

  // for(let i = 0; i < positionBlocks.places.length; i++) {
  //   if (
  //     characterX0 >= positionBlocks.places[i].x - 50 &&
  //     characterX1 <= positionBlocks.places[i].right + 50 &&
  //     characterY0 >= positionBlocks.places[i].y - 100 &&
  //     characterY1 <= positionBlocks.places[i].bottom + 30 
  //     // block.classList[1] != "block-item__disabled"
  //   ) {
  //     questionStart();
  //   } else {
  //     question.style.display = "none";
  //   }
  // }
};

// Set up the game loop
const step = () => {
  placeCharacter();
  window.requestAnimationFrame(() => {
    step();
  });
};
//kick off the first step!
step();
/* Direction key state */
placeCharacter();

const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};

const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
};
document.addEventListener("keydown", (e) => {
  var dir = keys[e.which];
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir);
  }
  if(e.key === "p") {
    alert("PAUSE")
  }
  if(e.key === "r") {
    const report = document.querySelector('.report')
    report.style.display = "flex"
  }
});

document.addEventListener("keyup", (e) => {
  var dir = keys[e.which];
  var index = held_directions.indexOf(dir);
  if (index > -1) {
    held_directions.splice(index, 1);
  }
  //   console.log("Y = ", character.getBoundingClientRect().y)
  if(e.key === "r") {
    const report = document.querySelector('.report')
    report.style.display = "none"
  }
});



function questionStart(rand) {
  question.style.display = "block";
  questionTitle.textContent = data.classes[classID].subject[id].name;
  if(complexity == 1) {
    questionText.textContent  = data.classes[classID].subject[id].complexity.easy[rand].question;
  } else if(complexity == 2) {
    questionText.textContent  = data.classes[classID].subject[id].complexity.medium[rand].question;
  } else if(complexity == 3) {
    questionText.textContent  = data.classes[classID].subject[id].complexity.hard[rand].question;
  }
}

reply.addEventListener("click", () => {
  const question__form = document.querySelector(".question__form");

  if(complexity == 1) {
    if (
      question__form.value ==
      data.classes[classID].subject[id].complexity.easy[random].answer
    ) {
      complexity = 2
      random = ""
    } else {
      blocks[id].classList.add("block-item__disabled");
        question.style.display = "none";
        question__form.value = ""
        random = ""
        complexity = 1
      }
    } else if(complexity == 2) {
      if (
        question__form.value ==
        data.classes[classID].subject[id].complexity.medium[random].answer
      ) {
        complexity = 3
        random = ""
      } else {
        blocks[id].classList.add("block-item__disabled");
          question.style.display = "none";
          question__form.value = ""
          random = ""
          complexity = 1
        }
    } else if(complexity == 3) {
      if (
        question__form.value ==
        data.classes[classID].subject[id].complexity.hard[random].answer
      ) {
        blocks[id].classList.add("block-item__success");
        question.style.display = "none";
        question__form.value = ""
        random = ""
        complexity = 1
      } else {
        blocks[id].classList.add("block-item__disabled");
          question.style.display = "none";
          question__form.value = ""
          random = ""
          complexity = 1
        }
    }
    
    
  });
  
  // if(stepQuestion <= 2) {
  //   questionText.textContent =
  //   questions.class1[randomSubject].listQuestions[stepQuestion].question;
  //   stepQuestion++;
  // }
  // else {
  //   blocks[id].classList.add("block-item__success");
  //   question.style.display = "none";
  //   question__form.value = ""
  //   stepQuestion = 0
  // }
  // /* BONUS! Dpad functionality for mouse and touch */
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
// //Bind a ton of events for the dpad
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

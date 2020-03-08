/*
autoSandwich
by Felix Summ

v.0.0.3

Made in the fall semester 2019 at
Konstfack University of Arts, Crafts, and Design.
*/

breads = []
burgerTop = []
toppings = []
flags = []
//sauces = []
randToppings = []
nameArray = []
alphabet = []

function preload() {
  
  // image load
  
  breadsAmt = 8
  toppingsAmt = 12
  saucesAmt = 1
  flagsAmt = 2
  
  // breads
  for (i = 0; i <= breadsAmt; i++) {
    breads[i] = loadImage("img/bread" + i + ".png")
  }
  
  burgerTop[0] = loadImage("img/bread3_1.png")
  
  // toppings
  for (i = 0; i <= toppingsAmt; i++) {
    toppings[i] = loadImage("img/topping" + i + ".png")
  }
  
  // flags
  for (i = 0; i <= flagsAmt; i++) {
    flags[i] = loadImage("img/flag" + i + ".png")
  }
  
  // // sauces
  // for (i = 0; i <= saucesAmt; i++) {
  //   sauces[i] = loadImage("img/sauce" + i + ".png")
  // }
}

function setup() {
  sandwichCanvas = createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  toppingSpacing = 45
  sandwichStart = windowHeight - 200
  toppingCount = 0
  renderCount = 0
  alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  // making a button
  input = createInput()
  input.position(20, 70)

  button = createButton('Submit')
  button.position(input.x + input.width, 70)
  button.mousePressed(greet)

  greeting = createElement('h2', 'What is your name?')
  greeting.position(20, 5)
  greeting.style('font-family', 'Helvetica');
  
  buttonSave = createButton('Save')
  buttonSave.position(input.x, 100)
  buttonSave.mousePressed(saveImage)

  textAlign(CENTER)
  textSize(50)
}

// function mousePressed() {
  
//   defineSandwich()
//   makeSandwich()
//   // print(toppingSpacing)
// }

function saveImage() {
  save(sandwichCanvas, saveName + '.jpg')
  renderCount++
}

function keyPressed() {
  if (keyCode === RETURN) {
    greet()
  }
}

function greet() {
  const name = input.value()
  saveName = String(name)
  
  // make seed
  // nameArray = split(name, ',')
  // print(unhex(nameArray[0]))
  // nameVar1 = unhex(nameArray[0])
  // print(nameVar1)
  // nameVar2 = unhex(nameArray[nameArray.length - 1])
  // if (nameVar1 === null) {
  //   nameVar1 = unhex('a')
  //   print('hi')
  // }
  // if (nameVar2 === null) {
  //   nameVar2 = unhex('D')
  // }
  // nameSeed = nameVar1 + nameVar2 + name.length
  
  // generate seed
  nameSeed = 0
  
  if (name.includes("a") === true) {
    nameSeed+= 100
  }
  if (name.includes("o") === true) {
    nameSeed+= 200
  }
  if (name.includes("i") === true) {
    nameSeed+= 300
  }
  if (name.includes("e") === true) {
    nameSeed+= 400
  }
  if (name.includes("u") === true) {
    nameSeed+= 500
  }
  
  nameSeed+= name.length + alphabet.indexOf(name[0])
  
  print(nameSeed)
  //randomSeed(nameSeed)
  
  // making the sandwich
  greeting.html('Here is your sandwich, ' + name + '!')
  input.value('')
  defineSandwich()
  makeSandwich()
}

function defineSandwich() {
  // how big is the sandwich?
  toppingMax = random(1,7)
  print(toppingMax)

  // define the random ingredient
  for (i = 0; i <= toppingMax + 1; i++) {
    randToppings[i] = random(toppings)
  }
  
  whichBread = random(breads)
  whichFlag = random(flags)
  
}

function makeSandwich () {
  background(255, 255, 255)
  
  drawBread()
  
  for (i = 0; i <= toppingMax; i++) {
    drawTopping()
  }
  
  toppingCount++
  // if (whichBread == breads[3]) {
  //   whichBread == burgerTop[0]
  //   print("hi")
  // }
  // whichBread == burgerTop[0]
  drawBread()
  if (toppingMax >= 3) {
    drawFlag()
  }

  toppingCount = 0
  sandwichStart = windowHeight - 200
}

function checkHeight() {
  if (toppingCount <= toppingMax) {
    return true
  }
}

function updateHeight() {
  if (randToppings[toppingCount] == toppings[3]) {
    sandwichStart += 45
  }
  if (randToppings[toppingCount] == toppings[5]) {
    sandwichStart += 45
  }
  if (randToppings[toppingCount] == toppings[9]) {
    sandwichStart += 45
  }
  if (randToppings[toppingCount] == toppings[1]) {
    sandwichStart += 25
  }
  if (randToppings[toppingCount] == toppings[0]) {
    sandwichStart += 25
  }
  if (randToppings[toppingCount] == toppings[7]) {
    sandwichStart += 25
  }
  if (randToppings[toppingCount] == toppings[8]) {
    sandwichStart += 25
  }
  toppingDraw = (toppingSpacing * toppingCount * -1) + sandwichStart
  
  return toppingDraw
}

function drawTopping() {
  if (checkHeight() === true) {
    toppingCount++
    updateHeight()
    image(randToppings[toppingCount], windowWidth / 2, toppingDraw)
  }
}

function drawBread() {
  toppingDraw = (toppingSpacing * toppingCount * -1) + sandwichStart
  image(whichBread, windowWidth / 2, toppingDraw + 10)
}

function drawFlag() {
  image(whichFlag, windowWidth / 2, toppingDraw + 10)
}






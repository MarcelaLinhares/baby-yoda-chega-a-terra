let personagem
let espaço
let chegada
const tamanho = 90
const velocidade = 90

let andarX = 0
let andarY = 0

let botao

// Executada apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(540, 540);
  personagem = loadImage("yoda2.png")
  espaço = loadImage("espaço.jpg")
  chegada = loadImage("chegada.terra.png")
}

// Executa até que o programa se encerre
function draw() {
  background(220);
  
  if(andarX < 0) {
    andarX = 0
  }
  
  if(andarY < 0) {
    andarY = 0
  }
  
  if(andarX > tamanho*5) {
    andarX = tamanho*5
  }
  
  if(andarY > tamanho*5) {
    andarY = tamanho*5
  }
  
  for(let x = 0; x < 6; x++) {
    for(let y = 0; y < 6; y++) {
      image(espaço, x*tamanho, y*tamanho, tamanho, tamanho)
    }
    
  }
  
  image(chegada, 450, 450, tamanho, tamanho)
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho*5 && andarY === tamanho*5) {
    
// Criar um retângulo
   // rect(180, 180, 128, 128)
// Escrever o texto ganhou 
    textSize(40)
    fill(255, 204, 0)
    text("GANHOU!!!", 175, 250)
// Criar um botão
    botao = createButton("Reiniciar")
// Resetar o jogo
    botao.mousePressed(reset)
// Parar o jogo(loop)
    noLoop()
  }
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}
  
// É chamada uma vez sempre que uma tecla é pressionada
  function keyPressed() {
    if(keyIsDown(DOWN_ARROW)) {
      andarY += velocidade
    }
    
    if(keyIsDown(UP_ARROW)) {
      andarY -= velocidade
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
      andarX += velocidade
    }
    
    if(keyIsDown(LEFT_ARROW)) {
      andarX -= velocidade
    }
  }

 
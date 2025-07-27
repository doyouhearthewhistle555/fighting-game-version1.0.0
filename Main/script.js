const a = document.getElementById("button1")
const b = document.getElementById("button2")
const c = document.getElementById("label1")
const d = document.getElementById("label2")
let blueteamHealth = 10000
let redteamHealth = 10000
updateLabels()
function updateLabels(){
  c.textContent = `${blueteamHealth} Health`
  d.textContent = `${redteamHealth} Health`
}
function resetGame(){
  blueteamHealth = 10000
  redteamHealth = 10000
  updateLabels()
}
function reduceredteamHealth(){
  redteamHealth = redteamHealth - 10
  updateLabels()
  if(redteamHealth === 0){
    alert("Blue Team Wins! the game will be reseted.")
    redteamHealth = 0
    updateLabels()
      resetGame()
  }
}
function gainblueteamHealth(){
  blueteamHealth = blueteamHealth + 1
  if(blueteamHealth > 10000){
    blueteamHealth = 10000
    updateLabels()
  }
  updateLabels()
}
function reduceblueteamHealth(){
  blueteamHealth = blueteamHealth - 10
  updateLabels()
  if(blueteamHealth === 0){
    alert("Red Team Wins resetting game...")
    blueteamHealth = 0
    updateLabels()
      resetGame()
  }
}
function gainredteamHealth(){
  redteamHealth = redteamHealth + 1
  updateLabels()
  if(redteamHealth > 10000){
    redteamHealth = 10000
    updateLabels()
  }
}
a.addEventListener('click', reduceredteamHealth)
a.addEventListener('click', gainblueteamHealth)
b.addEventListener('click', reduceblueteamHealth)
b.addEventListener('click', gainredteamHealth)
const a = document.getElementById("button1")
const b = document.getElementById("button2")
const c = document.getElementById("label1")
const d = document.getElementById("label2")
let blueteamHealth = 10000
let redteamHealth = 10000
let blueteamtapCount = 0
let redteamtapCount = 0
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
  if(redteamHealth < 0){
    alert("Blue Team Wins! the game will be reseted.")
    redteamHealth = 0
    updateLabels()
      resetGame()
  }
  blueteamtapCount = blueteamtapCount + 1
  if(blueteamtapCount > 10){
    reduceredteamHealth = reduceredteamHealth - 25
    updateLabels()
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
  if(blueteamHealth < 0){
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
a.addEventListener('touchstart', reduceredteamHealth)
a.addEventListener('touchstart', gainblueteamHealth)
b.addEventListener('touchstart', reduceblueteamHealth)
b.addEventListener('touchstart', gainredteamHealth)
alert("The First button is at the top which is Blue Team, the second button at the bottom is red team, get one team to 0 health to win this is a game to test your tapping speed, you must have a friend or person to play with you, you can still play solo but HAVE FUN!")
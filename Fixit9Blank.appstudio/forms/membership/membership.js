let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];

let memName = "";

btnSub.onclick=function(){
  memName = inptFirstName.value
  if(memName in members)
    lblDisplay.textContent = 'You are a member.'
  else
    lblDisplay.textContent = 'You are not a member.'
}

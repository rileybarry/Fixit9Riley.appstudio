
Jumbotron1.onclick=function(){
  lblOne.value = 'Hello'
}

let s = 'Hello'

Hamburger1.onclick=function(){
  if (typeof(s) == "object") {
    return;
  }
  if (s === "Hello") {
    Hamburger1.hide();
  }
}
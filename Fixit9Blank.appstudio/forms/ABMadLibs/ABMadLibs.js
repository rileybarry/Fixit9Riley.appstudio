let nouns = ['Cow', 'Bluejay', 'Dolphin', 'Dog', 'Cat']
let noun = ''

let verbs = ['run', 'jump', 'skip', 'throw', 'laugh']
let verb = ''

let adjectives = ['funny', 'colorful', 'perfect', 'clean', 'gentle']
let adj = ''

//Dropdown for noun
ABMadLibs.onshow=function() {
  drpNoun.clear()
  for (i = 0; i <= nouns.length - 1; i++)
    drpNoun.addItem(nouns[i])
  drpVerb.clear()
  for (i = 0; i <= verbs.length - 1; i++)
    drpVerb.addItem(verbs[i])
  drpAdj.clear()
  for (i = 0; i <= adjectives.length - 1; i++)
    drpAdj.addItem(adjectives[i])
}

drpNoun.onclick=function(sa){
  if (typeof(sa) == "object"){
  return
  } else {
    noun = sa
    drpNoun.value = sa
  }
}

drpVerb.onclick=function(s){
  if (typeof(s) == "object"){
  return
  } else {
    verb = s
    drpVerb.value = s
  }
}

drpAdj.onclick=function(s){
  if (typeof(s) == "object"){
  return
  } else {
    adj = s
    drpAdj.value = s
  }
}

btnSubm.onclick=function(){
  noun = drpNoun.value
  verb = drpVerb.value
  adj = drpAdj.value
  lblMad.textContent = `A ${noun} in Nebraska was arrested this morning after ${verb}ing in front of a ${adj} ${noun}. The perpetrator had a history of ${verb}ing, but no one - not even her ${noun} - ever imagined she'd ${verb} with a ${noun}.
  Even her ${noun} was surprised. "I always thought she was ${adj}, but I never thought she'd do something like this."
  Either way, we imagine that after witnessing her ${verb}ing with a ${adj} ${noun}, there are probably a whole lot of ${noun}s that are going to need therapy.`
}
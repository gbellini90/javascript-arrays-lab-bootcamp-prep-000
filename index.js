kittens = ["Milo","Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  let newKittens=kittens.concat(name)
  return newKittens
}

function prependKitten(name){
  let newKittens=kittens.unshift(name)
  return newKittens
}
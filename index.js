const app = "I don't do much."

function Arrays () {
    var kittens = ["Milo", "Otis", "Garfield"];
}

function kittens () {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
}

// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
const LEN = cats.length;

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return [...cats.slice(0), name]
}

function prependCat(name) {
    return [name, ...cats.slice(0)]
}

function removeLastCat() {
    const LEN = cats.length;
    return [...cats.slice(0,LEN-1)];
}

function removeFirstCat() {
    return [...cats.slice(1)];
}
let name = "Nick";

let tinyize = function (name) {
  let myName = 'Tiny ' + name + '!';

  return myName;
};

name = tinyize('Rick');
console.log(name);

name = tinyize('Pickle');
console.log(name);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

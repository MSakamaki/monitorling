declare var ga: any;

console.log('start')

const btn1: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#run_exeption1');
const btn2: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#run_exeption2');

btn1.onclick = () => {
  var x: any = {};
  try {
    x['too']();
  } catch (err) {
    console.error(err);
    ga('send', 'exception', {
      'exDescription': err.message,
      'exFatal': false
    });
  }
}

btn2.onclick = () => {
  var x: any = {};
  x['too']();
}

window.onerror = function(message) {
  console.log('windows on error', message);
    ga('send', 'exception', {
      'exDescription': message,
      'exFatal': false
    });
};


class Hoge {
  constructor() { }
  say() {
    console.log('Hello');
  }
}

var v: Hoge = new Hoge();

v.say();
console.log('end')
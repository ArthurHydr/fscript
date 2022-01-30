const charMap = {};

const n = (num) =>
  num === 0 ? '+[]' : Array.from({ length: num }, () => '+!![]').join(' + ');

const s = (str) =>
  str
    .split('')
    .map((l) =>
      l in charMap
        ? charMap[l]
        : `([]+[])[${s('constructor')}][${s('fromCharCode')}](${n(
            l.charCodeAt(0)
          )})`
    )
    .join('+');

charMap.a = `(+{}+[])[${n(1)}]`;
charMap.b = `({}+[])[${n(2)}]`;
charMap.o = `({}+[])[${n(1)}]`;
charMap.e = `({}+[])[${n(4)}]`;
charMap.c = `({}+[])[${n(5)}]`;
charMap.t = `({}+[])[${n(6)}]`;
charMap[' '] = `({}+[])[${n(7)}]`;
charMap.f = `(![]+[])[${n(0)}]`;
charMap.s = `(![]+[])[${n(3)}]`;
charMap.r = `(!![]+[])[${n(1)}]`;
charMap.u = `(!![]+[])[${n(2)}]`;
charMap.i = `((+!![]/+[])+[])[${n(3)}]`;
charMap.n = `((+!![]/+[])+[])[${n(4)}]`;
charMap.S = `([]+([]+[])[${s('constructor')}])[${n(9)}]`;
charMap.g = `([]+([]+[])[${s('constructor')}])[${n(14)}]`;
charMap.p = `([]+(/-/)[${s('constructor')}])[${n(14)}]`;
charMap['\\'] = `(/\\\\/+[])[${n(1)}]`;
charMap.d = `(${n(13)})[${s('toString')}](${n(14)})`;
charMap.h = `(${n(17)})[${s('toString')}](${n(18)})`;
charMap.m = `(${n(22)})[${s('toString')}](${n(23)})`;
charMap.C = `((()=>{})[${s('constructor')}](${s('return escape')})()(${
  charMap['\\']
}))[${n(2)}]`;

const transpileCode = (source) =>
  `(()=>{})[${s('constructor')}](${s(source)})()`;

console.log(
  transpileCode(`

  const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}


  `)
);

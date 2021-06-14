// function hellofunc() { // 함수 선언

//   console.log(1234); // 실행 코드
// }

// hellofunc(); // 함수 호출출하면 1234 출력

// function returnfunc() {
//   return 123; // 함수 밖으로 내보내기
// }

// let a = returnfunc();

// console.log(a); //123

function sum(a, b) { // a, b = 매개변수
  return a + b;
}

let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);

function hello() { // 기명 함수(이름이 있는)
console.log('Hello~');
}

let world = function () { // 익명 함수
  console.log('World~');
}

// 함수 호출
hello();
world();
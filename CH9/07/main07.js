// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click', function () {
//   console.log('Click!!');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
// });

// const boxEls = document.querySelectorAll('.box');
// // boxEls = 찾아진 박스라는 클래스를 가지고 있는 모든 요소의 배열

// boxEls.forEach(function (boxEl, index) { // 찾은요소 반복해서 함수 실행
//   boxEl.classList.add(`order-${index +1}`)
//   console.log(index, boxEl)
// });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'Junear!!';
console.log(boxEl.textContent);

// let boxEl = document.querySelector('.box');
// // document = 브라우저에 정의되어 있는 객채
// // querySelector ('')선택자를 통해 찾을수 있는 요소중 가장 먼저 찾아진 요소 하나만 반환

// console.log(boxEl);

// boxEl.addEventListener('click', function () { 
//   // addEventListener = 두개의 인수 추가가능한 메소드
//   // click = 이벤트, function () {} = 핸들러
//   // 해당 요소 클릭시 함수 호출
//   console.log('Click!!')
// });

const boxEl = document.querySelector('.box');

// boxEl.classList.add('active') // boxEl라는 클래스 요소에 active라는 클래스를 추가하겠다.
// let isoCntains = boxEl.classList.contains('active'); 
// // contains = 포함되어 있는지 없는지 확인하는 메소드
// console.log(isoCntains);

boxEl.classList.remove('active') // boxEl라는 클래스 요소에 active라는 클래스를 지우겠다.
let isoCntains = boxEl.classList.contains('active'); 
// contains = 포함되어 있는지 없는지 확인하는 메소드
console.log(isoCntains);


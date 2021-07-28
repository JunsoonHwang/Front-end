// const result = 'Hello world!'.indexOf('world')
// console.log(result)

// const { indexOf } = require("lodash")

// const str = '0123'
// console.log(str.length) // str을 '0123'으로 대체가능

// const str = 'Hello world!'
// console.log(str.indexOf('world') !== -1)

// const str = 'Hello world!'
// console.log(str.slice(6, 11)) 
// // slice(시작 지점, 11번째 문장의 직전까지) 잘라서 출력

// const str = 'Hello world!'
// console.log(str.replace(' world!', ''))
// // replace(문장 선택, 대체할 문장)

// const str = 'wnstns13@naver.com'
// console.log(str.match(/.+(?=@)/) [0])
// // (/.+(?=@)/) = 정규표현식 @ 앞에 0번째로 시작하는
// // 문장을 최대한 많이 사용하겠다

const str = '    Hello world!  '
console.log(str.trim())
// trim = 해당 부분에 공백문자를 제거하고 출력하겠다
// 사용자 로그인시 실수로 띄어쓰기를 한 부분을 
//  제거하고 입력 받겠다
const body = document.querySelector('body');
const rgbvalue = document.querySelector('.colorValue');
const button = document.querySelector('button');

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
rgbvalue.innerHTML = '#ffffff';

//let randomNumbers = []; 수정 전

button.addEventListener('click', function() {
  //randomNumbers = []; 수정 전
  let randomNumbers = []; //변수 선언을 전역 변수가 아닌 로컬 변수로 만들어주면 다시 빈 배열을 안만들어도 된다.
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexNumbers.length);
    randomNumbers.push(hexNumbers[index]);
  }
  let chooseColor = `#${randomNumbers.join('')}`;
  console.log(chooseColor);
  rgbvalue.innerHTML = chooseColor;
  body.style.backgroundColor= chooseColor;
})
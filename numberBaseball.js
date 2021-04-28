const number = document.querySelector('input');
const count = document.querySelector('.count');
const score = document.querySelector('.score');
const resultNumber = document.querySelector('.resultNumber');
const resultScore = document.querySelector('.resultScore');
let tenCount = 10;
count.textContent = `Count: ${tenCount}`;

let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

let randomNumbers = [];
for (let i = 0; i < 3; i++) {
  const index = Math.floor(Math.random() * numbers.length);
  randomNumbers.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(randomNumbers);

number.addEventListener('change', function() {
  if (number.value.length === 3) {
    if (number.value === randomNumbers.join('')) {
      score.textContent = 'HomeRun!';
      // numbers = [];
      // for (let i = 0; i < 10; i++) {
      //   numbers.push(i);
      // }
      // randomNumbers = [];
      // for (let i = 0; i < 3; i++) {
      //   const index = Math.floor(Math.random() * numbers.length);
      //   randomNumbers.push(numbers[index]);
      //   numbers.splice(index, 1);
      // } 홈런하고 바로 다음 게임으로 설정되게 하고 싶었지만 너무 복잡하게 되어 다음 기회에 하기로 하였음
    } else {
      let striek = 0;
      let ball = 0;
      for (const [rindex, rnumber] of randomNumbers.entries()) {
        for ( const [nindex, nnumber] of number.value.split('').entries()) {
          // console.log(rindex, rnumber, typeof(rnumber), nindex, nnumber, typeof(nnumber));
          if (rindex === nindex && rnumber === Number(nnumber)) {
            striek += 1;
          } else if (rnumber === Number(nnumber)) {
            ball += 1;
          }
        } 
      }
      score.textContent = '';
      score.textContent = `${striek}Striek ${ball}Ball`;
      resultNumber.innerText += `${number.value}\n`;
      // 여기서 textContent쓰면 \n이 text상 먹히지 않아서 innerText를 썼음
      resultScore.innerText += `${score.textContent}\n`;
      // Count하는 if 함수
      if (tenCount > 1) {        
        tenCount--;
        count.textContent = `Count: ${tenCount}`;
      } else {
        alert('You lose 😥');
      }
      //
    }
    number.value = '';
  } else {
    alert('3자리 숫자를 적어주세요.');
    number.value = '';
  }
})

// numberbaseball하다가 찾은 공부하고 싶은 자료
// function printNumber() {
//   const yourNumber = document.querySelector('#number').value;
//   document.querySelector('#result').innerText = yourNumber;
  
// } input에 onkeyup = "printNumber()" 넣으면 input 값을 실시간으로 #result값에 넣어준다.

// const result = document.querySelector('#result');
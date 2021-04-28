// function printNumber() {
//   const yourNumber = document.querySelector('#number').value;
//   document.querySelector('#result').innerText = yourNumber;
  
// } input에 onkeyup = "printNumber()" 넣으면 input 값을 실시간으로 #result값에 넣어준다.

// const result = document.querySelector('#result');
const number = document.querySelector('input');
const count = document.querySelector('.count');
const score = document.querySelector('.score');
let tenCount = 10;
count.textContent = `tenCount: ${tenCount}`;

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
        reset();
      } else {
        let striek = 0;
        let ball = 0;
        for (const [rindex, rnumber] of randomNumbers.entries()) {
          for ( const [nindex, nnumber] of number.value.split('').entries()) {
            console.log(rindex, rnumber, typeof(rnumber), nindex, nnumber, typeof(nnumber));
            if (rindex === nindex && rnumber === Number(nnumber)) {
              striek += 1;
            } else if (rnumber === Number(nnumber)) {
              ball += 1;
            }
          } 
        } console.log(striek, ball);
        score.textContent = '';
        console.log(score.textContent);
        score.textContent = `${striek}Striek ${ball}Ball`;
        if (tenCount === 0) {
          alert('You lose 😥');
        } else {
        tenCount--;
        count.textContent = `tenCount: ${tenCount}`;
        }
      }
      number.value = '';
    } else {
      alert('3자리 숫자를 적어주세요.');
      number.value = '';
    }
})

function reset() {
  numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }
  randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    randomNumbers.push(numbers[index]);
    numbers.splice(index, 1);
  }
}


const sliderList = document.querySelectorAll('.slider');
const circlesBtn = document.querySelectorAll('.circle');
const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');

let current = 0;

function remove() {
  sliderList[current].classList.remove('active');
  circlesBtn[current].classList.remove('active');
}
function add() {
  sliderList[current].classList.add('active');
  circlesBtn[current].classList.add('active');
}
function next() {
  remove();
  current = current + 1 < 4 ? current + 1 : 0;
  add();
}
nextBtn.addEventListener('click', next)

function pre() {
  remove();
  current = current - 1 >= 0 ? current - 1 : 3;
  add();
}
preBtn.addEventListener('click', pre)

for (let i = 0; i < 4; i++) {
  circlesBtn[i].addEventListener('click', function (e) {
    let index = e.target.value;
    remove();
    current = index;
    add();
  });
}

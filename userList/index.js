let users = [
  {
    name: 'Jason',
    price: 63089,
  },
  {
    name: 'Olson',
    price: 41065,
  },
  {
    name: 'Jake',
    price: 51628,
  },
  {
    name: 'Kasey',
    price: 63450,
  },
];
// dummyDate안에 프로퍼티 price에 randomPrice 넣는 함수
const randomPrice = () => {
  const randomNumber = Math.floor(Math.random() * 100000);
  return randomNumber;
}

let dummyData = [
  {
    name: 'Liam',
    price: randomPrice(),
  },
  {
    name: 'Emma',
    price: randomPrice(),
  },
  {
    name: 'Ava',
    price: randomPrice(),
  },
  {
    name: 'Sophia',
    price: randomPrice(),
  },
  {
    name: 'Jace',
    price: randomPrice(),
  },
  {
    name: 'Charlotte',
    price: randomPrice(),
  },
  {
    name: 'Amelia',
    price: randomPrice(),
  },
  {
    name: 'Harper',
    price: randomPrice(),
  },
  {
    name: 'Lucas',
    price: randomPrice(),
  },
  {
    name: 'Benjamin',
    price: randomPrice(),
  },
  {
    name: 'Mason',
    price: randomPrice(),
  },
  {
    name: 'Ethan',
    price: randomPrice(),
  },
];



const userList = document.querySelector('.user-list');


function appendUsers() {
  while (userList.hasChildNodes()) {
    userList.removeChild(userList.lastChild);
  }
  for ( let user of users ) {
    const div = document.createElement('div');
    div.classList.add('user');
    div.innerHTML = `${user.name} $${user.price}`;
    userList.append(div);
  }
}

//addBt click event
const addBt = document.querySelector('.addUser');
addBt.addEventListener('click', function () {
  users.push(dummyData.shift());
  appendUsers();
})

//removeBt click event
const removeBt = document.querySelector('.removeUser');
removeBt.addEventListener('click', function () {
  dummyData.unshift(users.pop());
  appendUsers();
});


// addPriceBt click event
const addPrice = document.querySelectorAll('.addPrice');
for (let i = 0; i < 3; i++) {
  addPrice[i].addEventListener('click', function (e) {
    let price = Number(e.target.value);

    for ( let user of users) {
      user.price += price;
    }
    appendUsers();
  });
}

// sortBt click event
const sortBt = document.querySelector('.sortUser');
sortBt.addEventListener('click', function () {
  users.sort(function (a, b){
    return a.price - b.price;
  });
  appendUsers();
})

// const sumMoneyBt = document.querySelector('.sumMoney');



appendUsers();




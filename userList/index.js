let users = [
  {
    name: 'Jason',
    price: '63089',
  },
  {
    name: 'Olson',
    price: '41065',
  },
  {
    name: 'Jake',
    price: '51628',
  },
  {
    name: 'Kasey',
    price: '63450',
  },
];

const userListContainer = document.querySelector('.user-list');
let userList = [];

for ( let i = 0; i < users.length; i++ ) {
  userList.push(users[i]);
  userListContainer.innerHTML += `<div>${userList[i].name} $${userList[i].price}</div>`;
}

// dummyDate안에 프로퍼티 price에 randomPrice 넣는 함수
const randomPrice = function() {
  let price = [];

  for ( let i = 0; i < 6; i++ ) {
    const randomNumber = Math.floor(Math.random() * 10);
    price.push(randomNumber);
  }
  const priceJoin = `$${price.join('')}`;
  return priceJoin; 
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
// Add User Event
const addBt = document.querySelector('.addUser');
let index = 0;

addBt.addEventListener('click', function() {
  if ( index < dummyData.length ) {
    userList.push(dummyData[index]);
    userListContainer.innerHTML += `<div> ${userList[index + users.length].name} ${userList[index + users.length].price}</div>`;
    index++
  } else {
    alert('no more any list');
  }
})

// Remove User Event
const removeBt = document.querySelector('.removeUser');

removeBt.addEventListener('click', function() {
  if ( index > 0 - users.length ) {
    userList.splice(userList[userList.length], 1);
    //userListContainer.innerText -= `${userList[index - users.length].name} $${userList[index - users.length].price}\n`;
    // 이 부분을 어떻게 해야할지 모르겠음.
  } else {
    alert('please add user');
  }
})



//for ( let i = 0; i < users.length; i++ ) {
// userListContainer.innerText += `${userList[i].name} $${userList[i].price}\n`;
  
//}
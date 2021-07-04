const addTransaction = document.querySelector('.add-transaction');
const inputText = document.querySelector('.input-text');
const inputAmount = document.querySelector('.input-amount');
const incomValue = document.querySelector('.tracker-category__income-value');
const expenseValue = document.querySelector('.tracker-category__expense-value');
const trackerhistoryList = document.querySelector('.tracker-history__list');

const ExpenseList_LS = 'ExpenseList';
let expenseListArr = [];

function delExpenseList(e) {
  const btn = e.target;
  const li = btn.parentNode;
  trackerhistoryList.removeChild(li);
  const cleanExpenseList = expenseListArr.filter(function (expenseItem){
    return expenseItem.id !== parseInt(li.id);
  });
  expenseListArr = cleanExpenseList;
  saveExpenseData();
}

function saveExpenseData() {
  localStorage.setItem(ExpenseList_LS, JSON.stringify(expenseListArr));
}

function addList(Name, Price) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = expenseListArr.length + 1;
  delBtn.innerText = '❌';
  delBtn.addEventListener('click', delExpenseList);

  if (Number(Price) > 0 ){
    li.classList.add('plus');
  } else {
    li.classList.add('minus');
  }

  span.innerText = `${Name} ${Price}`;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  trackerhistoryList.appendChild(li);
  const expenseListObj = {
    Name,
    Price,
    id: newId,
  }
  expenseListArr.push(expenseListObj);
  // console.log(expenseListArr);
  saveExpenseData();
}

function reset() {
  const currentName = inputText.value;
  const currentValue = inputAmount.value;
  addList(currentName, currentValue);
  // console.log(currentName, currentValue)
  inputText.value = '';
  inputAmount.value = '';
}

function loadList() {
  const expenseList = localStorage.getItem(ExpenseList_LS);
  console.log(expenseList);
  if(expenseList !== null){
    const parsedExpenseList = JSON.parse(expenseList);
    parsedExpenseList.forEach(function (expenseItem){
      addList(expenseItem.Name, expenseItem.Price);
    });
  }
}

function init() {
  loadList();
  addTransaction.addEventListener('click', reset);
}
init();
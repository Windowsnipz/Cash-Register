let price = 1.87;
let cid = [         // cash in drawer
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
const resultText = document.getElementById('result-text');

purchaseBtn.addEventListener('click', getChange);

function getChange() {  // highest order function that runs when button is clicked
  checkCash();
}

function checkCash() {  // checks cases when cash is not enough or exact change
  if (parseFloat(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
  } else if (parseFloat(cash.value) === price) {
    changeDueDiv.classList.add('input-wrapper');
    resultText.textContent = 'No change due - customer paid with exact cash';

  }
}
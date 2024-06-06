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

purchaseBtn.addEventListener('click', getChange);

function getChange() {  // highest order function that runs when button is clicked
  validateInput();
}

function validateInput() {  // validate correct user input

}
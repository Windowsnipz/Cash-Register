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
const totalText = document.getElementById('total');

// render price and cash in drawer
totalText.innerText = `Total: ${price}`;
renderCashInDrawer();

purchaseBtn.addEventListener('click', getChange);

function renderCashInDrawer() { // lists cid array values to the html
  const registerChangeDiv = document.getElementById('register-change');
  registerChangeDiv.innerHTML = '';
  
  registerChangeDiv.innerHTML += `<h3>Cash Drawer</h3>`;
  for (let i = 0; i < cid.length; i++) {
    registerChangeDiv.innerHTML += `<p class="money">${cid[i][0]}: $${cid[i][1].toFixed(2)}</p>`;
  }
}


function getChange() {  // highest order function that runs when button is clicked
  const needsChange = checkCash();
  if (needsChange) {
    renderChange();
  }
}

function checkCash() {  // checks cases when cash is not enough or exact change
  if (parseFloat(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return false;
  } else if (parseFloat(cash.value) === price) {
    changeDueDiv.classList.add('input-wrapper');
    resultText.textContent = 'No change due - customer paid with exact cash';
    cash.value = '';
    return false;
  }
  return true;
}

function renderChange() {
  resultText.textContent = ''; // clear div


  let change = parseFloat((parseFloat(cash.value) - price).toFixed(2));
  const changeArr = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];

  for (let i = cid.length - 1; i >= 0; i--) {  // loop through cid backwards
    let denomination;
    switch (cid[i][0]) {
      case "PENNY":
        denomination = 0.01;
        break;
      case "NICKEL":
        denomination = 0.05;
        break;
      case "DIME":
        denomination = 0.1;
        break;
      case "QUARTER":
        denomination = 0.25;
        break;
        case "ONE":
        denomination = 1;
        break;
      case "FIVE":
        denomination = 5;
        break;
      case "TEN":
        denomination = 10;
        break;
      case "TWENTY":
        denomination = 20;
        break;
      case "ONE HUNDRED":
        denomination = 100;
        break;
     }

     while (change >= denomination && cid[i][1] >= denomination) {
      cid[i][1] -= denomination;
      change -= denomination;
      changeArr[i][1] += denomination;
     }
   }
  


  const updatedChangeArr = changeArr.filter((currVal) => { // update change array to change items possessed
    return currVal[1] > 0;
  });


  changeDueDiv.classList.add('input-wrapper'); // ad class to the change due div
  renderCashInDrawer(); // update the html to the changed cash in drawer
  for (let item of updatedChangeArr) { // update this to result text
    resultText.innerHTML += `<p>${item[0]}: $${item[1]}</p>`;
  }

}

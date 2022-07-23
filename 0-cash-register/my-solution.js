class CurrencyUnit {
  constructor(name, sum){
    this.name = name;
    let amount = 0;
    switch(name){
      case `PENNY`: {
        amount = 0.01;
        break;
      };
      case `NICKEL`: {
        amount = 0.05;
        break;
      };
      case `DIME`: {
        amount = 0.1;
        break;
      };
      case `QUARTER`: {
        amount = 0.25;
        break;
      };
      case `ONE`: {
        amount = 1;
        break;
      };
      case `FIVE`: {
        amount = 5;
        break;
      };
      case `TEN`: {
        amount = 10;
        break;
      };
      case `TWENTY`: {
        amount = 20;
        break;
      };
      case `ONE HUNDRED`: {
        amount = 100;
        break;
      };
    }
    this.amount = amount;
    this.sum = sum;
    if(amount !== 0){
      this.count = Math.round(sum / amount);
    } else {
      this.count = 0;
    }
  }

  getCash(count) {
    if(count > this.count) {
      return this.sum;
    }
    const sum = this.amount * count
    this.count -= count;
    this.sum -= sum;
    return sum;
  }
}

const float = (num, x = 0) => {
  const newNum = num.toString()
  const index = newNum.indexOf(".");
  const toFloat = index + x;
  const check = toFloat + 1;
  let result = ``;

  for(let i = 0; i < newNum.length; i++){
    if(i === toFloat){
      if(newNum[check] >= 5){
        result += parseInt(newNum[i]) + 1;
      } else {
        result += newNum[i];
      }
      break;
    } else {
      result += newNum[i];
    }
  }

  return parseFloat(result);
}

function checkCashRegister(price, cash, cid) {
  const status = ["INSUFFICIENT_FUNDS", "OPEN", "CLOSED"];
  const cashInDrawer = [];
  const result = {
    status: status[0],
    change: [],
  };

  // isi cash in drawer nya
  cid.forEach(c => {
    cashInDrawer.push(new CurrencyUnit(c[0], c[1]))
  })

  // Cek uang kembaliannya
  let change = cash - price;

  // cek drawer
  for(let i = (cashInDrawer.length - 1); i >= 0; i--){
    const cash = cashInDrawer[i];
    
    if(change - cash.amount >= 0){
      // To prevent float weird math binnary kind of stuff
      // ex:
      // 97.24 - 60 = 47.23999999995 ?!?!?!???
      change = float(change, 2);

      const count = Math.floor(change / cash.amount);
      const cashToChange = cash.getCash(count);
      result.change.push([cash.name, cashToChange])

      change -= cashToChange;
    } 
  }

  if(change !== 0){
    result.change = [];
    return result;
  }

  // Cek duit di drawer abis 'closed'
  if(result.change.length > 0){
    let sum = 0;

    cashInDrawer.forEach(cash => {
      sum += cash.sum;
    })

    if(sum === 0){
      result.status = status[2];
      result.change = cid;
    } else {
      result.status = status[1];
    }
  }

  return result;
}

// expected output:
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);

// expected output:
// { status: 'INSUFFICIENT_FUNDS', change: [] }
console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);

// expected output:
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);


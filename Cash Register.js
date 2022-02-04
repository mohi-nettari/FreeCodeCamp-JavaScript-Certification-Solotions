var arr = {
  "ONE HUNDRED":100,
  "TWENTY":20,
  "TEN":10,
  "FIVE":5,
  "ONE": 1,
  "QUARTER":0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY" : 0.01,
}
var visited =[];
function checkForUnit(dif,next=false) {
  for (const key in arr) {
    if (arr.hasOwnProperty.call(arr, key)) {
      if(dif >= arr[key]){
        if(next > 0 || visited.includes(arr[key])){
        next-=1;
          continue;
        }
        visited.push(arr[key]);
        return key; 
      }
    }
  }
}

function cashInDrawer(drawer){
  var total = 0;
  drawer.forEach(unit => {
    total += unit[1];
  });
  return parseFloat(total).toFixed(2);
}

function testCase(status, change = []){
  if(status == "fail"){
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }else if(status == "open") {
    return {
      status: "OPEN",
      change: change
    };
  }else if(status =="close") {

    return {
      status: "CLOSED",
      change: change
    }
  }
}

var res;

function isEnough(dif,unit,howMult,cid){

  
  var theCashInTheDrawer ;
  cid.forEach(item => {
    if(item[0] == unit){
      theCashInTheDrawer = item[1];
    }
  })
  if(howMult <= 0){
    return false;
  }

  if(theCashInTheDrawer > 0){
    if(theCashInTheDrawer - (howMult * arr[unit]) >= 0){
      res = howMult;
    }else {
      isEnough(dif, unit,howMult-1, cid);
    }
  }else {
    return false;
  }


  return res;
}

function sarf(dif,cid){
  var ans = [];
  var level =1;
  var unit = checkForUnit(dif);
  while(dif > 0){
    var howMult = Math.trunc(dif/arr[unit]);
    var canWeSub = isEnough(dif,unit,howMult,cid);
    
    if(canWeSub !== false){
      howMult = canWeSub;
      ans.push([unit,(arr[unit] * howMult)]);
      dif-= (arr[unit] * howMult)
      dif = parseFloat(dif).toFixed(2);
      unit = checkForUnit(dif);
      level =1;
    } else {
      unit = checkForUnit(dif,level);
      if(typeof(unit) == "undefined"){
        return false;
      }
      level++;
    }
  }

  return ans;

}


function checkCashRegister(price, cash, cid) {
  let change;
  let diff = cash - price;
  if(diff > 0) {
    if(cashInDrawer(cid) < diff){
      change = testCase("fail");
    }else if(cashInDrawer(cid) == diff){
      change = testCase("close",cid);
    }else {
     change = testCase("open",sarf(diff,cid));
    //  change.sort(function(a, b){return a - b});
     if(!change.change){
       change = testCase("fail");
     }
    }
  }else {
    change = testCase("fail");
  }
  return change;
}
  
var res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
 console.log(res);
document.querySelector(".demo h1").innerHTML = JSON.stringify(res);

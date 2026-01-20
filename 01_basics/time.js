function calcSum (){
    let a=0;
    for(let i=0; i<=100000; i++){
        a=a+i;
    }
    return a;
}

const beforeCal= new Date();
const beforeTimeInMili= beforeCal.getTime();
calcSum();
const afterCal= new Date();
const afterTimeInMili= afterCal.getTime();
console.log(afterTimeInMili - beforeTimeInMili )


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

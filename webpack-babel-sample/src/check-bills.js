export function checkBills(){
  const bills = [1000, 500, 200, 50, 30]
  let input1 = 1480
  console.log("INPUT NUMBER: "+input1)

  bills.forEach(function(val,index){
    let div = input1 % val
    count = (input1 - div) / val
    console.log(val+": "+count)
    input1 = div
  })
}

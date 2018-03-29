export function checkBills(){
  const bills = [1000, 500, 200, 50, 30]
  let input1 = 2080
  console.log("INPUT NUMBER: "+input1)

  bills.forEach(function(val,index){
    const div = input1 % val
    const count = (input1 - div) / val
    console.log(val+": "+count)
    input1 = div
  })
}

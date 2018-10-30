 function feeBank(form, to, amount) {
   if (amount <= 0 || amount > 20000 || isNmber(amount)) {
     return null
   }
   if (form === to) {
     return 0
   }
   if (amount <= 5000) {
     return 0
   }
   if (amount <= 10000) {
     return 1
   }
   if (amount <= 15000) {
     return 2
   }
   return 3
 }
function  isNmber(number) {
  if(number % 1 === 0){
      return false
    } 
      return true 
    
}
 module.exports = feeBank;
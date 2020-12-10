/* exported Account */
function Account (number,holder){
  this.number = number
  this.holder = holder
  this.transactions=[]
}

Account.prototype.deposit=function(amount){
  if (Math.sign(amount)===1){
    var transaction = new Transaction("deposit",amount)
    this.transactions.push(transaction)
    return true
  } else {
    return false
  }
}
Account.prototype.withdraw=function(amount){
  if (Math.sign(amount)===1){
    var transaction = new Transaction("withdrawal",-amount)
    this.transactions.push(transaction)
    return true
  }else{
    return false
  }
}
Account.prototype.getBalance=function(){
  if (this.transactions.length===0){
    return 0
  } else if (this.transactions.length!==0){
    var sum =0;
    for (var i=0;i<this.transactions.length;i++){
      sum += this.transactions[i].amount
    }
    return sum
  }
}

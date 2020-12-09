/* exported Account */
function Account (number,holder){
  this.number = number
  this.holder = holder
  this.transactions=[]
}

Account.prototype.deposit=function(amount){
  if (Math.sign(amount)===1){
    this.transactions.push(amount)
    return true
  } else {
    return false
  }
}
Account.prototype.withdraw=function(amount){
  if (Math.sign(amount)===1){
    this.transactions.push(-amount)
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
      sum += this.transactions[i]
    }
    return sum
  }
}

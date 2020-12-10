/* exported Bank */
function Bank(){
  this.nextAccountNumber=1
  this.accounts=[]
}

Bank.prototype.openAccount=function(holder,balance){
  if (Math.sign(balance)!==1){
    return null
  } else if (Math.sign(balance)===1){
    var account =new Account(this.nextAccountNumber,holder)
    account.deposit(balance)
    this.accounts.push(account)
    return this.nextAccountNumber++
  }
}

Bank.prototype.getAccount=function(number){
  if (this.accounts.length>0 && number<=this.accounts.length){
    return this.accounts[number-1]
  }
  return null
}

Bank.prototype.getTotalAssets=function(){
  if (this.accounts.length===0){
    return 0
  } else if (this.accounts.length>0){
    var total = 0
    for (var i=0;i<this.accounts.length;i++){
      total += this.accounts[i].getBalance()
    }
    return total
  }
}

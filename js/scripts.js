function BankAccount(name, balance) {
  this.name = name;
  this.balance = parseInt(balance);
}

BankAccount.prototype.deposit = function(deposit) {
  //code to add deposit to object's balance
  this.lastDeposit = deposit;
  this.balance = this.balance + deposit;
}

BankAccount.prototype.withdrawal = function(withdrawal) {
  //code to subtract withdrawal from object's balance
  this.lastWithdrawal = withdrawal;
  this.balance = this.balance - withdrawal;
}

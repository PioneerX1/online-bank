//BUSINESS LOGIC
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

//USER INTERFACE LOGIC
$(document).ready(function() {
  $("#register-form").submit(function() {
    event.preventDefault();
    var inputName = $("#new-account-name").val();
    var inputBalance = $("#new-account-balance").val();
    var account = new BankAccount(inputName, inputBalance);

    $("ul#account-list").append("<li>"+"<span class='account-name'>"+account.name+"<span id='hidden-account'>"+account.balance+"</span>"+"</span>"+ "</li>");

    //add click event listener to names on account list
    $(".account-name").last().click(function() {
      console.log('js callled');
      $("#hidden-account").show();
    });
  });
});

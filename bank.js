//---------- Account ----------  

//Money Amounts
const Deposit = document.getElementById("Deposit");
const Withdraw = document.getElementById("Withdraw");
const Balance = document.getElementById("Balance");

//Input Fields 
const DepositField = document.getElementById("DepositField");
const WithdrawField = document.getElementById("WithdrawField");

//Buttons
const DepositButton = document.getElementById("DepositButton");
const WithdawButton = document.getElementById("WithdrawButton");

//Event Listeners
DepositButton.addEventListener("click", function () {
	const currentDeposit = parseFloat(Deposit.innerText);
	const currentBalance = parseFloat(Balance.innerText);
	const depositAmount = parseFloat(DepositField.value);

	DepositField.value = "";
	WithdrawField.value = "";

	//Checking Input Validiy
	if (!depositAmount || depositAmount < 0) {
		alert("Requires Deposit Amount > 0");
		return;
	}

	Deposit.innerText = depositAmount + currentDeposit;
	Balance.innerText = depositAmount + currentBalance;

});


WithdawButton.addEventListener("click", function () {
	const currentWithdraw = parseFloat(Withdraw.innerText);
	const withdrawAmount = parseFloat(WithdrawField.value);
	const currentBalance = parseFloat(Balance.innerText);

	DepositField.value = "";
	WithdrawField.value = "";

	//Checking Input Validiy
	if (!withdrawAmount || withdrawAmount < 0) {
		alert("Requires Withdraw Amount > 0");
		return;
	}

	//Checking if withdrawAmount 
	//exceeds currentBalance 
	const isExceeded = withdrawAmount > currentBalance;
	if (isExceeded) {
		alert("Balance is insufficuent");
		return;
	}

	Withdraw.innerText = currentWithdraw + withdrawAmount;

	Balance.innerText = currentBalance - withdrawAmount;

})

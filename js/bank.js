//---------- Account ----------  


//Function
//to grab Element Value 
function getElementValue(elementId) {
	const element = document.getElementById(elementId);
	const floatConverted = parseFloat(element.innerText);

	return floatConverted;


}

//Function
//to grab Input Field Value 
function getInputValue(inputFieldId) {
	const field = document.getElementById(inputFieldId);
	const floatConverted = parseFloat(field.value);

	//Clearing Input field 
	//after getting value from it 
	field.value = "";

	//Checking Validity
	if (!floatConverted || floatConverted < 0) {
		alert("Requires Amount in Number > 0");
		return 0;
	}
	return floatConverted;
}

//Function 
//to set Element value
function setElementValue(elementId, updatedValue) {
	const element = document.getElementById(elementId);
	element.innerText = updatedValue;
}

//These are no longer need 
//Handled by Functional Approach 
/*----------------------------------
//Money Amounts
const Deposit = document.getElementById("Deposit");
const Withdraw = document.getElementById("Withdraw");
const Balance = document.getElementById("Balance");

//Input Fields 
const DepositField = document.getElementById("DepositField");
const WithdrawField = document.getElementById("WithdrawField");
----------------------------------*/

//Buttons
const DepositButton = document.getElementById("DepositButton");
const WithdawButton = document.getElementById("WithdrawButton");

//Event Listeners

//For DEPOSITE BUTTON
DepositButton.addEventListener("click", function () {
	//Getting Values
	const currentDeposit = getElementValue("Deposit");
	const currentBalance = getElementValue("Balance");
	const depositAmount = getInputValue("DepositField");

	//Setting Values
	setElementValue("Deposit", currentDeposit + depositAmount);
	setElementValue("Balance", currentBalance + depositAmount);


});


//For WITHDRAW BUTTON
WithdawButton.addEventListener("click", function () {
	//Getting Values
	const currentWithdraw = getElementValue("Withdraw");
	const withdrawAmount = getInputValue("WithdrawField");
	const currentBalance = getElementValue("Balance");


	//Checking if withdrawAmount 
	//exceeds currentBalance 
	const isExceeded = withdrawAmount > currentBalance;
	if (isExceeded) {
		alert("Balance is insufficuent");
		return;
	}

	//Setting Values 
	setElementValue("Balance", currentBalance - withdrawAmount);
	setElementValue("Withdraw", currentWithdraw + withdrawAmount);

})

//---------- Login Form ----------  

//Grabbing Elements
const loginButton = document.getElementById("login-button");
const EmailField = document.getElementById("EmailField");
const PasswordField = document.getElementById("PasswordField");


//Handling Submission
loginButton.addEventListener("click", function () {
	const email = "sontan@baap.com";
	const password = "123456";

	//Conditions
	const isInvalidEmail = EmailField.value !== email;
	const isInvalidPassword = PasswordField.value !== password;

	if (isInvalidEmail || isInvalidPassword) {
		alert('Wrong Email or Password');
		return;
	}

	window.location.href = "bank.html";
});



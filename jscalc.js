function calc() { //function to calculate 
	var a = parseInt(document.querySelector("#value1").value); //declare a variable a take the value of the form element value1 as an int
	var b  = parseInt(document.querySelector("#value2").value); //declare a variable b take the value of the form element value2 as an int
	var op = document.querySelector("#operator").value; //declare a variable op take the value of the form element operater as string
	var calculate; //set a variable to store the answer of the calculation
	if (op == "add"){ //if the operation is add
		calculate = a + b; //add the 2 vars
	} else if (op == "sub") //elsif the operation is subtract
		{
		calculate = a - b; //take away the 2 vars
	} else if(op == "div"){ //elsif the operation is divide
		calculate = a / b;
	} else if (op == "mul"){ //elsif the operation is multiply
		calculate = a * b;
	}
	document.querySelector("#result").innerHTML=calculate; //put the result into the div id result
}


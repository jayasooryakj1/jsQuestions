function myFun(){				
	var opt = prompt("1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");
	while(opt!=5){
		var n1= Number(prompt("Enter number 1: "));
		var n2= Number(prompt("Enter number 2: "));
		switch(opt){
			case("1"):alert(n1+n2);
				break;
			case("2"):alert(n1-n2);
				break;
			case("3"):alert(n1*n2);
				break;
			case("4"):alert(n1/n2);
				break;
			default:alert("Invalid option");
		}
		var opt = prompt("1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");
	}
}
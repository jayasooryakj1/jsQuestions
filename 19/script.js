function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	switch(n){
		case 1:document.getElementById("d").value="Sunday";
			break;
		case 2:document.getElementById("d").value="Monday";
			break;
		case 3:document.getElementById("d").value="Tuesday";
			break;
		case 4:document.getElementById("d").value="Wednesday";
			break;
		case 5:document.getElementById("d").value="Thursday";
			break;
		case 6:document.getElementById("d").value="Friday";
			break;
		case 7:document.getElementById("d").value="Saturday";
			break;
		default:document.getElementById("d").value="Enter 1 to 7"
	}
	
}
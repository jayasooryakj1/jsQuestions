function myFun(){				
	var n=document.getElementById("n").value;
	if(n== n.split("").reverse().join(""))
		document.write(n+" is a palindrome")
	else
		document.write(n+" is a not a palindrome")
	
}
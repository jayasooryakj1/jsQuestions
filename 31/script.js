function myFun(){				
	var n=Number(document.getElementById("n").value);
	var p=1;
	var d;
	while(n>0){
		d=n%10;
		p*=d;
		n=Math.floor(n/10);
	}
	document.write("product of numbers: "+p);
}
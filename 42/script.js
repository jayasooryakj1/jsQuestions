function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	var hra=0;
	var da=0;
	if(n<=10000){
		hra=n*0.08;
		da=n*0.1
	}
	else
		if(n<=20000){
			hra=n*0.16;
			da=n*0.20;
		}
		else
			if(n>20000){
				hra=n*0.24;
				da=n*0.3;
			}
	document.write("Gross salary : "+(n+hra+da));
}
function myFun(){				
	var n=document.getElementById("n").value;
	var total=0;
	var n1=n;
	if(n1>50){
		total=total+(2.60*50);
		n1-=50;
		
		if(n1>50){
			total=total+(3.25*50);
			n1-=50;
			if(n1>100){
				total=total+(5.65*100);
				n1-=100;
				if(n1>0){
					total+=(n1*7.25);
				}
			}
			else{
				total=total+(5.65*n1);
			}
		}
		else{
			total=total+(3.25*n1);
		}
	}
	else{
		total=total+(2.60*n1);
	}
	if(n>700)
		total+=(total*0.005);
	document.write("bill : "+total);
}
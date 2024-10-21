function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	var first=0,second=1,third=0;
	document.write(first+" "+second+" ");
	while(third<n){
		third=first+second
		document.write(third+" ");
		first=second;
		second=third;
	}
}
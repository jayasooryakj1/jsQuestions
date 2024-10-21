function myFun(){				
	var n=document.getElementById("n").value;
	var fiveHun=0;
	var hun=0;
	var fifty=0;
	var ten=0;
	var five=0;
	var one=0;
	fiveHun=Math.floor(n/500);
	n%=500;
	hun=Math.floor(n/100);
	n%=100;
	fifty=Math.floor(n/50);
	n%=50;
	ten=Math.floor(n/10);
	n%=10;
	five=Math.floor(n/5);
	n%=5;
	one=Math.floor(n/500);
	var sum = fiveHun+hun+fifty+ten+five+one;
	document.write("number of 500 notes: "+fiveHun+"<br>");
	document.write("number of 100 notes: "+hun+"<br>");
	document.write("number of 50 notes: "+fifty+"<br>");
	document.write("number of 10 notes: "+ten+"<br>");
	document.write("number of 5 notes: "+five+"<br>");
	document.write("number of 1 notes: "+one+"<br>");
	document.write("total number of notes: "+sum);
}
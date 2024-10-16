function add(){
		var n1=parseInt(document.getElementById("num1").value);
		var n2=parseInt(document.getElementById("num2").value);
		var n3=parseInt(document.getElementById("num3").value);
		document.getElementById("sum").value=n1+n2+n3;	
		document.getElementById("avg").value=((n1+n2+n3)/3);
	}
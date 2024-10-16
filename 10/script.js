
	function add(){
		var n1=parseFloat(document.getElementById("n1").value);
		if(n1%2==0)
			document.getElementById("eo").value="even";
		else
			document.getElementById("eo").value="odd";
	}
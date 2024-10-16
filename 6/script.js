function add(){
		var p=parseInt(document.getElementById("p").value);
		var r=parseInt(document.getElementById("r").value);
		var t=parseInt(document.getElementById("t").value);
		document.getElementById("ci").value=((p*(1-(r/100)))**t)-p;
	}
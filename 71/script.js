function myFun(){				
	var s = document.getElementById("s").value;
	var t=0, tempp, temp='';
	for(var i=0;i<s.length;i++){
		t=s.charCodeAt(i);
		if(t==122)
			t=97;
		else
		if(t==90)
			t=65;
		else
			t++;
		tempp= String.fromCharCode(t);
		temp+=tempp;
	}
	document.write(temp);
}
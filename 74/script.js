function myFun(){				
	var s = document.getElementById("s").value
	var a=[];
	var c=[];
	var flag=0,k=0;
	for(var i=0;i<s.length;i++){
			if(a.includes(s[i])){
				c[a.indexOf(s[i])]++;
			}
			else
				a.push(s[i]);
				c.push(1);
	}
	for(i=0;i<a.length;i++){
		document.write(a[i]+" "+c[i]+"<br>");
		
	}
}
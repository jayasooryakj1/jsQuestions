function myFun(){				
	var s = document.getElementById("s").value
	var arr=['a','e','i','o','u'];
	var a='';
	for(var i=0;i<s.length;i++)
		if(arr.includes(s[i]))
			a+=s[i];
	document.write(a);
}
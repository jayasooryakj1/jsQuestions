function myFun(){				
	var s=document.getElementById("n").value;
	a=s.toLowerCase();
	var l=s.length;
	var flag=0;
	for(var i=0;i<Math.floor(l/2);i++)
		if(a[i]!=a[l-i-1]){
			flag=1;
			break;
		}
	if(flag==0)
		document.write(s+" is a palindrome");
	else
		document.write(s+" is not a palindrome");
}
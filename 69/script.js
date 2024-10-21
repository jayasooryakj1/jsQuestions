function myFun(){				
	var s = document.getElementById("s").value;
	var close = [];
	var t = '', flag=0;
	for(var i =0 ;i<s.length;i++)
		if(s[i]=='(')
			close.push(')');
		else
		if(s[i]=='[')
			close.push(']');
		else
		if(s[i]=='{')
			close.push('}');
		else
		if(s[i]==')'){
			t=close.pop();
			if(s[i]!=t){
				flag=1;
				break;
			}
		}else
		if(s[i]==']'){
			t=close.pop();
			if(s[i]!=t){
				flag=1;
				break;
			}
		}else
		if(s[i]=='}'){
			t=close.pop();
			if(s[i]!=t){
				flag=1;
				break;
			}
		}
	if(flag==0 && close.length==0)
		document.write("Valid");
	else
		document.write("Not valid");
}
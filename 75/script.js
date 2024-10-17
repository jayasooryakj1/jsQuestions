function myFun(){				
	var s = document.getElementById("s").value
	var arr = s.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==arr[i].split('').reverse().join(''))
			arr[i]=arr[i].replace(/[a-zA-Z]/g,"*");
	}
	for(i=0;i<arr.length;i++)
		document.write(arr[i]+" ");
}
function myFun(){				
	var s = document.getElementById("s").value;
	var arr = s.split(" ");
	var largest = '';
	var smallest = arr[0];
	for(var i=0;i<arr.length;i++){alert(arr[i]);
		if(arr[i].length>largest.length)
			largest=arr[i];
		if(arr[i].length<smallest.length)
			smallest=arr[i];
	}
	document.write("Largest word : "+largest);
	document.write("<br>Smallest word : "+smallest);
}
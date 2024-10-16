
			function myFun()
			{
				var n1=parseInt(document.getElementById("n1").value);
                var n2=parseInt(document.getElementById("n2").value);
                var n3=parseInt(document.getElementById("n3").value);
                if(n1>n2 && n1>n3){
                    document.getElementById("l").value=n1;
                }
                else
                if(n2>n1 && n2>n3){
                    document.getElementById("l").value=n2;
                }
                else
                    document.getElementById("l").value=n3;

                if(n1<n2 && n1<n3){
                    document.getElementById("s").value=n1;
                }
                else
                if(n2<n1 && n2<n3){
                    document.getElementById("s").value=n2;
                }
                else
                    document.getElementById("s").value=n3;
                    
			}
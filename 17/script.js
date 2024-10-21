
			function myFun()
			{
                var flag=0;
                var i=2;
				var n=document.getElementById("n").value;
                if(n=="1")
                    document.getElementById("p").value="neither prime nor composite";
                else
                    for(;i<=n/2;i++)
                        if(n%i==0){
                            flag=1;
                            break;
                        }
                            
                if(flag==1)
                    document.getElementById("p").value="Composite";
                else
                    document.getElementById("p").value="Prime";
			}

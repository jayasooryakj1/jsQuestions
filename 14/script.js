
			function myFun()
			{
				var n=parseInt(document.getElementById("n").value);
                var sum=0;
                while(n!=0){
                    sum=sum+n%10;
                    n=n/10;
                }
		sum=math.floor(sum);
                document.getElementById("sum").value=sum;
			}
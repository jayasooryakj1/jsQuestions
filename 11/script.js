function myFun()
			{
				var year=document.getElementById("year").value;
                if(year%4==0)
                    if(year%100==0)
                        if(year%400==0)
				            document.getElementById("y").value="Leap Year";
                        else
                        document.getElementById("y").value="Not a leap Year";
                    else
                    document.getElementById("y").value="Leap Year";
                else
                document.getElementById("y").value="Not a leap Year";
			}
		
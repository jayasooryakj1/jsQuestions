
			function myFun()
			{
				var a=document.getElementById("num1").value;
                var b=document.getElementById("num2").value;
                document.getElementById("var1a").value=a;
                document.getElementById("var1b").value=b;
                var t=0;
                t=a;
                a=b;
                b=t;
                document.getElementById("var2a").value=a;
                document.getElementById("var2b").value=b
			}
		</script>
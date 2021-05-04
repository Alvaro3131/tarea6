var borrar = false;
var x;
var y;

   function escribir(n){
		var caj = document.getElementById("result").value;
		if (borrar) {
			document.getElementById("result").value="";
			borrar = false;
			document.getElementById("result").value= n;
		}
		else if (caj == "0" && n != "."){
			cajao = caj.replace("0", "")
			document.getElementById("result").value= cajao + n;
		}
		else{
			document.getElementById("result").value= caj + n;
		}
		x=parseFloat(document.getElementById("result").value)
	}
	
function resetear(){
  y=0;
	document.getElementById("result").value=y;
}

function calc(){
	var result=eval(document.getElementById("result").value);
	document.getElementById("result").value=result;
}

    function cuadrado(){
		document.getElementById("result").value= x*x;
		x= x*x;
    }
	
	function raiz(){
		
		document.getElementById("result").value= Math.sqrt(x);
		x=Math.sqrt(x)
	}

	
	
	         
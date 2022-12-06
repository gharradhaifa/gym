
function aff_size() {

 var  size = document.forms["myForm"]["size_cm"].value;
 var  mass = document.forms["myForm"]["weight"].value;
  var age = document.forms["myForm"]["age"].value;
 
 var bmi=Math.floor(mass/size**2)
 if(age>20)
 {
 	if(bmi<16){
document.getElementById("para").textContent = "Severe Thinness"
 		
 	}
 	else if(bmi<15 && bmi>=17){
 		document.getElementById("para").textContent = "Moderate Thinness"
 		
 	}
 	else if(bmi>=17 && bmi<=18.5){
 		document.getElementById("para").textContent = "Mild Thinness"
 		
 	}
 	else if(bmi>=18.5 && bmi<=25){
 			document.getElementById("para").textContent = "Normal"
 		
 	}
 	else if(bmi>=25 && bmi<=30){
 			document.getElementById("para").textContent = "Overweight"
 		
 	}
 	else if(bmi>=30 && bmi<=35){
 		document.getElementById("para").textContent = "Obese Class I"
 		
 	}
    else if(bmi>=35 && bmi<=40){
    		document.getElementById("para").textContent = "Obese Class II"
 		
 	}
 	else if(bmi>40){

 		document.getElementById("para").textContent = "Obese Class III"
 		
 	}

 }
 
}
function aet() {
 var  size = document.forms["myForm1"]["size"].value;
 var  mass = document.forms["myForm1"]["mass"].value;
  var age = document.forms["myForm1"]["age"].value;
  var gendre = document.forms["myForm1"]["gendre"].value;
 var Nap= document.forms["myForm1"]["nap"].value;
 var mbH=Math.floor(13.707*Number(mass)+492.3*Number(size)-6.673*Number(age)+77,6)
  var mbF=Math.floor(9.74*Number(mass)+172.9*Number(size)-4.737*Number(age)+66.051)
 if(gendre==="female" && Nap==="weak")
 {
 	var aett=mbF*1.2
 	
document.getElementById("para1").textContent = aett+" Calories/day"
 		
 	}
 	else if(gendre==="female" && Nap==="medium")
 {
 	var aett=mbF*1.4
 	
document.getElementById("para1").textContent = aett+" Calories/day"
 		
 	}
 		else if(gendre==="female" && Nap==="high")
 {
 	var aett=mbF*1.7
 	
document.getElementById("para1").textContent = aett+" Calories/day"
 		
 	}
 	else if(gendre==="male" && Nap==="weak")
 {
 	var aett=mbH*1.2
 	
document.getElementById("para1").textContent = aett+" Calories/day"
 		
 	}
 	else if(gendre==="male" && Nap==="medium")
 {
 	var aett=mbH*1.4
 	
document.getElementById("para1").textContent = aett+" Calories/day"
 		
 	}
 	else if(gendre==="male" && Nap==="high")
 {
 	var aett=mbH*1.7
 	
document.getElementById("para1").textContent = aett+" Calories/day  "
 		
 	}
 	
 var protein=1.4*Number(mass)
 var lipide=0.8*Number(mass)
 var gl=Number(aett)-Number(protein)*4+Number(lipide)*9/4
 document.getElementById("para1").append("  protein : "+ protein + "  lipide : "+ lipide + "  glucide : "+ gl) 
}










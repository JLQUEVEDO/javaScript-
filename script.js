/* var ageAsString = prompt("What is your age? ", "");
/* var age = Number(ageAsString);
/* 	if (age < 40){
		alert("Oh your are so young");
	}
	if (age == 40){
		alert("very good age");
	}
	if (age > 40){
		alert("Don't worry");
	}
	
	alert ("thank you"); */
	


/* var age = Number(prompt("what is your age? ", ""));

var string = "";
while (age > 0)
{
	string += "Happy Birthday \n";
	age = age - 1;	/* this is another way to substract  age -= 1;*/
	
/*}

alert(string);
 */
 
 
/* var age = Number(prompt("what is your age? ", ""));

var string = "";

do
{
	string += "Happy Birthday \n";
	age = age - 1;
}while (age >0)
	
alert(string); */

/* var age = Number(prompt("what is your age? ", ""));

var string = "";

for (var theAge = age; theAge >0; theAge -= 1)
{
	string += "Happy Birthday \n";
}

alert(string); */


/* var age = Number(prompt("what is your age? ", ""));

var string = "";

for (var counter = 1; counter < age; counter += 1)
{
	string += "Happy Birthday \n";
	if (counter % 7 == 0) /* this willbreak when the 
		break;
	
}

alert(string); */

/* var animal = prompt("what is your animal? ", "");

switch(animal)
{
  case "cat":
    alert("meow");
    break;
  case "dog":
    alert("woof");
    break;
  case "horse":
    alert("whinny");
    break;
  default:
    alert ("Unknown animal");
    break;
} */

/* var isMale = true;
var isOld = true;
var isOldMan = isMale || isOld;
alert(isOldMan); 
alert(0 == true); // the result will be false  */

//var x =5;

/* var x = prompt("what is your number? ", "");
var y = x < 10 ? x : 10;
alert(y); */


/* function add (x,y)
{
	var z =  x + y;
	return z;
}

var sum = add(5, 10);
var sum2 = add (3,4);
//alert(sum);
output.innerHTML = sum +" , "+ sum2; */

/* var constant = 32;

function celsiusToFarenheit( temperature)
{
	var farenheitTemp = temperature * 9/5 + constant;
	return farenheitTemp;
}

output.innerHTML = celsiusToFarenheit(100); */


/* function hypotenuse(a,b)
{
	function square(x)
	{
		return x*x;
	}
	
	return Math.sqrt(square(a) + square(b));
	
}

output.innerHTML=hypotenuse(3,4); */

/* function func1(num, exp){
		if (exp === 0)
		{
		return 1;
		}
	return num * func1(num, exp-1);
}

var anwser = func1(2,10);
output.innerHTML = anwser; */


//objects
var dog = {
	name: "Charlie", 
	breed: "Mix",
	weight: 12,
	color: "Brown"
};

var dogWeight = dog.weight;
output.innerHTML = dogWeight;

//adding a properti to the object 
dog.disposition = "wonderful";

//showing the porperti disposition 
var disp = dog.disposition;
output2.innerHTML = disp;

//I can change the property of the object 
dog.color = "white";
var color = dog.color;
output3.innerHTML = color;



	




	





































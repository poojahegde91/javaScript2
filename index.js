//Assignment No. 2
//Read the values assigned to predefined variable and filter data assigned to the variable and store them in an array.
//Store the even and odd values in seperate array variables and print the result in console.

//Predefined data variable with list of names
const data = ["Harry", "Dexter", "Olive", "Stuart", "Benson", "Alice", "Charles", "Eugene", "Francis", "Madona", "Newton", "Veronica", "Jack", "Tom", "Patric", "Ximanta", "Williams", "Zenith", "George", "Issac", "Lewis"];

//Declare variables to store all odd and even numbered index values from the data variable
var odddata = [];
var evendata = [];

//iterate through the data variable, process odd and even numbered index values and store them in the respective array variables.
for(var i=0; i<data.length; i++){
	if((i % 2) == 1){
		evendata.push(data[i]);
		
	}
	else {
		odddata.push(data[i]);
		
	}
	
}

//iterate through the data and print odd number values
console.log("Odd Number array is " + odddata);

//iterate through the data and print even number values
console.log("Even Number array is " + evendata);

module.exports = {
  odd: odddata,
  even: evendata
};

/* A Javascript program to accept user input of metric temperatures and calculate the conversion based on user input.
*/

/* PSEUDOCODE

1. Request metric input C, F or K and store input in variable convertfromC, convertfromF or convertfromK (BOOLEAN)
2. Request input from user the value to convert and store in variable number
3. Request metric conversion input converttoC, converttoF or converttoK (BOOLEAN)
4. If convertfromC is true and converttoF is true
       calculate conversion
       output "number is convertednumberF".
5. If convertfromK is true and converttoF is true
       calculate conversion
       output "number is convertednumberF".
6. If convertfromF is true and converttoC is true
       calculate conversion
       output "number is convertednumberC".
7. If convertfromK is true and converttoC is true
       calculate conversion
       output "number is convertednumberC".
8. If convertfromC is true and converttoK is true
       calculate conversion
       output "number is convertednumberK".
9. If convertfromF is true and converttoK is true
       calculate conversion
       output "number is convertednumberK".
   else
       No conversion required.
*/ 

// Request metric input from user

convertFrom = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`);
convertFrom = convertFrom.toUpperCase();
console.log(convertFrom);

// Request input from user the value to convert

convertNumber = Number(prompt("Enter the number you want to convert: "));
console.log(convertNumber);

// Request metric conversion input from user

convertTo = prompt(`In which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`);
convertTo = convertTo.toUpperCase();
console.log(convertTo);

// Convert Celsius to Fahrenheit - found from googlomg the ascii for degress is \u00B0

if (convertFrom == 'C' && convertTo == 'F') {
    fahrenheit = ((convertNumber*(9/5)+32));
    alert(`
    Conversion results below:
    
    ${convertNumber}\u00B0C is ${Math.round(fahrenheit)}\u00B0F.`);
}

// Convert Kelvin to Fahrenheit

else if (convertFrom == 'K' && convertTo == 'F') {
    kelvin = ((convertNumber*(9/5)-459.67));
    alert(`
    Conversion results below:
    
    ${convertNumber}K is ${Math.round(kelvin)}\u00B0F.`);
}

// Convert Fahrenheit to Celsius

else if (convertFrom == 'F' && convertTo == 'C') {
    celsius = (convertNumber-32)*(5/9);
    alert(`
    Conversion results below:
    
    ${convertNumber}\u00B0F is ${Math.round(celsius)}\u00B0C.`);
}

// Convert Kelvin to Celsius

else if (convertFrom == 'K' && convertTo == 'C') {
    celsius = convertNumber-273.15;
    alert(`
    Conversion results below:
    
    ${convertNumber}K is ${Math.round(celsius)}\u00B0C.`);
}

// Convert Celsius to Kelvin

else if (convertFrom == 'C' && convertTo == 'K') {
    kelvin = convertNumber+273.15;
    alert(`
    Conversion results below:
    
    ${convertNumber}\u00B0C is ${Math.round(kelvin)}K.`);
}

// Convert Fahrenheit to Kelvin

else if (convertFrom == 'F' && convertTo == 'K') {
    kelvin = (convertNumber+459.67)*(5/9);
    alert(`
    Conversion results below:
   
    ${convertNumber}\u00B0F is ${Math.round(kelvin)}K.`);
}

else {
    alert(`
    Conversion results below:
    
    Either incorrect measurement or convrsion type was chosen.
    Please try again.`);    
}
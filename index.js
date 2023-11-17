let celsius =  
document.getElementById('celsius'); 
let fahrenheit =  
document.getElementById('fahrenheit'); 
let kelvin =  
document.getElementById('kelvin'); 

// ===================================================================================================

// The formula for converting Celsius scale to Fahrenheit scale and Kelvin scale:
// T(°F) = (T(°C) * 9)/5 + 32
// T(°K) = T(°C) + 273.15
celsius.oninput = function () { 
let f = (parseFloat(celsius.value) * 9) / 5 + 32; 
fahrenheit.value = parseFloat(f.toFixed(2)); 

let k = (parseFloat(celsius.value) + 273.15); 
kelvin.value = parseFloat(k.toFixed(2)); 
} 

// ====================================================================================================

// The formula for converting Fahrenheit scale to Celsius scale and Kelvin scale:
// T(°C) = ((T(°F) - 32) * 5) / 9
// T(°K) = (T(°F)  - 32) * 5 / 9 + 273.15
fahrenheit.oninput = function () { 
let c = ((parseFloat( fahrenheit.value) - 32) * 5) / 9; 
celsius.value = parseFloat(c.toFixed(2)); 

let k = (parseFloat( fahrenheit.value) - 32) * 5 / 9 + 273.15; 
kelvin.value = parseFloat(k.toFixed(2)); 
} 

// ====================================================================================================

// The formula for converting Kelvin scale to Celsius scale and Fahrenheit scale:
// T(°C) = (T(°K) - 273.15
// T(°F) = (T(°K) - 273.15) * 9 / 5 + 32;
kelvin.oninput = function () { 
let c = (parseFloat(kelvin.value) - 273.15); 
celsius.value = parseFloat(c.toFixed(2)); 

let f = (parseFloat( kelvin.value) - 273.15) * 9 / 5 + 32; 
fahrenheit.value = parseFloat(f.toFixed(2)); 
}
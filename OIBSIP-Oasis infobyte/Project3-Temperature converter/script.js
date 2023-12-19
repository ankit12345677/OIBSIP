function convertTemperature() {
    // Get user input
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Get selected unit (Celsius, Fahrenheit, or Kelvin)
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    console.log(selectedUnit)

    // Get selected conversion unit (Celsius, Fahrenheit, or Kelvin)
    const selectedConversionUnit = document.getElementById("tempC").value;

    // Perform conversion
    let convertedTemperature;

    // Celsius to Fahrenheit or Kelvin
    if (selectedUnit === 'Celsius') {
        if (selectedConversionUnit === 'Fahrenheit') {
            convertedTemperature = (temperatureInput * 9/5) + 32;
        } else if (selectedConversionUnit === 'Kelvin') {
            convertedTemperature = temperatureInput + 273.15;
        } else {
            convertedTemperature = temperatureInput; // No conversion needed
        }
    }

    // Fahrenheit to Celsius or Kelvin
    else if (selectedUnit === 'Fahrenheit') {
        if (selectedConversionUnit === 'Celsius') {
            convertedTemperature = (temperatureInput - 32) * 5/9;
        } else if (selectedConversionUnit === 'Kelvin') {
            convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperatureInput; // No conversion needed
        }
    }

    // Kelvin to Celsius or Fahrenheit
    else if (selectedUnit === 'Kelvin') {
        if (selectedConversionUnit === 'Celsius') {
            convertedTemperature = temperatureInput - 273.15;
        } else if (selectedConversionUnit === 'Fahrenheit') {
            convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = temperatureInput; // No conversion needed
        }
    }

    // Display the converted temperature
    document.getElementById("convertedTemperature").value = convertedTemperature.toFixed(2) + " " + selectedConversionUnit;
}



function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    if (!celsiusInput) return;

    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("resultText").textContent = `${celsiusInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
}

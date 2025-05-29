// script.js

// Get DOM elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convertButton');
const reverseButton = document.getElementById('reverseButton');
const clearButton = document.getElementById('clearButton');
const resultArea = document.getElementById('resultArea');
const currentYearSpan = document.getElementById('currentYear');

// Set current year in footer
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// --- Conversion Functions ---
/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - Temperature in Celsius.
 * @returns {number} Temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - Temperature in Fahrenheit.
 * @returns {number} Temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// --- Event Listeners ---

// Listen for click on Convert button
if (convertButton) {
    convertButton.addEventListener('click', function() {
        const cValStr = celsiusInput.value;
        const fValStr = fahrenheitInput.value;
        resultArea.textContent = ''; // Clear previous messages

        if (cValStr !== '') {
            const cVal = parseFloat(cValStr);
            if (!isNaN(cVal)) {
                const fValConverted = celsiusToFahrenheit(cVal);
                fahrenheitInput.value = parseFloat(fValConverted.toFixed(2));
            } else {
                resultArea.textContent = 'Masukkan angka yang valid untuk Celsius.';
                fahrenheitInput.value = ''; // Clear fahrenheit if celsius is invalid
            }
        } else if (fValStr !== '') {
            const fVal = parseFloat(fValStr);
            if (!isNaN(fVal)) {
                const cValConverted = fahrenheitToCelsius(fVal);
                celsiusInput.value = parseFloat(cValConverted.toFixed(2));
            } else {
                resultArea.textContent = 'Masukkan angka yang valid untuk Fahrenheit.';
                celsiusInput.value = ''; // Clear celsius if fahrenheit is invalid
            }
        } else {
            resultArea.textContent = 'Masukkan suhu di salah satu kolom untuk dikonversi.';
        }
    });
}

// Listen for click on Reverse button
if (reverseButton) {
    reverseButton.addEventListener('click', function() {
        const cVal = celsiusInput.value;
        const fVal = fahrenheitInput.value;

        celsiusInput.value = fVal;
        fahrenheitInput.value = cVal;
        resultArea.textContent = 'Nilai suhu berhasil ditukar.';
        // Clear message after a short delay
        setTimeout(() => {
            if (resultArea.textContent === 'Nilai suhu berhasil ditukar.') {
                 resultArea.textContent = '';
            }
        }, 2000);
    });
}

// Listen for click on Clear button
if (clearButton) {
    clearButton.addEventListener('click', function() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        resultArea.textContent = ''; // Clear any messages
        if (celsiusInput) {
            celsiusInput.focus(); // Set focus back to Celsius input
        }
    });
}

// Optional: Clear the other field if one is manually changed to empty,
// to prevent confusion before pressing "Konversi"
if (celsiusInput) {
    celsiusInput.addEventListener('input', function() {
        if (celsiusInput.value === '') {
            // fahrenheitInput.value = ''; // Uncomment if you want to clear fahrenheit when celsius is cleared
            resultArea.textContent = ''; // Clear messages if user starts typing
        }
    });
}

if (fahrenheitInput) {
    fahrenheitInput.addEventListener('input', function() {
        if (fahrenheitInput.value === '') {
            // celsiusInput.value = ''; // Uncomment if you want to clear celsius when fahrenheit is cleared
            resultArea.textContent = ''; // Clear messages if user starts typing
        }
    });
}

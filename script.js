let currentPrimeIndex = 0; // Índice del número primo actual
let primes = [2]; // Array para almacenar los números primos encontrados

// Función para verificar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función para encontrar el siguiente número primo
function nextPrime(start) {
    let num = start + 1;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

// Función para actualizar el número en la pantalla
function updateDisplay() {
    document.getElementById('numberDisplay').innerText = primes[currentPrimeIndex];
}

// Evento para el clic izquierdo
document.body.addEventListener('click', function() {
    if (currentPrimeIndex === primes.length - 1) { // Si estamos en el último primo conocido
        primes.push(nextPrime(primes[currentPrimeIndex])); // Encontramos el siguiente primo
    }
    currentPrimeIndex++; // Avanzamos al siguiente índice
    updateDisplay(); // Actualizamos la pantalla
});

// Evento para el clic derecho
document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevenimos el menú contextual
    if (currentPrimeIndex > 0) { // Solo retrocedemos si hay un primo anterior
        currentPrimeIndex--; // Retrocedemos al índice anterior
        updateDisplay(); // Actualizamos la pantalla
    }
});

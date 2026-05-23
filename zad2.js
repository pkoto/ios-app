const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

// Obliczenia
const suma = expenses.reduce((acc, val) => acc + val, 0);
const srednia = suma / expenses.length;
const najwieksza = Math.max(...expenses);

// Raport
console.log("===== RAPORT WYDATKÓW =====");
console.log(`Suma wydatków: ${suma.toFixed(2)} zł`);
console.log(`Średni wydatek: ${srednia.toFixed(2)} zł`);
console.log(`Największy wydatek: ${najwieksza.toFixed(2)} zł`);

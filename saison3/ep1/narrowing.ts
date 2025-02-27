function traiterValeur(strs: string | number) {
    if (typeof strs === 'string') {
        return strs.length;
    } else {
        return strs * 2;
    }
}

// Test de la fonction
console.log(traiterValeur("Hello"));
console.log(traiterValeur(5));   
// 2)
let arrayFibonacci = [];
let numberChoiced = 2;
function seqFibonacci(num) {
    if (num < 2) { return num; }

    return seqFibonacci(num - 1) + seqFibonacci(num - 2);
}

function showSeqFibonacci() {
    for (let count = 0; count < 20; count++) {
        arrayFibonacci.push(seqFibonacci(count));
    }

    if (arrayFibonacci.includes(numberChoiced)) {
        console.log(`O número ${numberChoiced} pertence a sequência.`);

        return "Não pertence!";
    }
}

showSeqFibonacci();

// 5)
function reverseString(string) {
    let reversedString = "";

    for (let countString = string.length - 1; countString >= 0; countString--) {
        reversedString += string[countString];
    }

    return reversedString;
}

console.log(reverseString("Fernando"));

let indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
    k += 1;
    soma += k;
}

console.log(soma);

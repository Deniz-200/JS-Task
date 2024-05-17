//task1
const string1 = "ses";

function Palindrom(e) {
    
    const reversedStr = e.split('').reverse().join('');
    return e === reversedStr;
}


if (Palindrom(string1)) {
    console.log(`'${string1}' soz palindromdur.`);
} else {
    console.log(`'${string1}' soz palindrom deyil.`);
}

//task2

const string2 = "reqem";

function muqayise(str) {
    return str >= 10 && str <= 20;
}

console.log(muqayise(string2));


//task3

const reqemler = [10, 5, 2, 7, 19];

function edediorta(reqemler) {

    const total = reqemler.reduce((a, b) => a + b, 0);
    const count = reqemler.length;
    return count === 0 ? 0 : total / count;
}

console.log("ededi orta:", edediorta(reqemler));

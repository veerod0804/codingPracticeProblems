let testArray = [5, 1, 2, 3, 4, 9];

let minNumber = testArray[0];
let maxNumber= testArray[0]

for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] < minNumber) {
        minNumber = testArray[i];
    }
    if (testArray[i] > maxNumber) {
        maxNumber = testArray[i];
    }
}

    console.log(minNumber, maxNumber);

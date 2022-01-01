// Defining global variables
const numButton = document.querySelector("#convert");
let input = document.querySelector("#num_input");
const originBaseSelector = document.getElementById("origin_base_selector");
const targetBaseSelector = document.getElementById("target_base_selector");
let originBase = originBaseSelector.value; // Defining initial/default value of origin base
let targetBase = targetBaseSelector.value; // Defining initial/default value of target base
let resultBox = document.querySelector("#resultBox");
let result = document.querySelector("#result");
let intArr = [];
let powerNums = [];
const alphabet = {
    1: ["A", "a"],
    2: ["B", "b"],
    3: ["C", "c"],
    4: ["D", "d"],
    5: ["E", "e"],
    6: ["F", "f"],
    7: ["G", "g"],
    8: ["H", "h"],
    9: ["I", "i"],
    10: ["J", "j"],
    11: ["K", "k"],
    12: ["L", "l"],
    13: ["M", "m"],
    14: ["N", "n"],
    15: ["O", "o"],
    16: ["P", "p"],
    17: ["Q", "q"],
    18: ["R", "r"],
    19: ["S", "s"],
    20: ["T", "t"],
    21: ["U", "u"],
    22: ["V", "v"],
    23: ["W", "w"],
    24: ["X", "x"],
    25: ["Y", "y"],
    26: ["Z", "z"],
};

console.log(valArrInit());

// ********************************************************** EVENT LISTENERS ***************************************************************************************************************************

// Allows for 'Enter' keypress when in the input field to trigger button click.
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode == 13) {
        // Cancel the default action, if needed
        // event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("convert").click();
    }
});

// Event listener to execute converter function on click and show some console log info.
numButton.addEventListener("click", () => {
    let inputNum = input.value; // Defining input number here, once it has been typed.
    let validationArr = valArrInit();
    if (numVal(inputNum, validationArr) != "pass") {
        result.innerHTML = numVal(inputNum, validationArr);
        result.style.setProperty("color", "red");
        resultBox.style.setProperty("background-color", "var(--error-red-seethru)");
        resultBox.style.setProperty("border", "2px solid var(--error-red)");
        result.style.setProperty("font-size", "var(--converter-size)");
    } else {
        if (originBase != 10 && targetBase != 10) {
            let tempResult = completeConverter(originBase, 10, inputNum);
            result.innerHTML = completeConverter(10, targetBase, tempResult);
        } else {
            result.innerHTML = completeConverter(originBase, targetBase, inputNum);
        } // displays result in output area.
        result.style.setProperty("color", "var(--matrix-green)");
        resultBox.style.setProperty(
            "background-color",
            "var(--matrix-green-seethru)"
        );
        resultBox.style.setProperty("border", "2px solid var(--matrix-green)");
        if (targetBase == 10) {
            if (result.innerHTML.length > 16) {
                result.style.setProperty("font-size", "var(--focus3-size");
            } else {
                result.style.setProperty("font-size", "var(--focus4-size");
            }
        } else {
            if (result.innerHTML.length > 25) {
                result.innerHTML = "Your number is too big";
                result.style.setProperty("color", "red");
                resultBox.style.setProperty(
                    "background-color",
                    "var(--error-red-seethru)"
                );
                resultBox.style.setProperty("border", "2px solid var(--error-red)");
                result.style.setProperty("font-size", "var(--focus4-size");
            } else if (result.innerHTML.length > 16) {
                result.style.setProperty("font-size", "var(--focus-size");
            } else if (result.innerHTML.length > 10) {
                result.style.setProperty("font-size", "var(--focus4-size");
            } else {
                result.style.setProperty("font-size", "var(--focus4-size");
            }
        }
    }

    console.log(powerNums);
    console.log(intArr);
    console.log(converter());
});

// Changes value of originBase for each change in dropdown selector (from 2 to 20, and 26). Also changes the output of accepted digits and warnings about validation.
originBaseSelector.addEventListener("change", () => {
    const selection = originBaseSelector.value;
    switch (selection) {
        case "2":
            originBase = 2;
            break;
        case "3":
            originBase = 3;
            break;
        case "4":
            originBase = 4;
            break;
        case "5":
            originBase = 5;
            break;
        case "6":
            originBase = 6;
            break;
        case "7":
            originBase = 7;
            break;
        case "8":
            originBase = 8;
            break;
        case "9":
            originBase = 9;
            break;
        case "10":
            originBase = 10;
            break;
        case "11":
            originBase = 11;
            break;
        case "12":
            originBase = 12;
            break;
        case "13":
            originBase = 13;
            break;
        case "14":
            originBase = 14;
            break;
        case "15":
            originBase = 15;
            break;
        case "16":
            originBase = 16;
            break;
        case "17":
            originBase = 17;
            break;
        case "18":
            originBase = 18;
            break;
        case "19":
            originBase = 19;
            break;
        case "20":
            originBase = 20;
            break;
        case "21":
            originBase = 21;
            break;
        case "22":
            originBase = 22;
            break;
        case "23":
            originBase = 23;
            break;
        case "24":
            originBase = 24;
            break;
        case "25":
            originBase = 25;
            break;
        case "26":
            originBase = 26;
            break;
    }
    if (originBase <= 10) {
        document.querySelector("#caps-warning").innerHTML = "numbers only";
        document.querySelector("#digits").innerHTML = "0-" + valArrInit().pop();
    } else if (originBase > 10 && originBase < 26) {
        document.querySelector("#caps-warning").innerHTML = "numbers (and letters)";
        document.querySelector("#digits").innerHTML =
            "0-9 | a-" + valArrInit().pop();
    } else if (originBase == 26) {
        document.querySelector("#caps-warning").innerHTML = "letters only";
        document.querySelector("#digits").innerHTML = "a-z";
    }
    console.log("Accepted digits: " + valArrInit());
});

// Changes value of targetBase for each change in dropdown selector (from 2 to 20, and 26).
targetBaseSelector.addEventListener("change", () => {
    const selection = targetBaseSelector.value;
    switch (selection) {
        case "2":
            targetBase = 2;
            break;
        case "3":
            targetBase = 3;
            break;
        case "4":
            targetBase = 4;
            break;
        case "5":
            targetBase = 5;
            break;
        case "6":
            targetBase = 6;
            break;
        case "7":
            targetBase = 7;
            break;
        case "8":
            targetBase = 8;
            break;
        case "9":
            targetBase = 9;
            break;
        case "10":
            targetBase = 10;
            break;
        case "11":
            targetBase = 11;
            break;
        case "12":
            targetBase = 12;
            break;
        case "13":
            targetBase = 13;
            break;
        case "14":
            targetBase = 14;
            break;
        case "15":
            targetBase = 15;
            break;
        case "16":
            targetBase = 16;
            break;
        case "17":
            targetBase = 17;
            break;
        case "18":
            targetBase = 18;
            break;
        case "19":
            targetBase = 19;
            break;
        case "20":
            targetBase = 20;
            break;
        case "21":
            targetBase = 21;
            break;
        case "22":
            targetBase = 22;
            break;
        case "23":
            targetBase = 23;
            break;
        case "24":
            targetBase = 24;
            break;
        case "25":
            targetBase = 25;
            break;
        case "26":
            targetBase = 26;
            break;
    }
});

// ************************************************************** FUNCTIONS ***************************************************************************************************************************

// function that initializes the array that will be used for validation.
function valArrInit() {
    let validationArr;
    if (originBase < 11) {
        validationArr = countup(originBase - 1).map(String);
    } else if (originBase < 26) {
        validationArr = numKey(countup(originBase - 1)).map(String);
    } else if (originBase == 26) {
        validationArr = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
    }
    return addLowerCase(validationArr);
}
// Function that adds lower case letters for all uppercase letters of an array
function addLowerCase(arr) {
    let modArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= 26; j++) {
            if (arr[i] === alphabet[j][0]) {
                modArr.push(alphabet[j][1]);
            }
        }
    }
    for (let i = 0; i < modArr.length; i++) {
        arr.push(modArr[i]);
    }
    return arr;
}
// console.log(Object.keys(alphabet).length); // length of my object alphabet.

// validation function for input number.
function numVal(numStr, arr) {
    let errorsArr = [];
    for (let i = 0; i < numStr.length; i++) {
        if (arr.includes(numStr.charAt(i))) {
            console.log("pass");
        } else {
            console.log("fail");
            errorsArr.push(numStr.charAt(i));
        }
    }
    console.log(errorsArr);
    if (errorsArr.length === 0) {
        return "pass";
    } else {
        let tempArr = [];
        for (let k = 0; k < errorsArr.length; k++) {
            if (tempArr.includes(errorsArr[k]) === false) {
                tempArr.push(errorsArr[k]);
            }
        }
        console.log(tempArr);
        return (
            "The following characters are not part of your selected base: " + tempArr
        );
    }
}

// Converts any  letters in our input number's array to integers for calculation.
function letterKey(arr) {
    if (originBase > 10 && originBase <= 20) {
        for (let i = 0; i < arr.length; i++) {
            switch (true) {
                case arr[i] == "A" || arr[i] == "a":
                    arr[i] = 10;
                    break;
                case arr[i] == "B" || arr[i] == "b":
                    arr[i] = 11;
                    break;
                case arr[i] == "C" || arr[i] == "c":
                    arr[i] = 12;
                    break;
                case arr[i] == "D" || arr[i] == "d":
                    arr[i] = 13;
                    break;
                case arr[i] == "E" || arr[i] == "e":
                    arr[i] = 14;
                    break;
                case arr[i] == "F" || arr[i] == "f":
                    arr[i] = 15;
                    break;
                case arr[i] == "G" || arr[i] == "g":
                    arr[i] = 16;
                    break;
                case arr[i] == "H" || arr[i] == "h":
                    arr[i] = 17;
                    break;
                case arr[i] == "I" || arr[i] == "i":
                    arr[i] = 18;
                    break;
                case arr[i] == "J" || arr[i] == "j":
                    arr[i] = 19;
                    break;
            }
        }
        return arr;
    } else if (originBase === 26) {
        for (let i = 0; i < arr.length; i++) {
            switch (true) {
                case arr[i] == "A" || arr[i] == "a":
                    arr[i] = 1;
                    break;
                case arr[i] == "B" || arr[i] == "b":
                    arr[i] = 2;
                    break;
                case arr[i] == "C" || arr[i] == "c":
                    arr[i] = 3;
                    break;
                case arr[i] == "D" || arr[i] == "d":
                    arr[i] = 4;
                    break;
                case arr[i] == "E" || arr[i] == "e":
                    arr[i] = 5;
                    break;
                case arr[i] == "F" || arr[i] == "f":
                    arr[i] = 6;
                    break;
                case arr[i] == "G" || arr[i] == "g":
                    arr[i] = 7;
                    break;
                case arr[i] == "H" || arr[i] == "h":
                    arr[i] = 8;
                    break;
                case arr[i] == "I" || arr[i] == "i":
                    arr[i] = 9;
                    break;
                case arr[i] == "J" || arr[i] == "j":
                    arr[i] = 10;
                    break;
                case arr[i] == "K" || arr[i] == "k":
                    arr[i] = 11;
                    break;
                case arr[i] == "L" || arr[i] == "l":
                    arr[i] = 12;
                    break;
                case arr[i] == "M" || arr[i] == "m":
                    arr[i] = 13;
                    break;
                case arr[i] == "N" || arr[i] == "n":
                    arr[i] = 14;
                    break;
                case arr[i] == "O" || arr[i] == "o":
                    arr[i] = 15;
                    break;
                case arr[i] == "P" || arr[i] == "p":
                    arr[i] = 16;
                    break;
                case arr[i] == "Q" || arr[i] == "q":
                    arr[i] = 17;
                    break;
                case arr[i] == "R" || arr[i] == "r":
                    arr[i] = 18;
                    break;
                case arr[i] == "S" || arr[i] == "s":
                    arr[i] = 19;
                    break;
                case arr[i] == "T" || arr[i] == "t":
                    arr[i] = 20;
                    break;
                case arr[i] == "U" || arr[i] == "u":
                    arr[i] = 21;
                    break;
                case arr[i] == "V" || arr[i] == "v":
                    arr[i] = 22;
                    break;
                case arr[i] == "W" || arr[i] == "w":
                    arr[i] = 23;
                    break;
                case arr[i] == "X" || arr[i] == "x":
                    arr[i] = 24;
                    break;
                case arr[i] == "Y" || arr[i] == "y":
                    arr[i] = 25;
                    break;
                case arr[i] == "Z" || arr[i] == "z":
                    arr[i] = 26;
                    break;
            }
        }
        return arr;
    }
}

// Converts any  numbers in our output number's array that should be letters into letters, so that the final display number will be correct with numbers and letters.
function numKey(arr) {
    if (targetBase < 26) {
        for (let i = 0; i < arr.length; i++) {
            switch (true) {
                case arr[i] == 10:
                    arr[i] = "A";
                    break;
                case arr[i] == 11:
                    arr[i] = "B";
                    break;
                case arr[i] == 12:
                    arr[i] = "C";
                    break;
                case arr[i] == 13:
                    arr[i] = "D";
                    break;
                case arr[i] == 14:
                    arr[i] = "E";
                    break;
                case arr[i] == 15:
                    arr[i] = "F";
                    break;
                case arr[i] == 16:
                    arr[i] = "G";
                    break;
                case arr[i] == 17:
                    arr[i] = "H";
                    break;
                case arr[i] == 18:
                    arr[i] = "I";
                    break;
                case arr[i] == 19:
                    arr[i] = "J";
                    break;
                case arr[i] == 20:
                    arr[i] = "H";
                    break;
                case arr[i] == 21:
                    arr[i] = "I";
                    break;
                case arr[i] == 22:
                    arr[i] = "J";
                    break;
                case arr[i] == 23:
                    arr[i] = "K";
                    break;
                case arr[i] == 24:
                    arr[i] = "L";
                    break;
                case arr[i] == 25:
                    arr[i] = "M";
                    break;
            }
        }
        return arr;
    } else if (targetBase === 26) {
        for (let i = 0; i < arr.length; i++) {
            switch (true) {
                case arr[i] == 1:
                    arr[i] = "A";
                    break;
                case arr[i] == 2:
                    arr[i] = "B";
                    break;
                case arr[i] == 3:
                    arr[i] = "C";
                    break;
                case arr[i] == 4:
                    arr[i] = "D";
                    break;
                case arr[i] == 5:
                    arr[i] = "E";
                    break;
                case arr[i] == 6:
                    arr[i] = "F";
                    break;
                case arr[i] == 7:
                    arr[i] = "G";
                    break;
                case arr[i] == 8:
                    arr[i] = "H";
                    break;
                case arr[i] == 9:
                    arr[i] = "I";
                    break;
                case arr[i] == 10:
                    arr[i] = "J";
                    break;
                case arr[i] == 11:
                    arr[i] = "K";
                    break;
                case arr[i] == 12:
                    arr[i] = "L";
                    break;
                case arr[i] == 13:
                    arr[i] = "M";
                    break;
                case arr[i] == 14:
                    arr[i] = "N";
                    break;
                case arr[i] == 15:
                    arr[i] = "O";
                    break;
                case arr[i] == 16:
                    arr[i] = "P";
                    break;
                case arr[i] == 17:
                    arr[i] = "Q";
                    break;
                case arr[i] == 18:
                    arr[i] = "R";
                    break;
                case arr[i] == 19:
                    arr[i] = "S";
                    break;
                case arr[i] == 20:
                    arr[i] = "T";
                    break;
                case arr[i] == 21:
                    arr[i] = "U";
                    break;
                case arr[i] == 22:
                    arr[i] = "V";
                    break;
                case arr[i] == 23:
                    arr[i] = "W";
                    break;
                case arr[i] == 24:
                    arr[i] = "X";
                    break;
                case arr[i] == 25:
                    arr[i] = "Y";
                    break;
                case arr[i] == 26:
                    arr[i] = "Z";
                    break;
            }
        }
        return arr;
    }
}

// Takes input number and turns it into an array containing each of the number's digits, converted to integers (uses letterKey function).
function arrayNum(number) {
    console.log("your origin base is: " + originBase);
    console.log("your target base is: " + targetBase);
    if (originBase <= 10) {
        intArr = String(number)
            .split("") // split into an array of strings
            .map((number) => Number(number)); // map to an array of integers
        return intArr;
    } else if (originBase > 10) {
        intArr = String(number).split(""); // split into an array of strings
        intArr = letterKey(intArr); // If origin base has letters, changes them to decimal numbers
        console.log(intArr);
        intArr.map((number) => Number(number));
    }
}

// Used to display the accepted digits in validation warnings and console logs.
function countup(n) {
    if (n < 0) {
        return [];
    } else {
        countArray = countup(n - 1);
        countArray.push(n);
    }
    return countArray;
}

// Used to create an array that has a number for each digit in our origin number's array. We will use this array as powers to elevate our base to for our conversion.
function countdown(n) {
    if (n < 0) {
        return [];
    } else {
        countArray = countdown(n - 1);
        countArray.unshift(n);
    }
    return countArray;
}

// Converts our integer array into our result (converted number) (uses numKey function).
function converter() {
    let arr = [];
    let total = 0;
    if (targetBase == 10) {
        // calculates each column of the number into an array
        for (let i = 0; i < powerNums.length; i++) {
            arr.push(intArr[i] * Math.pow(originBase, powerNums[i]));
        }
        // Sums up previous array to find final number.
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    } else if (originBase == 10 && targetBase != 10) {
        let inputNum = document.getElementById("num_input").value;
        // divides the input num by the output base until result is 0. Adds the remainder of division to our array at every step.
        for (let res = 1; res >= 1;) {
            res = inputNum / targetBase;
            arr.unshift(inputNum % targetBase);
            inputNum = Math.floor(inputNum / targetBase);
        }
        numKey(arr); // makes sure our array presents letters if necessary.
        return arr.join(""); // Turns our array into one string, displaying final number.
    }
}

// Converter with 3 arguments (origin base, target base, and number), used to put together some of the previous functions. This is the function that is executed on click of the button.
function completeConverter(
    inBase,
    outBase,
    num = document.getElementById("num_input").value
) {
    let arr = [];
    let total = 0;
    arrayNum(num);
    powerNums = countdown(intArr.length - 1);
    if (outBase == 10) {
        // calculates each column of the number into an array
        for (let i = 0; i < powerNums.length; i++) {
            arr.push(intArr[i] * Math.pow(inBase, powerNums[i]));
        }
        // Sums up previous array to find final number.
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    } else if (inBase == 10 && outBase != 10) {
        // let num = document.getElementById("num_input").value;
        // divides the input num by the output base until result is 0. Adds the remainder of division to our array at every step.
        for (let res = 1; res >= 1;) {
            res = num / outBase;
            arr.unshift(num % outBase);
            num = Math.floor(num / outBase);
        }
        numKey(arr); // makes sure our array presents letters if necessary.
        return arr.join(""); // Turns our array into one string, displaying final number.
    }
}
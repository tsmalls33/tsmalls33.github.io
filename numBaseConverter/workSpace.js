function completeConverter(
    inBase,
    num = document.getElementById("num_input").value,
    outBase
) {
    let arr = [];
    let total = 0;
    arrayNum(num);
    if (outBase == 10) {
        // calculates each column of the number into an array
        for (let i = 0; i < colNums.length; i++) {
            arr.push(intArr[i] * Math.pow(inBase, colNums[i]));
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

/** Data validation function for input number
 * function(number to test as a string, array of valid digits)
 *
 *      for each digit in my number,
 *          for each value in my array, test if it is equal to the digit in my number.
 *              keep going until there are no digits left (=> return false & break),
 *                               or the return is true (=> return true and move on to next digit in number).
 *
 *      if at any point there is a false return,
 *          return a string saying the number doesn't correspond to selected origin base.
 *
 *      if all the digits in my number return true,
 *          return string saying number is valid.
 *
 *
 */

function numVal(numStr, arr) {
    let errorsArr = [];
    for (let i = 0; i <= numStr.length; i++) {
        if (arr.includes(numStr.charAt(i))) {
            console.log("pass");
        } else {
            console.log("fail");
            errorsArr.push(numStr.charAt(i));
        }
    }
    if (errorsArr == []) {
        return "You entered a correct number.";
    } else {
        return (
            "The following characters are not part of your selected base: " +
            errorsArr
        );
    }
}

[
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
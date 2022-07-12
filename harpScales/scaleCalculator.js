/* TO DO:
- Maybe add separate options for same note value (C# and Db for example). New scale creator can handle it and it may be needed.
- Error in Gb blues Minor scale. Maybe other similar errors due to the need for doubles of some notes in blues scales.


*/

// variables and objects
const rootSelector = document.getElementById("root_selector");
const scaleSelector = document.getElementById("scale_type_selector");
const keySelector = document.getElementById("key_selector");
let root = rootSelector.value; // Defining initial/default root
let scale = scaleSelector.value; // Defining initial/default scale
let key = keySelector.value; // Defining initial/default key fo harp diagram

// Object containing interval patterns between both blow notes and draw notes on a diatonic harmonica
const harpIntervals = {
    blow: [0, 4, 3, 5, 4, 3, 5, 4, 3, 5],
    draw: [2, 5, 4, 3, 3, 4, 2, 3, 3, 4],
};

// Interval patterns for the available scales
const intervals = {
    maj: [2, 2, 1, 2, 2, 2, 1],
    minNat: [2, 1, 2, 2, 1, 2, 2],
    majPen: [2, 2, 3, 2, 3],
    minPen: [3, 2, 2, 3, 2],
    minBlu: [3, 2, 1, 1, 3, 2],
    majBlu: [2, 1, 1, 3, 2, 3],
};

// Notes at every interval in an octave, in semitones
const notesList = [
    [1, "A"],
    [2, "Bb", "A#"],
    [3, "B"],
    [4, "C"],
    [5, "Db", "C#"],
    [6, "D"],
    [7, "Eb", "D#"],
    [8, "E"],
    [9, "F"],
    [10, "Gb", "F#"],
    [11, "G"],
    [12, "Ab", "G#"],
];

/////////////////////////////////////  EVENT LISTENERS ///////////////////////////////////////////////////////////

// Gives us the first scale (C Major), the interval pattern, and the harmonica notes in key of C on page load
window.onload = (event) => {
    document.querySelector("#digits").innerHTML = newScaleCreator(scale, root);
    document.querySelector("#intervals").innerHTML = intervals.maj.join(" - ");
    harpNotes(key);
    document.querySelector("#second-position").innerHTML = notify([
        noteNumber(key) + 7,
    ]);
    setHarpNotes();
};

// Changes the displayed scale when user selects a different scale type from the drop down.
scaleSelector.addEventListener("change", () => {
    const selection = scaleSelector.value;
    switch (selection) {
        case "maj":
            scale = "maj";
            document.querySelector("#intervals").innerHTML =
                intervals.maj.join(" - ");

            break;
        case "minNat":
            scale = "minNat";
            document.querySelector("#intervals").innerHTML =
                intervals.minNat.join(" - ");
            break;
        case "majPen":
            scale = "majPen";
            document.querySelector("#intervals").innerHTML =
                intervals.majPen.join(" - ");

            break;
        case "minPen":
            scale = "minPen";
            document.querySelector("#intervals").innerHTML =
                intervals.minPen.join(" - ");
            break;
        case "majBlu":
            scale = "majBlu";
            document.querySelector("#intervals").innerHTML =
                intervals.majBlu.join(" - ");
            break;
        case "minBlu":
            scale = "minBlu";
            document.querySelector("#intervals").innerHTML =
                intervals.minBlu.join(" - ");
            break;
    }

    document.querySelector("#digits").innerHTML = newScaleCreator(scale, root);
});

// Changes the displayed scale when user selects a different root from the dropdown.
rootSelector.addEventListener("change", () => {
    const selection = rootSelector.value;
    switch (selection) {
        case "A":
            root = "A";
            break;
        case "Bb":
            root = "Bb";
            break;
        case "B":
            root = "B";
            break;
        case "C":
            root = "C";
            break;
        case "Db":
            root = "Db";
            break;
        case "D":
            root = "D";
            break;
        case "Eb":
            root = "Eb";
            break;
        case "E":
            root = "E";
            break;
        case "F":
            root = "F";
            break;
        case "Gb":
            root = "Gb";
            break;
        case "G":
            root = "G";
            break;
        case "Ab":
            root = "Ab";
            break;
    }

    document.querySelector("#digits").innerHTML = newScaleCreator(scale, root);
});

// Changes the harmonica notes when user selects a different key from the dropdown.
keySelector.addEventListener("change", () => {
    const selection = keySelector.value;
    switch (selection) {
        case "A":
            key = "A";

            break;
        case "Bb":
            key = "Bb";
            break;
        case "B":
            key = "B";
            break;
        case "C":
            key = "C";
            break;
        case "Db":
            key = "Db";
            break;
        case "D":
            key = "D";
            break;
        case "Eb":
            key = "Eb";
            break;
        case "E":
            key = "E";
            break;
        case "F":
            key = "F";
            break;
        case "Gb":
            key = "Gb";
            break;
        case "G":
            key = "G";
            break;
        case "Ab":
            key = "Ab";
            break;
    }
    document.querySelector("#second-position").innerHTML = notify([
        noteNumber(key) + 7,
    ]);
    setHarpNotes();
});

////////////////////////////////////// FUNCTIONS  ///////////////////////////////////////////////////////////////////////////

// returns the blow notes and draw notes as an object when given the key in which the harmonica is in. This can probably be simplified.
function harpNotes(key) {
    let keyNumber = noteNumber(key);
    let notes = [];
    let currentNum = keyNumber;
    for (let i = 0; i < harpIntervals["blow"].length; i++) {
        currentNum += harpIntervals["blow"][i];
        notes.push(currentNum);
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] > 36) {
            notes[i] -= 36;
        }
        if (notes[i] > 24) {
            notes[i] -= 24;
        }
        if (notes[i] > 12) {
            notes[i] -= 12;
        }
    }
    let noteScale = [];
    notes.map(function(num) {
        for (let i = 0; i < notesList.length; i++) {
            if (notesList[i][0] === num) {
                noteScale.push(notesList[i][1]);
            }
        }
    });
    let blowNotes = noteScale;
    notes = [];
    currentNum = keyNumber;
    for (let i = 0; i < harpIntervals["draw"].length; i++) {
        currentNum += harpIntervals["draw"][i];
        notes.push(currentNum);
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] > 36) {
            notes[i] -= 36;
        }
        if (notes[i] > 24) {
            notes[i] -= 24;
        }
        if (notes[i] > 12) {
            notes[i] -= 12;
        }
    }
    noteScale = [];
    notes.map(function(num) {
        for (let i = 0; i < notesList.length; i++) {
            if (notesList[i][0] === num) {
                noteScale.push(notesList[i][1]);
            }
        }
    });
    let drawNotes = noteScale;
    let harpNotes = {
        blow: blowNotes,
        draw: drawNotes,
    };
    return harpNotes;
}

// find the number equivalent of a note from our notesList object.
function noteNumber(note) {
    for (let i = 0; i < notesList.length; i++) {
        if (notesList[i][1] === note) {
            return notesList[i][0];
        }
        if (notesList[i][2] === note) {
            return notesList[i][0];
        }
    }
}

// Crete a scale from the selected root and the selected scale type.
function scaleCreator() {
    let rootNumber = noteNumber(root);
    let scaleNumbers = [rootNumber];
    let currentNum = rootNumber;
    for (i = 0; i < intervals[scale].length; i++) {
        currentNum += intervals[scale][i];
        if (currentNum > 12) {
            currentNum -= 12;
        }
        scaleNumbers.push(currentNum);
    }
    let noteScale = [];
    scaleNumbers.map(function(num) {
        for (let i = 0; i < notesList.length; i++) {
            if (notesList[i][0] === num) {
                noteScale.push(notesList[i][1]);
            }
        }
    });
    return noteScale.join(" - ");
}

// Turns an array of numbers into a string of notes seperated by a dash (A - B - C ...)
function notify(myArray) {
    let noteScale = [];
    myArray.map(function(num) {
        for (let i = 0; i < notesList.length; i++) {
            if (num > 12) num -= 12;
            if (notesList[i][0] === num) {
                noteScale.push(notesList[i][1]);
            }
        }
    });
    return noteScale.join(" - ");
}

// Function placing individual notes into the html table cells that represent the harmonica on the displayed diagram.
function setHarpNotes() {
    document.querySelector("#blow1").innerHTML = harpNotes(key)["blow"][0];
    document.querySelector("#blow2").innerHTML = harpNotes(key)["blow"][1];
    document.querySelector("#blow3").innerHTML = harpNotes(key)["blow"][2];
    document.querySelector("#blow4").innerHTML = harpNotes(key)["blow"][3];
    document.querySelector("#blow5").innerHTML = harpNotes(key)["blow"][4];
    document.querySelector("#blow6").innerHTML = harpNotes(key)["blow"][5];
    document.querySelector("#blow7").innerHTML = harpNotes(key)["blow"][6];
    document.querySelector("#blow8").innerHTML = harpNotes(key)["blow"][7];
    document.querySelector("#blow9").innerHTML = harpNotes(key)["blow"][8];
    document.querySelector("#blow10").innerHTML = harpNotes(key)["blow"][9];
    document.querySelector("#draw1").innerHTML = harpNotes(key)["draw"][0];
    document.querySelector("#draw2").innerHTML = harpNotes(key)["draw"][1];
    document.querySelector("#draw3").innerHTML = harpNotes(key)["draw"][2];
    document.querySelector("#draw4").innerHTML = harpNotes(key)["draw"][3];
    document.querySelector("#draw5").innerHTML = harpNotes(key)["draw"][4];
    document.querySelector("#draw6").innerHTML = harpNotes(key)["draw"][5];
    document.querySelector("#draw7").innerHTML = harpNotes(key)["draw"][6];
    document.querySelector("#draw8").innerHTML = harpNotes(key)["draw"][7];
    document.querySelector("#draw9").innerHTML = harpNotes(key)["draw"][8];
    document.querySelector("#draw10").innerHTML = harpNotes(key)["draw"][9];
}

// Attempt to improved code for scale creation standards.
const allNotes = ["A", "B", "C", "D", "E", "F", "G"];
const accidentals = ["b", "#", "bb", "##"];
const intervalsFromRoot = {
    maj: [0, 2, 4, 5, 7, 9, 11],
    minNat: [0, 2, 3, 5, 7, 8, 10],
    majPen: [0, 2, 4, 7, 9],
    minPen: [0, 3, 5, 7, 10],
    minBlu: [0, 3, 5, 6, 7, 10],
    majBlu: [0, 2, 3, 4, 7, 9],
};

/* Function story

create an array 
push the scale root to the array 
push all other notes in sequence to the array using allNotes array

Now we need to add accidentals when needed.
Use notesList to find the distance in semitones between each note.
if it is higher than needed based on scale type, add # or ##
if it is lower than needed based on scale type, add b or bb

*/

function findPosition(note) {
    let rootPosition;
    for (let i = 0; i < notesList.length; i++) {
        for (let j = 0; j < notesList[i].length; j++) {
            if (note === notesList[i][j]) {
                rootPosition = i;
                break;
            }
        }
        if (rootPosition != null) break; // line unneccessary?
    }
    return rootPosition;
}

function newScaleCreator(scaleType, root) {
    let noteArr = [root];
    let rootNum;
    // finding the index of the selected root note in our allNotes array
    for (let i = 0; i < allNotes.length; i++) {
        if (root.split("")[0] === allNotes[i]) {
            rootNum = allNotes.indexOf(root.split("")[0]);
        }
    }

    // pushing the rest of the notes into the array
    let noteNum = rootNum;
    for (let i = 0; i < 6; i++) {
        noteNum++;
        if (noteNum > 6) {
            noteNum -= 7;
        }
        noteArr.push(allNotes[noteNum]);
    }
    noteArr.push(root); // pushing the root at the end of array to display a root to root scale

    // taking notes out for pentatonic and blues scales
    switch (scale) {
        case "minPen":
            noteArr.splice(1, 1);
            noteArr.splice(4, 1);
            break;
        case "majPen":
            noteArr.splice(3, 1);
            noteArr.splice(5, 1);
            break;
        case "minBlu":
            noteArr.splice(1, 1);
            break;
        case "majBlu":
            noteArr.splice(6, 1);
            break;
    }

    // Finding position of next notes in our noteArr, finding distance between this and root position, determining if it is what we want.
    // This needs to be rewritten in a switch statement.

    for (let i = 1; i < noteArr.length; i++) {
        if (findPosition(noteArr[i]) >= findPosition(root)) {
            if (
                Math.abs(findPosition(noteArr[i]) - findPosition(root)) <
                intervalsFromRoot[scaleType][i] - 1
            ) {
                noteArr[i] += accidentals[3];
            } else if (
                Math.abs(findPosition(noteArr[i]) - findPosition(root)) >
                intervalsFromRoot[scaleType][i] + 1
            ) {
                noteArr[i] += accidentals[2];
            } else if (
                Math.abs(findPosition(noteArr[i]) - findPosition(root)) <
                intervalsFromRoot[scaleType][i]
            ) {
                noteArr[i] += accidentals[1];
            } else if (
                Math.abs(findPosition(noteArr[i]) - findPosition(root)) >
                intervalsFromRoot[scaleType][i]
            ) {
                noteArr[i] += accidentals[0];
            }
        } else {
            if (
                12 - Math.abs(findPosition(noteArr[i]) - findPosition(root)) <
                intervalsFromRoot[scaleType][i] - 1
            ) {
                noteArr[i] += accidentals[3];
            } else if (
                12 - Math.abs(findPosition(noteArr[i]) - findPosition(root)) >
                intervalsFromRoot[scaleType][i] + 1
            ) {
                noteArr[i] += accidentals[2];
            } else if (
                12 - Math.abs(findPosition(noteArr[i]) - findPosition(root)) <
                intervalsFromRoot[scaleType][i]
            ) {
                noteArr[i] += accidentals[1];
            } else if (
                12 - Math.abs(findPosition(noteArr[i]) - findPosition(root)) >
                intervalsFromRoot[scaleType][i]
            ) {
                noteArr[i] += accidentals[0];
            }
        }
    }

    return noteArr.join(" - ");
}
// Variable declarations

const root = document.querySelector(":root");
const uab = document.getElementById("uab");
const utc = document.getElementById("utc");
const proClass = document.getElementsByClassName("professional");
const academicClass = document.getElementsByClassName("academic");
const volunteeringClass = document.getElementsByClassName("volunteering");
const proBasketball = document.getElementById("basketball");
const selectTheme = document.getElementById("theme-selector");
const selectOrder = document.getElementById("order-selector");
const selectCategory = document.getElementById("category-selector");
const mpaImage = document.getElementsByClassName("mpa")[0];
const bachelorImage = document.getElementsByClassName("bachelor")[0];
const internshipImage = document.getElementsByClassName("internship")[0];

// Change theme function

function changeTheme(accentColor, bgColor, boxBgColor) {
    root.style.setProperty("--boxBackgroundColor", boxBgColor);
    uab.style.setProperty("--backgroundColor", bgColor);
    uab.style.setProperty("--accentColor", accentColor);
    utc.style.setProperty("--backgroundColor", bgColor);
    utc.style.setProperty("--accentColor", accentColor);
    basketball.style.setProperty("--backgroundColor", bgColor);
    basketball.style.setProperty("--accentColor", accentColor);
}

// Theme selector

selectTheme.addEventListener("change", () => {
    const choice = selectTheme.value;
    switch (choice) {
        case "original":
            root.style.setProperty("--boxBackgroundColor", "white");
            uab.style.setProperty("--backgroundColor", "hsla(159, 100%, 19%, 0.1)");
            uab.style.setProperty("--accentColor", "hsla(159, 100%, 19%, 1)");
            utc.style.setProperty("--backgroundColor", "hsla(209, 100%, 21%, 0.2)");
            utc.style.setProperty("--accentColor", "hsla(209, 100%, 21%, 1)");
            basketball.style.setProperty(
                "--backgroundColor",
                "hsla(221, 100%, 14%, 0.15)"
            );
            basketball.style.setProperty("--accentColor", "hsla(0, 0%, 0%, 1)");
            break;

        case "dark":
            changeTheme("white", "hsla(0, 0%, 0%, 0.6)", "rgb(70,70,70)");
            break;
        case "light":
            changeTheme("black", "hsla(0, 0%, 94%,0.3)", "white");
            break;
        case "vintage":
            changeTheme(
                "hsl(165.6, 100%, 100%)",
                "hsla(165.6, 27.78%, 64.71%, 0.6)",
                "hsla(0, 82.76%, 65.88%, 0.7)"
            );
            break;
        case "matrix":
            changeTheme(
                "#adff2f",
                "hsla(0, 0%, 0%, 0.6)",
                "hsla(84, 100%, 59%, 0.08)"
            );
            break;
        case "blue":
            changeTheme("hsl(204, 100%, 46%)", "hsla(0, 0%, 90%, 0.3)", "white");
            break;
    }
});

// Order selector

selectOrder.addEventListener("change", () => {
    const choice = selectOrder.value;
    switch (choice) {
        case "latest-first":
            uab.style.setProperty("order", "3");
            utc.style.setProperty("order", "2");
            basketball.style.setProperty("order", "1");
            break;
        case "latest-last":
            uab.style.setProperty("order", "1");
            utc.style.setProperty("order", "2");
            basketball.style.setProperty("order", "3");
            break;
    }
});

// Category selector using class name

selectCategory.addEventListener("change", () => {
    const choice = selectCategory.value;
    switch (choice) {
        case "all":
            for (var i = 0; i < proClass.length; i++) {
                proClass[i].style.setProperty("display", "block");
            }
            for (var i = 0; i < academicClass.length; i++) {
                academicClass[i].style.setProperty("display", "block");
            }
            for (var i = 0; i < volunteeringClass.length; i++) {
                volunteeringClass[i].style.setProperty("display", "block");
            }

            bachelorImage.className = "notification-image bachelor";
            mpaImage.className = "notification-image academic mpa";
            internshipImage.className = "notification-image professional internship";
            break;
        case "professional":
            for (var i = 0; i < proClass.length; i++) {
                proClass[i].style.setProperty("display", "block");
            }
            for (var i = 0; i < academicClass.length; i++) {
                academicClass[i].style.setProperty("display", "none");
            }
            for (var i = 0; i < volunteeringClass.length; i++) {
                volunteeringClass[i].style.setProperty("display", "none");
            }

            bachelorImage.className = "notification-image bachelor";
            mpaImage.className = "notification-image academic mpa";
            internshipImage.className =
                "notification-image professional internship mod";

            break;
        case "academic":
            for (var i = 0; i < proClass.length; i++) {
                proClass[i].style.setProperty("display", "none");
            }
            for (var i = 0; i < academicClass.length; i++) {
                academicClass[i].style.setProperty("display", "block");
            }
            for (var i = 0; i < volunteeringClass.length; i++) {
                volunteeringClass[i].style.setProperty("display", "none");
            }

            bachelorImage.className = "notification-image bachelor mod";
            mpaImage.className = "notification-image academic mpa mod";
            internshipImage.className = "notification-image professional internship";
            break;
    }
});

// Category selector using id attribute

// selectCategory.addEventListener("change", () => {
//     const choice = selectCategory.value;
//     switch (choice) {
//         case "all":
//             uab.style.setProperty("display", "block");
//             utc.style.setProperty("display", "block");
//             basketball.style.setProperty("display", "block");
//             break;
//         case "professional":
//             uab.style.setProperty("display", "none");
//             utc.style.setProperty("display", "none");
//             basketball.style.setProperty("display", "block");
//             break;
//         case "academic":
//             uab.style.setProperty("display", "block");
//             utc.style.setProperty("display", "block");
//             basketball.style.setProperty("display", "none");
//             break;
//     }
// });
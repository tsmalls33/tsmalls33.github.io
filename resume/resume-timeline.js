const root = document.querySelector(":root");
const uab = document.getElementById("uab");
const utc = document.getElementById("utc");
const pro = document.getElementsByClassName("professional");
const academic = document.getElementsByClassName("academic");
const proBasketball = document.getElementById("basketball");
const selectTheme = document.getElementById("theme-selector");
const selectOrder = document.getElementById("order-selector");
const selectCategory = document.getElementById("category-selector");

function changeTheme(accentColor, bgColor, boxBgColor) {
    root.style.setProperty("--boxBackgroundColor", boxBgColor);
    uab.style.setProperty("--backgroundColor", bgColor);
    uab.style.setProperty("--accentColor", accentColor);
    utc.style.setProperty("--backgroundColor", bgColor);
    utc.style.setProperty("--accentColor", accentColor);
    basketball.style.setProperty("--backgroundColor", bgColor);
    basketball.style.setProperty("--accentColor", accentColor);
}

selectTheme.addEventListener("change", () => {
    const choice = selectTheme.value;
    switch (choice) {
        case "original":
            root.style.setProperty("--boxBackgroundColor", "white");
            uab.style.setProperty("--backgroundColor", "hsla(159, 100%, 19%, 0.1)");
            uab.style.setProperty("--accentColor", "hsla(159, 100%, 19%, 1)");
            utc.style.setProperty("--backgroundColor", "hsla(209, 100%, 21%, 0.1)");
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
            changeTheme("hsl(219, 100%, 46%)", "hsla(219, 100%, 46%, 0.1)", "white");
            break;
    }
});

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

// selectCategory.addEventListener("change", () => {
//     const choice = selectCategory.value;
//     switch (choice) {
//         case "all":
//             pro.style.setProperty("display", "block");
//             academic.style.setProperty("display", "block");
//             break;
//         case "professional":
//             pro.style.setProperty("display", "block");
//             academic.style.setProperty("display", "none");
//             break;
//         case "academic":
//             pro.style.setProperty("display", "none");
//             academic.style.setProperty("display", "block");
//             break;
//     }
// });

selectCategory.addEventListener("change", () => {
    const choice = selectCategory.value;
    switch (choice) {
        case "all":
            uab.style.setProperty("display", "block");
            utc.style.setProperty("display", "block");
            basketball.style.setProperty("display", "block");
            break;
        case "professional":
            uab.style.setProperty("display", "none");
            utc.style.setProperty("display", "none");
            basketball.style.setProperty("display", "block");
            break;
        case "academic":
            uab.style.setProperty("display", "block");
            utc.style.setProperty("display", "block");
            basketball.style.setProperty("display", "none");
            break;
    }
});
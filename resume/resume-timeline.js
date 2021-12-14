const root = document.querySelector(":root");
const uab = document.getElementById("uab");
const utc = document.getElementById("utc");
const proBasketball = document.getElementById("basketball");
const select = document.querySelector("select");

function changeTheme(accentColor, bgColor, boxBgColor) {
    root.style.setProperty("--boxBackgroundColor", boxBgColor);
    uab.style.setProperty("--backgroundColor", bgColor);
    uab.style.setProperty("--accentColor", accentColor);
    utc.style.setProperty("--backgroundColor", bgColor);
    utc.style.setProperty("--accentColor", accentColor);
    basketball.style.setProperty("--backgroundColor", bgColor);
    basketball.style.setProperty("--accentColor", accentColor);
}

select.addEventListener("change", () => {
    const choice = select.value;
    switch (choice) {
        case "original":
            root.style.setProperty("--boxBackgroundColor", "white");
            uab.style.setProperty("--backgroundColor", "hsla(159, 100%, 19%, 0.1)");
            uab.style.setProperty("--accentColor", "hsla(159, 100%, 19%, 1)");
            utc.style.setProperty("--backgroundColor", "hsla(209, 100%, 21%, 0.1)");
            utc.style.setProperty("--accentColor", "hsla(209, 100%, 21%, 1)");
            basketball.style.setProperty(
                "--backgroundColor",
                "hsla(39, 100%, 34%, 0.1)"
            );
            basketball.style.setProperty("--accentColor", "rgb(170, 110, 0)");
            break;

        case "dark":
            changeTheme("white", "black", "grey");
            break;
        case "light":
            changeTheme("black", "rgb(240, 240, 240)", "white");
            break;
        case "vintage":
            changeTheme(
                "hsl(165.6, 100%, 100%)",
                "hsla(165.6, 27.78%, 64.71%, 1)",
                "hsla(0, 82.76%, 65.88%, 1)"
            );
            break;
        case "matrix":
            changeTheme("#adff2f", "black", "hsla(84, 100%, 59%, 0.08)");
            break;
        case "blue":
            changeTheme("hsl(219, 100%, 46%)", "hsla(219, 100%, 46%, 0.1)", "white");
            break;
    }
});
const uaAlphabet = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
const engAlpabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

onScreenKeyboard = () => {
    let keyboard = "";
    language = document.documentElement.lang;
    if (language === "ua") {
        uaAlphabet.map((letter, index) => {
            if (index % 12 === 0) keyboard += "<br>";
            keyboard += `<button onclick="addLetter('${letter}')">${letter}</button>`;
        })
    } else {
        engAlpabet.map((letter, index) => {
            if (index % 12 === 0) keyboard += "<br>";
            keyboard += `<button onclick="addLetter('${letter}')">${letter}</button>`;
        })
    }
    keyboard += `<button onclick="addLetter(' ')">Space</button>`;
    keyboard += `<button onclick="changeLanguage()">Alt+Shift</button>`;
    document.getElementById("keyboard").innerHTML = keyboard;
}

addLetter = (letter) => {
    document.getElementById("screenKeyboard").value += letter;
}

resetText = () => {
    document.getElementById("screenKeyboard").value = "";
}

changeLanguage = () => {
    currentLang = document.documentElement.lang;
    if (currentLang === "ua") {
        document.documentElement.setAttribute('lang', "eng");
    } else {
        document.documentElement.setAttribute('lang', "ua");
    }
    onScreenKeyboard();
}
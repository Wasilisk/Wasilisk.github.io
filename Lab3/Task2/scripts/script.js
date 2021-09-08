const uaAlphabet = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];

onScreenKeyboard = () => {
    let keyboard = "";
    uaAlphabet.map((letter,index) => {
        if(index % 12 === 0) keyboard += "<br>"
        keyboard += `<button onclick="addLetter('${letter}')">${letter}</button>`
    })
    keyboard += `<button onclick="addLetter(' ')">Space</button>`
    document.getElementById("keyboard").innerHTML = keyboard;
}

addLetter = (letter) => {
    document.getElementById("screenKeyboard").value += letter;
}

resetText = () => {
    document.getElementById("screenKeyboard").value = "";
}
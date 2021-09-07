document.getElementById("fullname").innerText = "Петрина Василь Михайлович";

showBirthDate = () => {
    let birthBlock = document.getElementById("birthInfo");
    birthBlock.style.display = "flex";
    birthBlock.classList.add("birthBlock");
    document.getElementById("birthDate").innerText = "Дата народження: 16 березня 2002 року";
    document.getElementById("birthPlace").innerText = "Місце народження: смт. Запитів";
    document.getElementById("button").style.display = "none";
}
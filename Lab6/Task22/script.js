const emailRegex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
const fullnameRegex = /^([A-ZА-Я])([a-zа-я]+)/;
const indexRegex = /^([0-9]){5}$/;
const loginRegex = /^([a-zA-Z\-])+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/;

$("#validationForm").submit(function(event) {
    validateData();
    event.preventDefault();
});

const setErrorInput = (id) => {
    $(`#${id}`).css({"color": "red", "border-width": "5px", "border": "red double"})
}

const setDefaultInput =(id) => {
    $(`#${id}`).css({"color": "black", "border-width": "0px", "border": "1px solid #ccc"})
}

const validateData = () => {
    let firstName = fullnameRegex.test($("#fname").val());
    setDefaultInput("fname")
    $("#fnameMessage").text( firstName? "✔" : "Ім'я повинно починатись з великої літери")
    if(!firstName) {
        setErrorInput("fname")
    }

    let lastName = fullnameRegex.test($("#lname").val());
    setDefaultInput("lname")
    $("#lnameMessage").text( lastName ? "✔" : "Прізвище повинно починатись з великої літери")
    if(!lastName) {
        setErrorInput("lname")
    }

    let login = loginRegex.test($("#login").val());
    setDefaultInput("login")
    $("#loginMessage").text( login ? "✔" : "Логін повинен бути написаний лише латиницею")
    if(!login) {
        setErrorInput("login")
    }

    let password = passwordRegex.test($("#password").val());
    setDefaultInput("password")
    $("#passwordMessage").text( password ? "✔" : "Пароль повинень містити мінімум 6 символів (З яких мінімум по 1 букві і цифрі)")
    if(!password) {
        setErrorInput("password")
    }

    let postcode = indexRegex.test($("#postcode").val());
    setDefaultInput("postcode")
    $("#postcodeMessage").text( postcode ? "✔" : "Повинен містити 5 цифр")
    if(!postcode) {
        setErrorInput("postcode")
    }

    let email = emailRegex.test($("#email").val());
    setDefaultInput("email")
    $("#emailMessage").text( email ? "✔" : "Не відповідає структурі електронної пошти")
    if(!email) {
        setErrorInput("email")
    }
}
const emailRegex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
const fullnameRegex = /^(([A-ZА-ЯІЄЇ])([a-zа-яієї]+)([\s])*){3}/;
const phoneNumberRegex = /^\+[0-9]{3}\s\((\d+)\)\s\d{3}-\d{2}-\d{2}$/;

$(document).on('submit','#main-form', submitForm)

const resetForm = () => {
    $("#main-form")[0].reset();
}

const inputSuccess = (id) => {
    $(`#${id}`).css({"border": "2px solid green"})
    $(`#${id}_error`).hide()
}

const inputError = (id) => {
    $(`#${id}`).css({"border": "2px solid red"})
    $(`#${id}_error`).show()
}

const validateData = () => {
    let fullname = fullnameRegex.test($("#fullname").val());
    fullname? inputSuccess("fullname") : inputError("fullname")

    let provider_fullname = fullnameRegex.test($("#provider_fullname").val());
    provider_fullname? inputSuccess("provider_fullname") : inputError("provider_fullname")

    let email = emailRegex.test($("#email").val());
    email? inputSuccess("email") : inputError("email")

    let phone_number = phoneNumberRegex.test($("#phone_number").val());
    phone_number? inputSuccess("phone_number") : inputError("phone_number")

    if(fullname && provider_fullname && email && phone_number) return true
}

const deleteRow = (rowId) => {
    $(`#${rowId}`).remove();
}

const addToTable = () => {
    if($("#main_table").hide()) {
        $("#main_table").show()
    }
    let id = Math.floor(Math.random() * 100000);
    let fullname = $("#fullname").val();
    let product_name = $("#product_name").val();
    let product_price = $("#product_price").val();
    let number_sets = $("#number_sets").val();
    let provider_fullname = $("#provider_fullname").val();
    let email = $("#email").val();
    let phone_number = $("#phone_number").val();
    let checked_content = []
    $('input:checkbox').each(function () {
        this.checked ? checked_content.push($(this).val()) : null
    });

    $("#main_table").append(
        `
        <tr id="${id}">
            <td>${fullname}</td>
            <td>${product_name}</td>
            <td>${product_price}</td>
            <td>${number_sets}</td>
            <td>${provider_fullname}</td>
            <td>${email}</td>
            <td>${phone_number}</td>
            <td>${checked_content.join()}</td>
            <td><button onclick="deleteRow(${id})" class="deleteButton">Видалити</button></td>
        </tr>
        `
    )

}

function submitForm(event) {
    event.preventDefault()
    if(validateData()) {
        addToTable()
        resetForm()
    }
}
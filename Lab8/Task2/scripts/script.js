
$(document).ready(() => {
    $("#firstBtn").bind("click", () => {
        alert("Одинарний клік")
    });

    $("#secondBtn").bind("dblclick",() => {
        alert("Подвійний клік")
    });
});


$(document).ready(() => {
    $("#Label").bind("click", () => {
        $("#Image").show();
    });
    $("#Image").bind("click", () => {
        $("#Image").hide();
    });

    $("#Image").bind("mouseover",() => {
        $('#pop').toggle();
    });
    $("#Image").bind("mouseout",() => {
        $('#pop').toggle();
    });
});

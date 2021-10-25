$( document ).ready(function() {
    $(".friend").each(function(index) {
        $(this).find("img").click(() => setInfo(index));
        $(this).find("h3").click(() => setInfo(index));
    });
});

let previosIndex;

function setInfo (index) {
    $(".friend").eq(index).toggleClass("active")
    $(".friend").eq(previosIndex).toggleClass("active")

    $(`.Info${index+1}`).show();
    if (previosIndex !== index)$(`.Info${previosIndex+1}`).hide();
    previosIndex = index
}
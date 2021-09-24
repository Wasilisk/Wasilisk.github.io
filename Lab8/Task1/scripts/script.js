
$(document).ready(() => {
    $(".styleBlock").bind("click", () => {
        $(".styleBlock").addClass("active");
    });

    $(".styleBlock").bind("dblclick", () => {
        $(".styleBlock").removeClass("active");
    });
});
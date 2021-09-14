
$("form").submit(function() {
    if ($("input:first").val() == "correct") {
        $("span").text("Перевіряєм...").show().fadeOut(1000);
        return true;
    }
    $("span").text("Неправильно!").show().fadeOut(1000);
    return false;
});


$("#test").submit(function (event){
    checkTest();
    $(this).find("input[type='submit']").prop('disabled',true);
    event.preventDefault();
});

checkTest = () => {
    let resultCount = 0;

    if ($('input[name="task1"]:checked').val() === "1") resultCount++;
    if ($('input[name="task2"]:checked').val() === "3") resultCount++;

    $("input[name='task3']:checked").each(function () {
        if($(this).val() === "1" || $(this).val() === "4") resultCount++;
    });
    $("input[name='task4']:checked").each(function () {
        if($(this).val() === "2" || $(this).val() === "3") resultCount++;
    });

    if($('#task5').val() === "Result 8") resultCount++;
    if($('#task6').val() === "0") resultCount++;

    $("#resultText").text(`Ваш результат ${resultCount}/8`)
    $(".resultBlock").show()
}
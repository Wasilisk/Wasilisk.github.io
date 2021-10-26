const resetListColor = () => {
    $("#mainList").children().css("color", "black");
}

const getAllChildren = () => {
    resetListColor();
    $("#mainList").children().css("color", "red");
}

const getLastElement = () => {
    resetListColor();
    $("#mainList").children().last().css("color", "red");
}

const getPrevLastElement = () => {
    resetListColor();
    $("#mainList").children().last().prev().css("color", "red");
}

const oddElement = () => {
    resetListColor();
    $("#mainList").children().each(function (index) {
        if (index % 2 === 0) {
            $(this).css("color", "red");
        }
    })
}

const ignoreFirstElement = () => {
    resetListColor();
    $("li:first").nextAll().css("color", "red");
}
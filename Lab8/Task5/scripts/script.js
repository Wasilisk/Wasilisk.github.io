const trimText = () => {
    $("#textInput").val($("#textInput").val().trim())
}

const htmlText = () => {
    $("#htmlBlock").prepend($.parseHTML($("#htmlInput").val()))
}
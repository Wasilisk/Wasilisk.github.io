const apllyModify = () => {
    $("li").filter(function (index) {
        return ((index+1) % 3 === 0 || this.className === "modify")
    }).css({
        color: "red",
        fontWeight: "bold"
    }).html((index,currentcontent) =>
    {
        return currentcontent + " modify"
    })
}
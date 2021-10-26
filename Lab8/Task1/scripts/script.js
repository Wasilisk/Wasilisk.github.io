const addButton = () => {
    $("#buttonGroup").html("<button>Стару кнопку вже не повернути (</button>")
}

const editColor = () => {
    $("#textLabel").css({color: `#${Math.floor(Math.random() * 16777215).toString(16)}`})
}

const getValue = () => {
    alert($("#textInput").val())
}

const getImageSrc = () => {
    alert($("#catImage").attr("src"))
}

const editImageHeight = () => {
    $("#catImage").attr("height", "380")
}

const replaceImage = () => {
    $("#catImage").attr({
        src: "https://memepedia.ru/wp-content/uploads/2020/12/pop-cat-2-768x745.jpg",
        alt: "PopCat"
    })
    setTimeout(() => {
        $("#catImage").attr({
            src: "https://mtdata.ru/u22/photoBDCA/20391403917-0/original.jpg",
            alt: "PopCat"
        })
    }, 500)
}

const editHeight = () => {
    $("#catImage").attr("height", function (i, val) {
        return val-20;
    })
}

const deleteImageSrc = () => {
    $("#catImage").removeAttr("src")
}

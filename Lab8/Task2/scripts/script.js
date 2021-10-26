const addText = () => {
    $("#memeBlock").prepend('<p>Коли подивився відео, як вбивають тварин, щоб зробити' +
        ' ковбасу і тепер тобі стало шкода тварин, коли ти їсиш її</p>');

}

const replaceImage = () => {
    $("#replaceImage").replaceWith('<img src="https://cs13.pikabu.ru/post_img/big/2020/01/16/11/157920310815460102.jpg">')
}

const editHeight = () => {
    const image = $("#heightImage")
    image.innerHeight((i, height) => {
        return height-200;
    })
    const imageOffset = image.offset()
    alert(`
    Top: ${imageOffset.top}
    Left: ${imageOffset.left}
    `);
}

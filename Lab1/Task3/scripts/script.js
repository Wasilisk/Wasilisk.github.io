
showAction = (message) => {
    let result = document.getElementById("result");
    let inputText = document.getElementById("text");
    result.value = `${message} ${inputText.value}`;
    result.dispatchEvent(new Event('input', { bubbles: true }))
}

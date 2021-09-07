roundNum = (number) => {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}

clock = () => {
    let nowDate = new Date();
    let dateStr = `${nowDate.getFullYear()}#${roundNum(nowDate.getMonth() + 1)}#${roundNum(nowDate.getDay())}`;
    let timeStr = `${roundNum(nowDate.getHours())}#${roundNum(nowDate.getMinutes())}#${roundNum(nowDate.getSeconds())}`;
    let resultTime = `${dateStr}-${timeStr}`
    document.getElementById("date").value = resultTime;
}

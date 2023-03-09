function Clock() {
    let Datetime = new Date();
    let hrs = Datetime.getHours();
    let min = Datetime.getMinutes();
    let sec = Datetime.getSeconds();
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return (
        <div className="Clock">
            <span>{hrs}</span>
            <span>:</span>
            <span>{min}</span>
            <span>:</span>
            <span>{sec}</span>
        </div>
    )
}

export default Clock
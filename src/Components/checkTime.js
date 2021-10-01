function checkTime(startTime,endTime){
    const startParsed = Date.parse(startTime);
    const endParsed = Date.parse(endTime);

    return startParsed < endParsed;
}

export default checkTime()
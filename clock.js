

setInterval(() => {
    let t= new Date()
    let hTime=t.getHours();
    let mTime=t.getMinutes();
    let sTime=t.getSeconds();
    let hRotation = 30 * hTime + mTime / 2;
    let mRotation = 6 * mTime;
    let sRotation = 6 * sTime;

    hoursHand.style.transform = `rotate(${hRotation}deg)`;
    minutesHand.style.transform = `rotate(${mRotation}deg)`;
    secondsHand.style.transform = `rotate(${sRotation}deg)`;

}, 1000);
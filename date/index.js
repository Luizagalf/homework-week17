let formatDate = (date) => {
    let now = new Date(date);
    let diff = Date.now() - now;
    let sec = Math.round(diff);
    if (sec < 1000) {
        console.log(`Прямо сейчас`);
    } 
    else {
        let min = Math.round(diff / 1000);
        if (min < 60) {
            console.log(`${min} сек. назад`);
        } else {
            let hour = Math.round(diff / 1000 / 60);
            if (hour < 60) {
                console.log(`${hour} мин. назад`);
            } else {
                let options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    timezone: 'UTC',
                };
                console.log(new Date().toLocaleString("ru", options));
            }
        }
    }
}
formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400 * 1000));
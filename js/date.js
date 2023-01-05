const RELATIONSHIP_DATE = new Date('February 03, 2022 18:00:00 GMT+07:00');
const FLIRT_DATE = new Date('November 28, 2021 09:26:00 GMT+07:00');
//const RELATIONSHIP_DATE = new Date('February 03, 2022 18:00:00');
//const FLIRT_DATE = new Date('November 28, 2021 09:26:00');
// const RELATIONSHIP_DATE = new Date(2022, 1, 3, 18);
// const FLIRT_DATE = new Date(2021, 10, 28, 9, 26);
let sinceDate = RELATIONSHIP_DATE;

function updateDate() {
    let now = new Date();
    updateYearText(diffYear(now, sinceDate));
    updateMonthText(diffMonth(now, sinceDate));
    updateDayText(diffDay(now, sinceDate));
    updateHourText(diffHour(now, sinceDate));
    updateMinuteText(diffMinute(now, sinceDate));
    updateSecondText(diffSecond(now, sinceDate));
}

function testDate() {
    logDate(new Date(2022, 1, 4, 17));
    logDate(new Date(2022, 1, 4, 17, 59));
    logDate(new Date(2022, 1, 4, 17, 59, 59));
    logDate(new Date(2022, 1, 4, 18));
    logDate(new Date(2022, 2, 2, 18));
    logDate(new Date(2022, 2, 3, 18));
    logDate(new Date(2022, 2, 4, 18));
    logDate(new Date(2023, 0, 2, 18));
    logDate(new Date(2023, 0, 3, 18));
    logDate(new Date(2023, 0, 4, 18));
    logDate(new Date(2023, 1, 2, 18));
    logDate(new Date(2023, 1, 3, 17));
    logDate(new Date(2023, 1, 3, 17, 59));
    logDate(new Date(2023, 1, 3, 17, 59, 59));
    logDate(new Date(2023, 1, 3, 18));
    logDate(new Date(2023, 1, 3, 18, 0, 1));
    logDate(new Date(2023, 1, 4, 18));
    logDate(new Date(2023, 2, 2, 18));
    logDate(new Date(2023, 2, 3, 18));
    logDate(new Date(2023, 2, 4, 18));
}

function logDate(date) {
    console.log(
        "%d/%d/%d %d:%d:%d",
        diffYear(date, sinceDate),
        diffMonth(date, sinceDate),
        diffDay(date, sinceDate),
        diffHour(date, sinceDate),
        diffMinute(date, sinceDate),
        diffSecond(date, sinceDate)
    );
}

function diffYear(now, since) {
    var year = now.getFullYear() - since.getFullYear();
    if (
        (
            now.getSeconds() < since.getSeconds() &&
            now.getMinutes() == since.getMinutes() &&
            now.getHours() == since.getHours() &&
            now.getDate() == since.getDate() &&
            now.getMonth() == since.getMonth()
        ) ||
        (
            now.getMinutes() < since.getMinutes() &&
            now.getHours() == since.getHours() &&
            now.getDate() == since.getDate() &&
            now.getMonth() == since.getMonth()
        ) ||
        (
            now.getHours() < since.getHours() &&
            now.getDate() == since.getDate() &&
            now.getMonth() == since.getMonth()
        ) ||
        (
            now.getDate() < since.getDate() &&
            now.getMonth() == since.getMonth()
        ) ||
        (now.getMonth() < since.getMonth())
    ) {
        year--;
    }
    return year;
}

function diffMonth(now, since) {
    var month = (12 + now.getMonth() - since.getMonth()) % 12;
    if (
        (
            now.getSeconds() < since.getSeconds() &&
            now.getMinutes() == since.getMinutes() &&
            now.getHours() == since.getHours() &&
            now.getDate() == since.getDate()
        ) ||
        (
            now.getMinutes() < since.getMinutes() &&
            now.getHours() == since.getHours() &&
            now.getDate() == since.getDate()
        ) ||
        (
            now.getHours() < since.getHours() &&
            now.getDate() == since.getDate()
        ) ||
        (now.getDate() < since.getDate())
    ) {
        month = (12 + month - 1) % 12;
    }
    return month;
}

function diffDay(now, since) {
    var day = (daysInMonth(now.getMonth(), now.getFullYear()) + + now.getDate() - since.getDate()) % daysInMonth(now.getMonth(), now.getFullYear());
    if (
        (
            now.getSeconds() < since.getSeconds() &&
            now.getMinutes() == since.getMinutes() &&
            now.getHours() == since.getHours()
        ) ||
        (
            now.getMinutes() < since.getMinutes() &&
            now.getHours() == since.getHours()
        ) ||
        (now.getHours() < since.getHours())
    ) {
        day = (daysInMonth(now.getMonth(), now.getFullYear()) + day - 1) % daysInMonth(now.getMonth(), now.getFullYear());
    }
    return day;
}

function diffHour(now, since) {
    let hour = (24 + now.getHours() - since.getHours()) % 24;
    return hour;
}

function diffMinute(now, since) {
    let minute = (60 + now.getMinutes() - since.getMinutes()) % 60;
    return minute;
}

function diffSecond(now, since) {
    let second = (60 + now.getSeconds() - since.getSeconds()) % 60;
    return second;
}

function updateYearText(year) {
    document.getElementById("year-text").textContent = year;
    document.getElementById("year-suffix").textContent = (year <= 2 ? "Year" : "Years");
    if (year <= 0)
        document.getElementById('year-card').hidden = true;
    else
        document.getElementById('year-card').hidden = false;
}

function updateMonthText(month) {
    document.getElementById("month-text").textContent = month;
    document.getElementById("month-suffix").textContent = (month <= 2 ? "Month" : "Months");
    if (month <= 0)
        document.getElementById('month-card').hidden = true;
    else
        document.getElementById('month-card').hidden = false;
}

function updateDayText(day) {
    document.getElementById("day-text").textContent = day;
    document.getElementById("day-suffix").textContent = (day <= 2 ? "Day" : "Days");
    if (day <= 0)
        document.getElementById('day-card').hidden = true;
    else
        document.getElementById('day-card').hidden = false;
}

function updateHourText(hour) {
    document.getElementById("hour-text").textContent = hour;
    document.getElementById("hour-suffix").textContent = (hour <= 2 ? "Hour" : "Hours");
    if (hour <= 0)
        document.getElementById('hour-card').hidden = true;
    else
        document.getElementById('hour-card').hidden = false;
}

function updateMinuteText(minute) {
    document.getElementById("minute-text").textContent = minute;
    document.getElementById("minute-suffix").textContent = (minute <= 2 ? "Minute" : "Minutes");
    if (minute <= 0)
        document.getElementById('minute-card').hidden = true;
    else
        document.getElementById('minute-card').hidden = false;
}

function updateSecondText(second) {
    document.getElementById("second-text").textContent = second;
    document.getElementById("second-suffix").textContent = (second <= 2 ? "Second" : "Seconds");
    if (second <= 0)
        document.getElementById('second-card').hidden = true;
    else
        document.getElementById('second-card').hidden = false;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function sinceToggle(p) {
    if (sinceDate == RELATIONSHIP_DATE) {
        sinceDate = FLIRT_DATE;
        p.textContent = "— Flirt Since 28/11/2021 09:26 —";
    }
    else {
        sinceDate = RELATIONSHIP_DATE;
        p.textContent = "— In Relationship Since 03/02/2022 18:00 —";
    }
    updateDate();
}
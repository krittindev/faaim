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
        "%o \n %o \n %d/%d/%d %d:%d:%d",
        date,
        sinceDate,
        diffYear(date, sinceDate),
        diffMonth(date, sinceDate),
        diffDay(date, sinceDate),
        diffHour(date, sinceDate),
        diffMinute(date, sinceDate),
        diffSecond(date, sinceDate)
    );
}
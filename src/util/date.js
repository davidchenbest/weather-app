import dateFormat from "dateformat";
const now = new Date();

const getDay = (date) => {
    const today = dateFormat(now, "ddd");
    const dateSplit = date.split('-')
    const year = +dateSplit[0]
    const month = +dateSplit[1]
    const day = +dateSplit[2]
    const dayOfWeek = dateFormat(`${month}/${day}/${year}`, 'ddd')
    if (dayOfWeek === today) return 'Today'
    return dayOfWeek;
}

export { getDay }
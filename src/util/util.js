import queryString from 'query-string'

function timeAgoSinceNow(date) {
    let createDate = new Date(date)
    let currentDate = new Date()
    let createDateTimeStamp = createDate.getTime()
    let currentDateTimeStamp = currentDate.getTime()
    let timeSinceNow = Math.floor((currentDateTimeStamp - createDateTimeStamp) / 1000)

    let years = Math.floor(timeSinceNow / (60*60*24*365))
    if (years) { return years + "年前"} 
    let months = Math.floor(timeSinceNow / (60*60*24*30))
    if (months) { return months + "月前"} 
    let days = Math.floor(timeSinceNow / (60*60*24))
    if (days) { return days + "天前"} 
    let hours = Math.floor(timeSinceNow / (60*60))
    if (hours) { return hours + "小时前"} 
    let minutes = Math.floor(timeSinceNow / 60)
    if (minutes) { return minutes + "分钟前"} 
    return timeSinceNow + "秒前"
}

export {timeAgoSinceNow}


export function getUrlParams(search, key) {
    const params = queryString.parse(search) || {}
    return key ? params[key] : params
}
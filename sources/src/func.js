export const getDateStr = (date, type) => {
    if (type === 'dot') {
        let day = date.getDate()
        let month = date.getMonth()
        return `${day < 10 ? 0 : ''}${day + 1}.${month < 10 ? 0 : ''}${month + 1}.${date.getFullYear()}`
    }
}

export const getStyle = (el, style) => {
    return getComputedStyle(el)[style]
}
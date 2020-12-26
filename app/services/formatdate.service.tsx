import moment from 'moment'

var moments = require('moment');
require("moment/min/locales.min");
moment.locale('en');

export function _formatDate(data: any) {
    return moments.unix(data).format('Do MMM YYYY')
}
export function _formatDateNumber(data: any) {
    let formatted_date = data.getFullYear() + "" + (data.getMonth() + 1) + "" + data.getDate()
    return Number(formatted_date)
}

export function _formatDatePicker(data: any) {
    const currentDate = moment(new Date())
    return currentDate.diff(moment(data), 'years') >= 18
}
export function _formatDateFromNow(data: any) {
    return moment.unix(data).fromNow()
}
export function _formatShortDate(data: any) {
    return moments(data).format('ll')
}
export function formatMoney(amount: any) {
    let decimalCount = 2
    let decimal = "."
    let thousands = ","
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

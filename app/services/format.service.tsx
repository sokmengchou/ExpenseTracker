import moment from 'moment';

export function toMidDate(date: Date) {
	return moment(date || new Date()).format('MMM Do YYYY');
}

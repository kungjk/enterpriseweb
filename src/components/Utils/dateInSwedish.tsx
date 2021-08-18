const months = [
	"Januari",
	"Februari",
	"Mars",
	"April",
	"Maj",
	"Juni",
	"Juli",
	"Augusti",
	"September",
	"Oktober",
	"November",
	"December",
]

export default function dateInSwedish(date) {
	var dateArr = []
	var theDayString = ''
	dateArr = date.split("-")
	var theDay = parseInt(dateArr[2])
	if (theDay == 1 || theDay == 2) theDayString = '' + theDay + ':a'
	else theDayString = '' + theDay + ':e'
	var dateInEnglish = `${theDayString} ${
		months[parseInt(dateArr[1]) - 1]
	}, ${dateArr[0]}`
	return dateInEnglish
}

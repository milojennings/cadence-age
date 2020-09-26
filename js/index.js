document.documentElement.className = 'js';

function commafy(num) {
    var parts = ('' + (num < 0 ? -num : num)).split("."),
        s = parts[0],
        L, i = L = s.length,
        o = '';
    while (i--) {
        o = (i === 0 ? '' : ((L - i) % 3 ? '' : ',')) +
            s.charAt(i) + o
    }
    return (num < 0 ? '-' : '') + o + (parts[1] ? '.' + parts[1] : '');
}

function dateDiff() {
    var born = new Date("August 31, 2015 04:00:00")
    var born_moment = moment("August 31, 2015 04:00:00")
    var now = moment()

    var created = born
    today = new Date()

    var one_min = 1000 * 60
    var one_hour = 1000 * 60 * 60
    var one_day = 1000 * 60 * 60 * 24
    var one_week = 1000 * 60 * 60 * 24 * 7

    var day_test;
    var week_test;
    var month_test;
    var year_test;

    Math.ceil(now.diff(born_moment, 'days')) > 1 ? day_test = " Days" : day_test = " Day";
    Math.ceil(now.diff(born_moment, 'weeks')) > 1 ? week_test = " Weeks" : week_test = " Week";
    Math.ceil(now.diff(born_moment, 'months')) > 1 ? month_test = " Months" : month_test = " Month";
    Math.ceil(now.diff(born_moment, 'years')) > 1 ? year_test = " Years" : year_test = " Year";

    document.getElementById("secs").innerHTML = commafy(now.diff(born_moment, 'seconds')) + " Seconds";
    document.getElementById("mins").innerHTML = commafy(now.diff(born_moment, 'minutes')) + " Minutes";
    document.getElementById("hours").innerHTML = commafy(now.diff(born_moment, 'hours')) + " Hours";
    document.getElementById("days").innerHTML = commafy(now.diff(born_moment, 'days')) + day_test;
    document.getElementById("weeks").innerHTML = commafy(now.diff(born_moment, 'weeks')) + week_test;
    document.getElementById("months").innerHTML = commafy(now.diff(born_moment, 'months')) + month_test;
    document.getElementById("years").innerHTML = commafy(now.diff(born_moment, 'years', true).toFixed(2)) + year_test;
    document.getElementById("total_age").innerHTML = now.to(born_moment);

    setTimeout(function() {
        dateDiff();
    }, 1000);
}

window.onload = dateDiff();
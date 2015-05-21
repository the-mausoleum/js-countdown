'use strict';

var Countdown = function (timerEle, dateEle, options) {
    this.timerEle = timerEle;
    this.dateEle = dateEle;

    this.then = new Date();

    this.then.setFullYear(options.year);
    this.then.setMonth(options.month - 1);
    this.then.setDate(options.day);
    this.then.setHours(options.hours);
    this.then.setMinutes(options.minutes);

    var self = this;

    this.counter = setInterval(function (e) {
        var now = new Date();

        var milliseconds = self.then.getTime() - now.getTime();

        var seconds = Math.floor(milliseconds / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        if (milliseconds - 1000 < 0) {
            clearInterval(self.counter);
        }

        document.getElementById(self.timerEle).innerHTML = days + ':' + pad(hours % 24) + ':' + pad(minutes % 60) + ':' + pad(seconds % 60);
        document.getElementById(self.dateEle).innerHTML = 'until ' + (self.then.getMonth() + 1) + '/' + self.then.getDate() + '/' + self.then.getFullYear();
    }, 1000);

    function pad(time) {
        return time < 10 ? '0' + time : time;
    }
};

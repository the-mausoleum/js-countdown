'use strict';

var Countdown = function (timerEle, dateEle, options) {
    this.timerEle = timerEle;
    this.dateEle = dateEle;

    options = options || {};
    options = {
        year: options.year || 2016,
        month: options.month || 1,
        day: options.day || 1,
        hours: options.hours || 0,
        minutes: options.minutes || 0,
        seconds: options.seconds || 0
    };

    this.then = new Date();

    this.then.setFullYear(options.year);
    this.then.setMonth(options.month - 1);
    this.then.setDate(options.day);
    this.then.setHours(options.hours);
    this.then.setMinutes(options.minutes);
    this.then.setSeconds(options.seconds);

    var self = this;

    this.counter = setInterval(function (e) {
        var now = new Date();

        var milliseconds = self.then.getTime() - now.getTime();

        var seconds = Math.floor(milliseconds / 1000);

        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        var hours = Math.floor(minutes / 60);
        minutes -= hours * 60;

        var days = Math.floor(hours / 24);
        hours -= days * 24;

        if (milliseconds - 1000 < 0) {
            clearInterval(self.counter);
        }

        document.getElementById(self.timerEle).innerHTML = days + ':' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
        document.getElementById(self.dateEle).innerHTML = 'until ' + (self.then.getMonth() + 1) + '/' + self.then.getDate() + '/' + self.then.getFullYear();
    }, 1000);

    function pad(time) {
        return time < 10 ? '0' + time : time;
    }
};

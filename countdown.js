'use strict';

var Countdown = function () {
    this.then = new Date();

    this.then.setFullYear(2015);
    this.then.setMonth(0);
    this.then.setDate(1);
    this.then.setHours(0);
    this.then.setMinutes(0);

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

        document.getElementById('timer').innerHTML = days + ':' + pad(hours % 24) + ':' + pad(minutes % 60) + ':' + pad(seconds % 60);
        document.getElementById('date').innerHTML = 'until ' + (self.then.getMonth() + 1) + '/' + self.then.getDate() + '/' + self.then.getFullYear();
    }, 1000);

    function pad(time) {
        return time < 10 ? '0' + time : time;
    }
};

var countdown = new Countdown();

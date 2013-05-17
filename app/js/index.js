var other = require('./other');
other();

var qs = require('querystring')
alert(qs.parse('message=Hello%20there').message);

var moment = require('moment');
alert("This hour will end " + moment().endOf('hour').fromNow());

var $ = require('./jquery')
alert("jQuery " + $.fn.jquery);

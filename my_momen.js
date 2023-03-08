const moment = require('moment');

let m = moment();
console.log(m) ; // -> Moment<2023-03-03T14:25:04+01:00>
console.log(m.unix()) ; // -> 1677850029
console.log(m.format('YYYY-MM-DD')) ; // -> 2023-03-03
console.log(m) ; // -> Moment<2023-03-03T14:25:04+01:00>




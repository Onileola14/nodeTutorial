const sayHi = require('./module2')
const names = require('./module1');
require('./module3')



sayHi(names.admin)
sayHi(names.manager)
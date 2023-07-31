const utils = require("./utils-CM");
// cách này tạo ra một object utils
const { sub } = require("./utils-CM");
// cách này lấy trực tiếp hàm/biến được exports 
const value = utils.sum(1, 3);
const value1 = sub(1, 3);
console.log(value);
console.log(value1);

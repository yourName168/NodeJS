import sum from './utils-ESM.js'
// có thể import bằng một tên khác vẫn nhận được hàm/biến được export 
// default ở file utils-ESM.js
console.log(sum(1,2))
import {sub} from './utils-ESM.js'
console.log(sub(1,2))
// muoons import hàm/biến được export bình thường thì đặt trong dấu
// "{}" như ví dụ trên

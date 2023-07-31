// Có hai cách để export một hàm/biến

const sum = (a, b) => a + b;
export default sum;
// Cách 1 : export mặc định
export const sub = (a, b) => a - b;
const div = (a, b) => a / b;
export { sub, div };
// export không phải default thì có hai cách trên


// chỉ sử dụng được các biến/hàm/... khi được export ra và import trong file
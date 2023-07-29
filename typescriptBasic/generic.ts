//Generic là một trong những tính năng quan trọng trong TS
// giúp cho tăng hiệu quả tái sử dụng code với việc có thể truyền nhiều kiểu dữ liệu
// vào cùng một hàm cho trước giúp giảm thời gian viết code tương tự

const identity = (value: string): string => {
    return value;
};
//với trường hợp này ta chỉ có thể truyền tham số kiểu string vào hàm indentity
identity("LTH");
// identity(1); 
//khi truyền kiểu dữ liệu khác string sẽ bị lỗi như IDE báo về

//Generic with arrow function
const identity1 = <T>(value: T) => {
    return value;
};
//với hàm này chúng ta có thể truyền vào các kiểu dữ liệu khác nhau với cùng 1 hàm
identity1(1);
identity1<number>(1);
identity1<string>("LTH");
//không có lỗi báo về từ IDE

//Generic with common function
function identity2<T>(value: T) {
    return value;
}
identity2<number>(1);
//cơ bản giống như arrow function

//Có thể sử dụng với object hoặc interface
type User = {
    name: string;
    age: number;
};
const LTH = identity1<User>({
    name: "LTH",
    age: 19,
});

// const myIdentity= identity2;
//kiểu dữ liệu của myIdentity :<T>(value: T) => T
const myIdentity: { <T>(value: T): T } = identity1;
//nếu chỉ sử dụng như trên thì ý nghĩa không khác so với câu lệnh
//const myIdentity: <T>(value: T) => T = identity1;

// cũng có thể tách thành interface hoặc type

type Identity = { <T>(value: T): T };
//hoặc
interface Identity1 {
    <T>(value: T): T;
}
const myIdentity1: Identity = identity1;

//
interface LengObj {
    length: number;
}
const logIdentity = <T extends LengObj>(value: T) => {
    console.log(value.length);
    return value;
};
logIdentity({ length: 12313 });

const getValue = <obj, Key extends keyof obj>(obj: obj, key: Key) => {
    return obj[key];
};
//Key extends keyof obj có ý nghĩa gán Key là một key của obj
getValue(
    {
        name: "LTH",
        age: 20,
    },
    "name"
);

//generic mặc định
//trường hợp không đặt kiểu dữ liệu mặc định
interface Box<type> {
    value: type;
}
const box: Box<string> = {
    value: "100",
};
const box1: Box<number> = {
    value: 100,
};

//đặt kiểu dữ liệu mặc định cho Box1
interface Box1<type = string> {
    value: type;
}
// khi không khai báo như dưới thì tự động biến value nhận kiểu dữ liệu string
const box2: Box1 = {
    value: "100",
};
//Khi muốn truyền vào một giá trị khác mặc định thì định nghĩ kiểu dữ liệu như dưới
const box3: Box1<number> = {
    value: 100,
};

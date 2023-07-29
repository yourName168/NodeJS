//Basic type
let car = "honda";
//string
let bike: string;
//khai báo một biến với kiểu dữ liệu và không thể gán cho bike kiểu khác string
//number
let num: number = 100; //vừa khai báo biến num kiểu number và gán dữ liệu là 10
//boolean
let isLoading: boolean = true;
//cũng có thể khai báo theo cách sau để editor tự nhận biết kiểu dữ liệu
let isSuccess = false;
//undifined
let body = undefined;
//null
let footer: null;
//any
let person: any;
person = 1;
person = false;
person = "LTH";
//biến được gán kiểu any sẽ gán được với tất cả các kiểu dữ liệu khác
//Hạn chế dùng kiểu any vì khi đó sẽ khó kiểm soát kiểu dữ liệu của biến

//object
//gán house là kiểu object thì phải đồng thời phải khởi tạo giá trị cho
//các biến có trong object
let house: {
    address: string;
    color?: string; // khi thêm dấu "?" trước ":" thì thuộc tính có thể có hoặc không nên
    //không cần thiết phải khởi tạo giá trị ban đầu
} = {
    address: "",
};

house.address = "Phu Tho";

//Array
//array thông thường sẽ có kiể never nên không thể thêm phần tử kiểu number hoặc string
//hoặc các kiểu dữ liệu cơ bản vào
let products = [];

//string[]
let address: string[] = [];
address.push("Vĩnh Lại");
//khi khai báo array kiểu string[] thì array có thể chứa các phần tử kiểu string
//tương tự với Number,Boolean,...

//object array
let people: {
    name: string;
    age: number;
}[] = [];
//với object array thì phải quy định kiểu object cho array
people.push({
    name: "LTH",
    age: 18,
});

//Function
//Nên quy định kiểu dữ liệu cho các biến
const sum = (a: number, b: number): number => a + b;
//(a: number, b: number): number giúp quy định kiểu dữ liệu trả về của hàm sum
sum(1, 2);
// khai báo biến sub là một function
const sub: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
) => num1 - num2;
let result: number = sub(1, 2);

//Union
let price: string | number;
price = 30;
price = "20";
//sử dụng Union thì có thể gán một biến theo nhiều kiểu dữ liệu

//enum
enum Size {
    S,
    M,
    L = "L",
    XL = "XL",
}
let size = Size.S; //khi đó size có giá trị là 0
let sizeB = Size.L; //khi đó sizeB có giá trị là 'L' và nếu gán giá trị thì phải gán từ biến
//đó đến cuối cùng

//InterFace
// interface State {
//     name: string;
//     isLoading: boolean;
// }
// interface State {
//     age: number;
// }
// //khi khai báo 2 interface cùng tên thì coi như sẽ gộp các thuộc tính của
// // 2 interface lại với nhau
// let state: State = {
//     name: "LTH",
//     age: 18,
//     isLoading: true,
// };

//dùng thay thế cho object trong một vài trường hợp vì cấu trúc ngắn gọn hơn
// sau khi khai báo vì State được coi như 1 kiểu dữ liệu

//Type
type State = {
    name: string;
    isLoading: boolean;
};
let state: State = {
    name: "LTH",
    isLoading: true,
};

type Name = {
    name: string;
};
type Age = {
    age: number;
};
type Person = Name & Age;
type student = Name | Age;
// có thể gộp(Union) các thuộc tính của hai type khác nhau


//Generic
const handleClick = <Type>(value: Type) => value;
//giúp quy định kiểu dữ liệu phải truyền vào
//giúp có thể sử dụng hàm với nhiều kiểu dữ liệu khác nhau mà không phải tạo lại hàm
//example
handleClick<string>("ádf");
//ngoài ra còn một cách ghi như dưới cũng tương tự
handleClick("ádf");
//với hàm này truyền vào đối số kiểu string
handleClick<number>(1232);
//cùng với một hàm nhưng hàm dưới lại nhận đối số kiểu number mà không cần tạo một hàm khác

//class
class Car1 {
    public name: string; // giúp cho có thể truy xuất vào thuộc tính của đối tượng ở ngoài class
    private color: string; // giúp ngăn chặn truy xuất vào thuộc tính của đối tượng ở ngoài class
    readonly price: number;//giúp cho chỉ có thể được gán một lần từ bên ngoài class/trong hàm 
    //và không thể bị sửa đổi sau đó mà chỉ có thể đọc dữ liệu
    constructor(name: string, color: string, price: number) {
        this.name = "LTH";
        this.color = color;
        this.price = price;
    }
    getName = (): string => {
        //có thể sử dụng các phần tử trong class kể cả private
        return this.name;
    };
}
const honda = new Car1("", "red", 1000);
//còn một kiểu khai báo class khác nhưng chỉ dùng cho trường hợp ít thuộc tính
class Car2{
    constructor( public name: string,private color: string,readonly price: number){

    }
}
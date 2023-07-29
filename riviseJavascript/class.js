//class không phải object
//class là template để tạo object

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
}
class supperCar extends Car {
    constructor(name, color, signature) {
        super(name, color); // luôn đặt dưới hàm constructor và dung để kế thừa các thuộc tính của class sau extends
        this.signature = signature;
    }
}
const ferrari = new supperCar("ferrari", "red", "signature");
console.log(ferrari.getColor());

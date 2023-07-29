// Callback là một hàm được truyền vào một hàm khác như một tham số
function Callback() {
    console.log('Hello world')
}
setTimeout(Callback,1000)
// trong trường hợp này callback được truyền vào setTImeout

//Promise được thi ngay lập tức khi được tạo ra 
//cú pháp khởi tạo

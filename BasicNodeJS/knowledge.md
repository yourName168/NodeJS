1. NodeJs là gì?
- JS là ngôn ngữ lập trình, muốn chạy thì cần phải có môi trường
- Môi trường phổ biến dành cho JS: browser, Node.JS, Deno, ...
- NodeJS là một môi trường chạy JS ngoài trình duyệt, vì thế nó có thể làm backend server
- Chrome V8 JS engine là nhân chạy JS của NodeJS và được viết bằng C++
*) Lịch sử NodeJS
- được tạo ra bởi Ryan Dahl vào năm 2009
2. Tại sao chọn Node.JS viết backend
*) Một số hiểu lầm về NodeJS và Javascript:
- Dù JS là một ngôn ngữ đơn luồng nhưng môi trường chạy lại khác
- Do môi trường chạy trình duyệt hoặc NodeJS có thể chạy được đa luồng nên có thể lợi dụng điều đó để chạy các câu lệnh bất đồng bộ mà không gặp trở ngại
(Mọi người thường hay nhầm JS là ngôn ngữ lập trình đơn luồng nên chỉ có thể chạy được một lệnh tại 1 thời điểm nhưng môi trường chạy của JS là môi trường đa luồng nên có thể thực hiện nhiều lệnh tại 1 thời điểm từ đó tận dụng được hết sức mạnh của CPU)
2. Cài đặt NodeJS
*) Có hai cách cài đặt mình đề cập ở đây:
- Cách 1: dowload nodejs ở trang chủ(tuy nhiên sau này khó chuyển đổi giữa các version khác nhau)
- Cách 2: Dùng NVM(có thể chuyển đổi các version tùy ý)
                Node version manager
link cài đặt: https://github.com/coreybutler/nvm-windows
    Câu lệnh đê cài các version nodejs:
        nvm install nodejsVersion
    Để cài version mới nhất:
        nvm install node
    Để biết có bao nhiêu version hiện có trên máy
        nvm list(version nào có dấu * thì đang sử dụng version đó)
    Để chuyển đổi version mặc định:
        nvm alias nodejsVersion
3. ES Module và Common Module
*) Giới thiệu về Module
- Trong lĩnh vực lập trình và phát triển phần mềm, thuật ngữ "module" thường được sử dụng để chỉ một phần của chương trình hoặc mã nguồn có chức năng cụ thể và độc lập. Một module thường chứa một tập hợp các hàm, lớp, biến và/hoặc các tài nguyên khác được tổ chức lại một cách logic.
- Module giúp tổ chức mã nguồn một cách cấu trúc và có thể sử dụng lại trong nhiều phần của chương trình hoặc trong các ứng dụng khác nhau. Điều này giúp giảm sự trùng lặp, tăng tính bảo mật và dễ dàng bảo trì.
- Ngôn ngữ lập trình khác nhau có các cơ chế khác nhau để triển khai module. Ví dụ, trong Python, một module thường được lưu trữ trong một file văn bản với phần mở rộng .py và có thể được import vào các tập tin khác để sử dụng các chức năng, lớp hoặc biến trong module đó. Trong Node.js (JavaScript), các module được triển khai bằng cách sử dụng CommonJS hoặc ES Modules(chỉ được sử dụng 1 trong 2)

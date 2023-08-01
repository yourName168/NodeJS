1. NPM là gì?
- NPM(Node package manager): là trình quản lý thư viện của nodejs
- file package.json chưa thông tin của các package(thư viện) được sử dụng trong dự án
    Cách tạo file package.json:
        npm init
        package name:tên package(không chứa dấu cách, viết hoa)
        version: mặc định
        description: mô tả
        entry point:  trường "entry point" có ý nghĩa là chỉ định tệp JavaScript chính của ứng dụng. Điều này có nghĩa là khi bạn chạy ứng dụng bằng lệnh như "node" hoặc "npm start", Node.js sẽ sử dụng tệp được chỉ định trong trường "entry point" làm điểm bắt đầu để thực thi ứng dụng.
- Sau khi có file package.json mới có thể cài thư viện
- Cách cài thư viện: 
    Note: có thể cài vào 2 mục:
        Cài vào dependences: sử dụng trực tiếp trên dự án thì nên cài nào dependences
            npm i packageName
        Cài vào Dev-dependences: sử dụng trong quá trình phát triển phần mềm nhưng không tham gia vào quá trình hoạt động của phần mềm thì nên cài vào Dev-dependences
            npm i packageName -D
- mục dependences: chứa các thư viện chúng ta cài
- muốn gỡ một thư viện: 
    npm uninstall packageName
*) package-lock.json
- chứa thông tin chi tiết về các thư viện được cài và các module phụ thuộc hơn package.json
2. Cách kiểu cài đặt package
- Cài đặt global: Sử dụng trên toàn máy tinh
    npm i packageName -g
- Cài đặt local: cài đặt trong folder chứa file package.json và chỉ sử dụng được trong phạm vi dự án
3. Cách cập nhật version
- Cấu trúc version có dạng 'MAJOR.MINOR.PATCH' example: 1.4.2
+ Số version MAJOR đại diện cho những thay đổi lớn, không tương thích với phiên bản trước
+ Số version MANOR đại diện cho những chức năng mới được thêm vào, vẫn tương thích so với phiên bản trước
+ Số version PATCH đại diện cho những bản vá lỗi, vẫn tương thích với phiên bản trước
- Ngoài ra còn một số prefix khi những version được ghi lại trong file 'package.json' đó là:
+ '^': Có thể cài version MINOR và PATCH
    ex: '^0.13.0' có thể cài '0.14.1'
+ '~' có thể cài version PATCH
    ex: '^0.13.0' có thể cài '0.13.1' nhưng không thể cài '0.14.1' 
- Để cài một version cụ thể của package
    nmp i packageName@versionSeries
- Cập nhật package
+ Kiểm tra các phiên bản lỗi thời:
    npm outdated
+ Cập nhật:
    npm update
- Khi cập nhật thư viện cần lưu ý: 
    + Nếu như chỉ thay đổi version MINOR và PATCH thì có thể cập nhật ngay.
    + Nếu như chỉ thay đổi version MAJOR thì cần cân nhắc vì có thể sẽ gây ra lỗi không mong muốn trên code hiện tại
- Cách cài các thư viện khi có sẵn file package.json và package-lock.json
    npm i
4. NPX
- là command line xuất hiện trong phiên bản npm từ 5.2 trở lên giúp cài nhiều package một lúc mà không cần cài từng package trong đó
- Trong môi trường Node.js, npx là một công cụ dòng lệnh (CLI) được cung cấp kèm theo npm (Node Package Manager) từ phiên bản 5.2.0 trở lên. npx có tác dụng chạy các gói (packages) npm mà không cần phải cài đặt chúng một cách toàn cục vào hệ thống.
- Cụ thể, npx giúp bạn thực thi các lệnh từ các gói npm đã cài đặt trong thư mục local của dự án mà không cần phải cài đặt chúng toàn cục (global). Điều này hữu ích khi bạn muốn chạy một công cụ hoặc lệnh một lần duy nhất mà không muốn làm phiền cài đặt và quản lý các gói toàn cục.
- Ví dụ, để chạy một công cụ như create-react-app từ npm, thay vì cài đặt nó toàn cục, bạn có thể sử dụng npx như sau:
        npx create-react-app my-app
- Lệnh này sẽ tải và chạy create-react-app từ kho npm và tạo một ứng dụng React mới trong thư mục my-app, mà không cần cài đặt create-react-app toàn cục.
- Một lợi ích khác của npx là nó luôn luôn sử dụng phiên bản mới nhất của gói được yêu cầu, giúp bạn tránh sự xung đột phiên bản giữa các dự án khác nhau.

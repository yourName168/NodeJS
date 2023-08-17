1. JWT là gì?
- JWT là chuẩn mở(RFC 7519) giúp truyền tải thông tin dưới dạng JSON
- Token là một chuỗi ký tự tạo ra đại diện cho một đối tượng hoặc 1 quyền truy cập nào đó. Thường được dùng trong hệ thống xác thức để kiểm soát quyền truy cập của người dùng đối với tài nguyên hoặc dịch vụ
- Bởi kích thước nhỏ nên có thể được gửi qua URL hoặc qua POST, hoặc trong HTTP header mà không ảnh hưởng đến tốc độ request

- Chuỗi JWT có cấu trúc gồm 3 phần được phân cách bởi dấu ".":
    + Header: Phần này chứa thông tin về loại token và thuật toán mã hóa được sử dụng để tạo chữ ký. Header sau đó được mã hóa dưới dạng chuỗi Base64
    + payload: chứa thông tin mà người dùng định nghĩa. Payload cũng được mã hóa dưới dạng base64

        hàm dùng để mã hóa: btoa(`thông tin cần mã hóa`)
        hàm để giải mã: atob(`mã base64 cần giải mã`)
    + signature:Được tạo bằng cách sử dụng thuật toán HMACSHA256 với nội dung là Base64 encode header+base64 encode payload kết hợp một "secret key". signature giúp bảo đảm tính toàn vẹn
2. Xác thực người dùng với Access Token
- Access Token là một chuỗi với bất kỳ định dạng nào.
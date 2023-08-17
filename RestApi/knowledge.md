1. REST là gì?
- REST là viết tắt của Representational State Transfer, là quy ước một số quy tắc ràng buộc khi thiết kế hệ thống mạng.
- REST giúp client tướng tác với server mà không cần biết cách hoạt động của server như thế nào
- REST có một số ràng buộc:
2. API là gì?
- API là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức.
3. RESTful API 
- Là một API chuẩn REST

- Các phương thức HTTP để request có ý nghĩa
    + GET: Đọc tài nguyên
    + PUT: cập nhật tài nguyên
    + DELETE: xóa tài nguyên
    + POST: tạo tài nguyên mới
- Cung cấp tên tài nguyên hợp lí:
    + Sử dụng id định danh cho URL thay vì dùng query-string
    url: /users/123
    query-string:/api?type=user&id=123

    + Thiết kế cho người dùng chứ không thiết kế cho data
    + Giữ cho URL ngắn và dễ đọc cho client
    + SỬ dụng số nhiều cho URL để có tính nhất quán
- Sử dụng HTTP response code để xác định trạng thái API trả về
    + Informational responses (100 – 199)
    + Successful responses (200 – 299)
    + Redirection messages (300 – 399)
    + Client error responses (400 – 499)
    + Server error responses (500 – 599)
- Sử dụng định dạng JSON hoặc XML để giao tiếp client-server
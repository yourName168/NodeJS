1. Tại sao cần phải authentication
- Authentication là quá trình xác thức người dùng. Nó giúp chúng ta biết được người dùng là ai, và có quyền truy cập vào các tài nguyên nào.
2. Authentication và authorization khác nhau ở đâu
- Authorization là quá trình xác định người dùng có quyền truy cập vào tài nguyên nào. 
- Có thể hiểu authorization là cấp độ cao hơn của authentication. Phải xác thực người dùng trước, rồi mới xác định được người dùng có quyền truy cập vào tài nguyên nào.
3. Luồng hoạt động của authentication
- Dù cho có nhiều phương pháp authentication, nhưng luồng hoạt động của chúng cơ bản vẫn giống nhau:
    + Bước 1: Client sẽ gửi 1 request lên server chứa thông tin định danh client là ai(thông tin ở đây có thể là username/password, một đoạn mã nào đấy hoặc là token, hoặc là một số thông tin khác)
    + Bước 2: Server sẽ kiểm tra thông tin định danh của client với thông tin trong db. Nếu thông tin định danh đúng, server sẽ trả về một dấu hiệu cho biết đã đăng nhập thành công
    + Bước 3: Client lưu lại dấu hiệu này và gửi dấu hiệu này mỗi khi client muốn truy cập vào cấc tài nguyên của server
    + Bước 4: Client sẽ kiểm tra dấu hiệu, nếu hợp lệ sẽ trả về tài nguyên cần thiết
2. Basic authentication
- Basic authentication được coi là phương pháp authentication đơn giản nhất cho một website
- Luồng hoạt động của nó rất đơn giản:
    + Khi bạn truy cập website sử dụng cơ chế này, server sẽ kiểm tra `Authorization` trong HTTP header. Nếu `Authorization` không hợp lệ, server sẽ trả về một response nằm trong header. Cái này nó sẽ làm website bạn hiển thị yêu cầu đăng nhập
    + Bạn nhập username/password, sau đó nhấn OK thì trình duyệt sẽ tiến hành mã hóa username/password thành một chuỗi base64 theo quy tắc và gửi lên server thông qua HTTP header
    + Server sẽ kểm tra và giải mã `authorization` trong http header. Nếu hợp lệ, server sẽ trả về thông tin website, nếu không hợp lệ, server sẽ trả về một popup yêu cầu đăng nhập lại
- Muốn logout ra khỏi website thì bạn cần tắt hoàn toàn trình duyệt mới có thể
3. Ứng dụng của basic authentication
- Mặc dù là phương pháp đơn giản, thô sơ, nhưng vẫn được sử dụng nhiều trong các ứng dụng website

    VD1: Dự án website của bạn khi release thì có 2 môi trường là staging và production. Vì là môi trường staging, vẫn còn đang trong giai đoạn phát triển, nên bạn muốn chỉ cho những người trong nhóm phát triển truy cập vào website. Vậy thì bạn có thể sử dụng Basic Authentication để yêu cầu người dùng phải nhập username/password để truy cập vào website
4. Ưu nhược điểm của basic authentication
*) Ưu điểm:
    - Đơn giản, dễ hiểu, dễ triển khai
*) Nhược điểm:
    - Không an toàn, vì username/password được mã hóa bằng base64. Kẻ gian có thể đánh cắp đoạn mã base64 này thông qua việc bắt request. Vậy nên cần phải sử dụng HTTPS để mã hóa giao tiếp giữa client và server
    - Thiếu tính linh hoạt: Do BSA không hỗ trợ nhiều cấp độ xác thực, quản lý quyền truy cập, hãy gia hạn/ thu hồi quyền truy cập. Điều này giới hạn khả năng mở rộng và kiểm soát truy cập trong các ứng dụng phức tạp
    - Không thể logout khỏi website. Vì basic authentication chỉ yêu cần người dùng nhập username/password khi truy cập vào website, nên khi bạn tắt trình duyệt mới có thể logout
    - Không thể sử dụng cho các ứng dụng mobile. Vì BSA yêu cầu người dùng nhập username/password, nhưng trên các ứng dụng mobile thì không có giao diện để nhập username/password

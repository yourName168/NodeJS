1. Cookie là gì?
- Cookie là một file nhỏ được lưu trữ trên thiêt bị user. Cookie thương được dùng để lưu trữ thông tin về người dùng website
- Cookie được ghi và đọc theo domain:
    VD: Khi bạn truy cập vào một website thì server sẽ trả về cookie thì trình duyệt của bạn sẽ lưu cookie cho domain đó. Và khi bạn truy cập vào website bằng url thì trình duyệt sẽ tự động tìm kiếm cookie của website đó và gửi lên server
*) Lưu ý: 
    - Một website có thể lưu nhiều cookie khác nhau, ví dụ profile, cart, history, ...
    - Bộ nhớ của cookie có giới hạn, nên bạn không nên lưu quá nhiều thông tin vào cookie. Thường thì một website chỉ nên lưu tối đa 50 cookie và tổng cộng kích thước của các cookie trên website đó không nên vượt quá 4KB.
*) Vị trí lưu trữ cookie
- Được lưu trong 1 file, file này thì được lưu trên ổ cứng
    Các file cookie của Google Chrome được lưu trữ tại: /Users/<username>/Library/Application Support/Google/Chrome/Default/Cookies
- Thường thì không ai vào đây xem đâu, vì nó là file nhị phân, bạn không thể đọc được nó. Chúng ta sẽ dùng trình duyệt để xem nhé.


- Ghi đè dữ liệu lên cookie: Có 3 cách:
    + Khi bạn truy cập vào 1 url, server có thể set cookie lên máy tính của bạn bằng cách trả về header `Set-Cookie` trong response.
    + Bạn có thể dùng js để set cookie lên máy tính của bạn thông qua `document.cookie`
    + Có thể dùng trình duyệt, mở dev tool và set cookie lên máy tính của bạn
- Đọc dữ liệu từ cookie:
    + Kih truy cập vào 1 url hoặc gọi 1 api, trình duyệt sẽ tự động gửi cookie lên server. 
    + Ngoài ra có thể dùng JS để đọc cookie:
        vd: let x = document.cookie
        Nếu cookie được set HttpOny thì không thể đọc được cookie bằng JS đâu
        
        Lưu ý là cookie lưu ở trang nào thì trình duyệt sẽ gửi cookie trang đó lên server nha. Nếu cookie của https://facebook.com thì không có chuyện bạn vào https://duthanhduoc.com và mình đọc được cookie facebook của bạn đâu.
*) Một số lưu ý quan trọng khi sử dụng cookie:
- HttpOnly: 
    + Khi set `HttpOnly` cho một cookie của bạn thì cookie đó sẽ không thể đọc được bằng JS. Giúp tránh được tấn công XXS
    + Để set `HttpOnly` cho cookie, bạn cần thêm option `httpOnly:true` vào cookie như sau:
        res.cookie('cookieName', 'cookieValue', { httpOnly: true })
- Secure: Khi set secure cho một cookie thì cookie đó chỉ được gửi lên server khi bạn trup cập website bằng https
*) Tấn công CSRF:
Lợi dụng cơ chế khi request trên một url nào đó, trình duyệt sẽ tự động gửi cookie lên server, kẻ tấn công có thể tạo một trang web giả mạo, khi user truy cập vào trang web giả mạo và thực hiện hành động nào đó, trình duyệt sẽ tự động gửi cookie lên server, kẻ tấn công có thể lợi dụng cookie này để thực hiện các hành động độc hại.
- Cách phòng chống:
    + Cách 1: sử dụng thuộc tính `SameStite=Strict` cho cookie
    vd:
        res.cookie('username', 'John Doe', {
        maxAge: 3600 * 1000,
        httpOnly: true,
        sameSite: true // Thêm thuộc tính SameSite=Strict cho cookie
        })
    Với cách này thì cookie sẽ không gửi đi nếu request không phải là request từ trang web hiện tại
    + Cách 2: Sử dụng CSRF token:
    CSRF token là một chuỗi ngẫu nhiên được tạo ra để bảo vệ khỏi tấn công CSRF. Khi người dùng yêu cầu truy cập tài nguyên , server sẽ tạo ra một token và gửi nó về cho người dùng. Khi người dùng gửi yêu cầu tiếp theo, họ phải bao gồm token này trong request của mình. Nếu token khôn ghợp lệ, yêu cầu sẽ bị từ chối. Điều này giúp ngăn chặn kẻ tấn công thực hiện các yêu cầu giả mạo
2. Session authentication
- Là phiên lưu trữ trên server để quản lý thông tin liên quan đến mỗi người dùng trong quá trình tương tác với ứng dụng.
- Session được lưu trữ trên server.
- Session có thể được lưu trữ dưới dạng file, db, cache,.. tùy theo cách thiết kế server
*) Session authentication:
- Là một cơ chế xác thực người dùng bằng cách sử dụng session
- Khi người dùng đăng nhập thành công, server sẽ tạo ra một session mới và gửi session id đó về cho client thông qua cookie. Client sex gửi nó lên server mỗi khi thực hiện một request. Server kiểm tra session id có tồn tại hay không
- Luồng hoạt động của sesssion authentication:
    + Client gửi request vào tài nguyên được bảo vệ trên server. Nếu client chưa được xác thực, server sẽ trả lời với một lời nhắc đăng nhập. Client gửi username và password của họ cho server.

    + Server xác minh thông tin xác thực được cung cấp so với cơ sở dữ liệu người dùng. Nếu thông tin xác thực khớp, server tạo ra một Session Id duy nhất và tạo một session tương ứng trong bộ nhớ lưu trữ phía server (ví dụ: ram, database, hoặc file nào đó).

    + Server gửi Session Id cho client dưới dạng cookie, thường là với tiêu đề Set-Cookie.

    + Client lưu trữ cookie.

    + Đối với các yêu cầu tiếp theo, client gửi cookie chứa Session Id lên server.

    + Server kiểm tra Session Id trong cookie so với dữ liệu session được lưu trữ để xác thực người dùng.

    + Nếu được xác nhận, server cấp quyền truy cập vào tài nguyên được yêu cầu. Khi người dùng đăng xuất hoặc sau một khoảng thời gian hết hạn được xác định trước, server làm vô hiệu phiên
*) Ưu nhược điểm của session authentication:
- Ưu điểm:
    + Dễ triển khai
    + Bảo mật thông tin người dùng
    + Toàn quyền kiểm soát phiên làm việc của người dùng. Vì mọi thứ bạn lưu trữ ở server nên bạn có thể đăng xuất người dùng bất cứ lúc nào bạn muốn bằng cách xóa session id của họ trong bộ nhớ lưu trữ phía server
- Nhược điểm:
    + Việc toàn quyền kiểm soát vừa là ưu điểm cũng vừa là nhược điểm của session authentication. Vì bạn phải lưu trữ thông tin phiên làm việc của người dùng nên bạn phải có một bộ nhớ lưu trữ phía server. Ví dụ bạn lưu trữ trên RAM thì không thể chia sẻ cho các server khác được (dính DDOS hay restart server lại mất hết), lưu trữ trên database thì lại tốn kém thêm chi phí, bộ nhớ,...
    + Bộ nhớ lưu trữ session sẽ phình to rất nhanh vì mỗi khi có một người dùng đăng nhập thì bạn lại phải lưu trữ một session id mới
    + Tốc độ chậm, vì mỗi request đến server, server điều phải kiểm tra trong bộ nhớ lưu trữ xem session id có hợp lệ hay không. Nếu bạn lưu trữ trên database thì tốc độ sẽ chậm hơn nữa.
    + Khó khăn trong việc scale ngang server. Ví dụ khi server lớn lên, bạn phải có nhiều server để chịu tải hơn, thì việc chia sẻ session id giữa các server là một vấn đề khó khăn, kiểu gì bạn cũng phải tìm cái gì đó chung giữa các server như database chung chẳn hạn.
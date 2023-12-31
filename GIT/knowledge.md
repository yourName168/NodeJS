Git là một phần mềm lưu trữ và quản lí phiên bản dự án dành cho cá nhân hoặc tập thể 
tài liệu tham khảo:
    1.Tôi học lại Git từ đầu [Phần 1]: 
    https://duthanhduoc.com/blog/toi-hoc-lai-git-tu-dau
    2.Tôi học lại Git từ đầu [Phần 2]: 
    https://duthanhduoc.com/blog/toi-hoc-lai-git-tu-dau-part-2
    3.Top những câu lệnh Git dùng trong thực tế: 
    https://duthanhduoc.com/blog/top-nhung-cau-lenh-git-dung-trong-thuc-te
I. GIT CƠ BẢN
1. Git căn bản
- Vào một folder vào chạy câu lệnh git init trên git terminal để tạo repository
- Những file, folder nằm trong folder chứa .git mới được đặt trong repository
    -Có hai loại repository là:
    + local repository: được lưu trữ và quản lí trên máy tính
    + remote repository: được lưu trữ và quản lí trên server(github, gitLab,..)

- Config name,email cho repository bằng câu lệnh git config: gồm hai loại config là config local và config global:
    + Config local: Cấu hình cho từng dự án
    + config global: Cấu hình cho toàn bộ máy tính 
- Để xem từng cấu hình ở local thì chạy câu lệnh sau:
        git config --local --list
    
- Để xem từng cấu hình ở global/local thì chạy câu lệnh sau:
        git config --global/local --list
- Để cầu hình email/username ở global/local:
        git config --global/local user.email yourEmail/user.username yourName
2. Git status, git add & git commit
 Git status: giúp nhận biết hiện đang ở nhánh nào, trạng thái của nhánh so với origin
- Git chia làm 4 khu vực:
+ Khu vực code(vẫn ở trên local)
+ Khu vực stagging: sau khi dùng 'git add' thì file sẽ được đẩy lên khu vực này(vẫn nằm ở local)
    Note:
    - Cách đẩy code từ khu vực code sang stagging   
        + Để đẩy một file cụ thể thì dùng git add fileName
        + Muốn đẩy tất cả các file lên thì sử dụng git add .
    
    - Muốn đưa file ngược từ khu vực stagging về khu vực code :
    git reset fileName  
        + Để đẩy một file cụ thể thì dùng git reset fileName
        + Muốn đẩy tất cả các file lên thì sử dụng git reset .
+ Khu vực committed: Sau khi ở khu vực stagging ta sử dụng git commit để đính kèm message với sự thay đổi trên file vừa được đẩy lên và sẽ chuyển vào khu vự committed(vẫn nằm trên local)
    Note:
    - Cách để commit:(phải có file nằm trên khu vực stagging mới thể commit)
        git commit -m "your message"

+ Khu vực remote(origin): sau khi file đã ở committed thì sử dụng git push để đẩy file code lên trên server(nằm trên server)
    Note Để push code thì bạn phải có remote repo và local repo của bạn phải kết nối với remote repo đó
    - Để kết nối với remote repo thì thường có 2 cách:
        + Clone remote repo về local, lúc này thì local bạn sẽ có local repo và được kết nối sẵn với remote repo
        + Tạo mối liên hệ giữa local repo và remote repo ta sử dụng câu lệnh:
            Kết nối repo local với repo remote rỗng
                git remote add origin git@github.com:yourName168/
                repositoryName.git
            chuyển sang nhánh cần đẩy code
                git branch -M branchName(thường là main)
            Push code lên trên remote
                git push -u origin branchName
        
    - Các cách clone :
        + Clone bằng SSH (nên dùng vì tiện và bảo mật): Cần tạo SSH key trước
        Cách tạo ssh key: 
            ssh-keygen -t ed25519 -C "yourEmail"
            Sau đó thêm ssh key tài khoản github trùng với yourEmail
        Để kiểm tra đã kết nối sshKey thành công chưa sử dụng câu lệnh
            ssh -T git@github.com
        lấy ssh trên github và dùng câu lệnh :
            git clone linkTrênGithub
        + Clone bằng HTTPS:
        lấy https trên github và dùng câu lệnh :
            git clone linkTrênGithub
3. Git log
- Giúp xem được có những commit nào gần đây
    git log
    hoặc
    git log --oneline để xem một cách rút gọn hơn
4. git pull
- Sử dụng để kéo code từ remote repo về local repo
- Giả sử repo có nhiều người cùng tham gia phát triển thì khi có người sửa và push code lên thì code mới chỉ có trên remote repo chứ chưa có trên local repo
- Vậy nên cần phải kéo code về để tiếp tục chỉnh sửa hoặc sử dụng
- Cách kéo code bằng git pull:
    git pull origin main
5. Cách giải quyết conflict
- Conflict là hiện tượng xung đột dữ liệu giữa remote repo và local repo
    Ví dụ: Bạn chỉnh sửa code ở local và định push code lên trên remote nhưng trên remote có ai đó sửa code của bạn và khi đó bạn push lên sẽ xảy ra xung đột dữ liệu 
- Cách giải quyết:
    + dùng git pull để kéo code từ remote về local
    + Sau đó quyết định chỉnh sửa lần cuối
    + Cuối cùng sử dụng như bình thường(add->commit->push)
6. .gitignore
- Trong thực tế có những file chúng ta không muốn bị git giám sát nên những file/folder như vậy chúng ta sẽ để trong file .gitignore được khởi tạo trong cùng folder với file .git
- Như vậy khi add/commit/push thì những file/folder này vẫn không bị git giám sát
- trong file .gitignore để phân biệt giữa file và folder thì cuối folder nên thêm dấu '/' để tránh trường hợp có file trùng tên với folder đó ở cùng cấp
- Muốn cmt bắt đầu bằng ký tự "#"
Example:
    folderName/** #ignore mọi file/folder trong folder folderName
    !folderName/fileName #trừ fileName không bị ignore
    folderName/**.js #ignore tất cả các file javascript nhưng những file khác thì không bị
    log* # ignore tất cả các file có phần đầu là log
7. README.md
xem ở: https://www.duocmmo.com/classroom/nodejs-super/readmemd-la-gi-viet-nhu-the-nao
II. GIT NÂNG CAO
Không dành cho dân intern :))

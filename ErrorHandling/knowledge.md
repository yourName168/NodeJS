*) Trong expressjs có 2 loại handler:
    - Request handler: 
    + Nhận request từ client và trả về response
    + Với mỗi request handler thì chúng ta sẽ có 3 tham số là `req`,`res`,`next`
    + Nếu không dùng `next` thì không cần khai báo
    
    ex:
        app.get(`/user`,(req,res,next)=>{
            res.response("Hello")
        })
     
    + Gọi `next()` để chuyển sang request handler tiếp theo
    + Gọi `next(err)` để chuyển sang error handler tiếp theo
    - Error handler:
    + Nhận error từ request handler và trả về response
    + Với mỗi error handler thì chúng ta bắt buộc **phải khai báo đủ có 4 tham số** là `err`,`req`,`res`,`next`
    + Nếu chỉ khai báo 3 tham số IDE sẽ hiểu thành request handler
    
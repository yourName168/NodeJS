// Lưu ý quan trọng:
// chỉ nên dùng async/await cho function mà bên trong có xử lý promise
// chỉ await được promise, không await được callback hay function thường
// async function return về promise
const p=Promise.resolve("hello")

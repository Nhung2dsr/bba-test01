# TỔNG HỢP KIẾN THỨC #
1. File staging --> Working directory
- Dùng lệnh: __git restore --staged <tên file>__
- Nếu undo toàn bộ dùng lệnh: __git restore --staged .__
2. File Repository --> Working directory: 
- Dùng lệnh: __git reset HEAD~N__:  Trong đó: N là số commit gần nhất
- Không thể undo khi file chỉ có 1 commit, nếu muốn undo phải xóa file .git rồi init lại.
3. Sửa commit: __git commit --amend -m "message mới"__
## NHÁNH ##
### LƯU Ý: 
- Luôn tạo nhánh và cập nhật code mới ở nhánh main.
- Luôn pull code về trước khi tạo nhánh mới.
1. Xem danh sách các nhánh: ```git branch```
2. Tạo nhánh mới: ```git branch <tên nhánh>```
3. Chuyển nhánh: ```git checkout <tên nhánh muốn chuyển đến>```
4. Lấy code mới nhất về: ```git pull origin main```
5. Tạo nhánh mới và chuyển nhánh: ```git checkout -b <tên nhánh>```
6. Xóa nhánh: ```git branch -d <tên nhánh>```   
__Lưu ý: Phải đứng ở nhánh khác nhánh cần xóa.__ 
## REMOTE ##
### Mỗi remote có 1 tên và 1 URL. Khi clone 1 repo, git tự động tạo remote tên là origin trỏ về URL mình clone ###
- Xem danh sách các remote và URL: ```git remote -v```
- Thêm remote mới: ```git remote add origin <URL>```
- Đổi tên remote: ```git remote rename origin upstream``` : Đổi tên remote "origin" thành "upstream".
- Đổi URL của remote: ```git remote set-url origin <URL mới>```
- Xóa remote: ```git remote remove origin```
- Tải thay đổi từ remote về khi chưa merge: ```git fetch origin```

## QUY ƯỚC ĐẶT TÊN TRONG JAVASCRIPT ##
- __kebab-case:__ Các từ viết thường, nối bằng dấu gạch ngang. Thường dùng cho tên file, URL, class CSS.
- __camelCase:__ Từ đầu viết thường, các từ sau viết hoa chữ cái đầu. Dùng đặt tên biến và hàm trong JavaScript.
- __PascalCase:__ Mọi từ đều viết hoa chữ cái đầu. Dùng cho class, constructor và React component.
- __snake_case:__ Các từ viết thường nối bằng dấu gạch dưới. Thường dùng ở Python, Database, API response.
- __UPPER_CASE:__ Viết hoa toàn bộ nối các từ bằng dấu gạch dưới. Dùng cho hằng số.
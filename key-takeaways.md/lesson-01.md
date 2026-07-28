# TỔNG HỢP KIẾN THỨC #
## 1. NVM (Node Version Manager) ##
- __NVM__ là 1 công cụ quản lí phiên bản Node.js, cho phép cài đặt, chuyển đổi và quản lí nhiều phiên bản Node.js trên cùng 1 máy tính.
- __NVM__ giúp các developer dễ dàng làm việc với nhiều dự án yêu cầu các phiên bản Node.js khác nhau mà không cần gỡ/cài đặt lại.
## 2. Playwright ##
__Playwright__ là một framework automation testing do Microsoft phát triển, hỗ trợ kiểm thử end-to-end trên nhiều trình duyệt, với API mạnh và ổn định.<br>
- Cài đặt Playwright dùng lệnh: ```npm init playwright@latest```
## 3.Cú pháp Playwright cơ bản ##
- __page.goto('URL'):__ Điều hướng đến trang web cụ thể.
- expect(*page*).__toHaveTitle__(*/Playwright/*): Kiểm tra title trang có chứa text Playwright hay không.
- page.__getByRole__ ('link', {name: 'Get Started'}).click(): Tìm và click vào element dạng link có tên Get Started.
- __expect().toBeVisible():__ Xác thực phần tử hiển thị trên trang.
## 4. Cấu hình Username và Email trong Git ##
- __Cấu hình username:__ <br>
    ```git config --global user.name "<username>"```
- __Cấu hình email:__ <br>
    ```git config --global user.email "<email>"```
- __Kiểm tra cấu hình Git:__ <br>
    ```git config --list```
- __Cấu hình nhánh mặc định:__ <br>
```git config --global init.defaultBranch main``` 
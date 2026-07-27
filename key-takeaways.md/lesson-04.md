# TỔNG HỢP KIẾN THỨC OBJECT, ARRAY #
## 1. OBJECT ##
- __Khái niệm:__ Là kiểu dữ liệu dùng để lưu trữ 1 tập hợp các cặp key-value.
- __Mục đích:__ Nhằm gom các giá trị lại, tổ chức dưới 1 biến duy nhất, giúp code gọn gàng, dễ quản lí, dễ bảo trì hơn.
- Cách khai báo:
    - Cách 1: Phổ biến<br>
        ```JavaScript
        let nameObject = {
            <tên thuộc tính>: "<giá trị của thuộc tính>",
        };
        ```
    - Cách 2: Ít dùng hơn
        ```JavaScript
        let nameObject = new Object();
        nameObject.tenthuoctinh = "<giá trị thuộc tính>";
        ```
### THAO TÁC VỚI THUỘC TÍNH OBJECT ###
```JavaScript
console.log(<tên đối tượng>.<tên thuộc tính>);
```
- __Lưu ý:__ Với giá trị của thuộc tính là kiểu số/ tên thuộc tính có chứa khoảng trắng hoặc kí tự đặc biệt thì cần khai báo như sau:
```JavaScript
console.log(<tên đối tượng>["<tên thuộc tính>"]);
```
## 2. ARRAY ##
1. Khái niệm <br>
- Mảng dùng để lưu trữ nhiều giá trị trong cùng 1 biến. <br>
    __Ví dụ:__ ```const mang = [1,2,3,4,5];```
- Mảng có thể chứa nhiều kiểu dữ liệu. <br>
    __Ví dụ:__ ```const data = [1, "Nhung", false];
2. Muốn __truy xuất được phần tử trong mảng__ ta dùng __chỉ số__, chỉ số bắt đầu từ 0.
- Ví dụ: <br>
    ```JavaScript
    const ten = ["Nhung", "Duy", "An"];
    console.log(ten[2]); // Màn hình in ra kết quả là "An"
    ```
3. Độ dài của mảng dùng __length__ 
- Ví dụ: <br>
    ```JavaScript
    const ten = ["Nhung", "Duy", "An"];
    console.log(ten.length); // Màn hình in ra kết quả là 3
    ```
4. Thêm phần tử vào mảng ta dùng __push()__
- Ví dụ: <br>
    ```JavaScript
    const ten = ["Nhung", "Duy", "An"];
    ten.push("Oanh");
    console.log(ten); // Màn hình in ra mảng: ["Nhung", "Duy", "An", "Oanh"]
    ```
5. Xóa phần tử cuối trong mảng ta dùng __pop()__
- Ví dụ: <br>
    ```JavaScript
    const ten = ["Nhung", "Duy", "An"];
    ten.pop();
    console.log(ten); // Màn hình in ra mảng: ["Nhung", "Duy"]
    ```
## 3. FUNCTION ##
- __Function (Hàm):__ Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- __Khai báo:__ <br>
    ```JavaScript
    function <nameFunction>(){
        // code
    }
    ```
- __Gọi hàm:__  Có thể gọi lại hàm nhiều lần <br>
```<nameFunction>();```
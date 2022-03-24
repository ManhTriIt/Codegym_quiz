## NodeJS
### 1. Rest Parameter (Tham số còn lại):
- Có thể khai báo một hàm với số lượng tham số không xác định.
- Tham số này đặc biệt hữu ích khi muốn truyền các tham số cho hàm nhưng
lại không biết chính xác cần bao nhiêu tham số.
- Example:
  ```
  const sortNumbers = (...numbers) => {
    return numbers.sort();
  }
  
  console.log(sortNumbers(3, 5, 6, 4, 7)); // [3, 4, 5, 6, 7]
  ```
  
### 2. Destructuring Assigment (Phép gán hủy cấu trúc):
- Là biểu thức giúp dễ dàng trích xuất các giá trị từ mảng hoặc thuộc tính
của đối tượng thành các biến riêng biệt bằng cúp pháp ngắn hơn.
- Có hai loại phép gán hủy cấu trúc:
  + Phép gán hủy cấu trúc mảng.
    ```
    const brands = ['audi', 'bmw', 'toyota']
    let [a, b, c] = brands
    console.log(a) // 'audi'
    console.log(b) // 'bmw'
    console.log(c) // 'toyota'
    ```
  + Phép gán hủy cấu trúc đối tượng.
    ```
    const people = {
      name: 'Tri',
      age: 20,
      weight: 50
    }
    
    let {name , age, weight} = people
    console.log(name) // Tri
    console.log(age) // 20
    console.log(weight) // 50
    ```  
    
### 3. Spread syntax
- Spread syntax cho phép duyệt qua các phần tử và truyền vào phương thức
như các đối số.
- Nó có thể được sử dụng khi tất cả các phần tử từ một đối tượng hoặc mảng
cần được đưa vào một danh sách nào đó.
- Nó cũng có thể được sử dụng để chèn các phần tử vào một mảng.
```
// spread syntax với array
oldArr = [1, 2, 3]
newArr = [...oldArr, 4, 5, 6]
console.log(newArr) // [1, 2, 3, 4, 5, 6]

// spread syntax dùng tính toán
const sum = (x, y, z) {
  return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers)) // 6
```
### 4. Class
- Classes là một khuôn mẫu để tạo các đối tượng. Chúng đóng gói bằng
mã để làm việc trên giữ liệu đó. Có thể tạo nhiều đối tượng từ lớp.
- Khai báo class bằng cách sử dụng từ khóa **class**.
- Tên class được viết bằng PascalCase (viết hoa chữ cái đầu tiên của mỗi từ).
- Trong class có một phương thức đặc biệt đó là constructor - phương thức khởi tạo.
- Example:
  ```
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    setName (name) {
      this.name = name
    }
    
    getName () {
      return this.name;
    }
  
    setAge(age) {
      this.age = age
    }
  
    getAge(age) {
      return this.age
    }
  }
  ```
#### Class Inheritance
- Một lớp có thể kế thừa tất cả các phương thức và thuộc tính của một 
lớp khác.
- Sử dụng từ khóa **extends** để kế thừa đối tượng khác.
- Syntax:
  ```
  class A extends B {
    // code
  }
  ```
- Trong ES6, để thực hiện gọi các phương thức trong lớp cha khi đang
ở lớp con mà các phương thức đó đã bị viết lại trong lớp con rồi thì
sử dụng từ khóa **super**
  + Syntax: 
    ```
    super.methodName() // methodName() là phương thức cha muốn gọi.
    ```
  + Example:
    ```
    class Employee {
      getClassName() {
        return "Class Employee"
      }
    }
    
    class MaleEmployee extends Employee {
      getClassName () {
        return "Class MaleEmployee";
      }
      classClassName() {
        return super.getClassName();
      }
    }
    
    let employee = new MaleEmployee();
    console.log(employee.classClassName()); // "Class Employee"
    ```
#### Static Members:
- ES6 hỗ trợ khai báo các thành phần tĩnh cho đối tượng với từ khóa **static**:
  ```
  class Employee {
    static defaultEmployee() {
      return "Đây là phương thức default employee"
    }
  }
  ```
- Cho phép chúng ta sử dụng method của đối tượng mà không cần phải khai báo 
đối tượng.
#### Getters and Setters
- Các phương thức **getters** nhận giá trị của một đối tượng, các phương thức **setters**
đặt giá trị của một đối tượng.
  ```
  class Person() {
    constructor(name) {
      this.name = name
    }
    
    get personName() {
      return this.name
    }
  
    set personName(x) {
      this.name = x;
    }
  }
  
  let person = new Person("Tri");
  console.log(person); // Tri
  
  person.personName = "Manh"
  consol.log(personName); // Manh
  ```
### 5. Array Methods (Những methods thường hay được sử dụng)
#### forEach
- forEach() thực thi một callback function mỗi khi lặp qua các array elements.
Mảng rỗng sẽ trả về undefined.
- Syntax: 
  ```
  array.forEach((currentValue, index, arr) => {...})
  // currentValue (required): giá trị của phần tử hiện tại
  // index (optional): chỉ mục của phần tử hiện tại
  // arr (optional): mảng của phần tử hiện tại
  ```
- Example:
  ```
  const numbers = [2, 3, 5, 6];
  numbers.forEach((num) => {
    console.log(num)
  }) // 2 3 5 6
  ```
#### map
- map() tạo một array mới bằng cách thực thi một callback mỗi khi lặp qua
các array elements.
- Syntax:
  ```
  array.map((currentValue, index, arr) => {...})
  // currentValue (required): giá trị của phần tử hiện tại
  // index (optional): chỉ mục của phần tử hiện tại
  // arr (optional): mảng của phần tử hiện tại
  ```
- Example: 
  ```
  const numbers = [4, 16, 9, 64];
  const newArr = numbers.map(Math.sqrt);
  console.log(newArr); // [2, 4, 3, 8]
  ```
#### filter
- filter() tạo một array mới với các elements passed điều kiện của callback
function mỗi khi lặp qua các array elements.
- Syntax: 
  ```
  array.filter((currentValue, index, arr) => {...})
  // currentValue (required): giá trị của phần tử hiện tại
  // index (optional): chỉ mục của phần tử hiện tại
  // arr (optional): mảng của phần tử hiện tại
  ```
- Example:
  ```
  const ages = [20, 17, 23, 2, 18];
  const result = ages.filter((age) => {
    return age >= 18
  })
  console.log(result); // [20, 23, 18]
  ```
#### findIndex
- findIndex() lặp qua array elements và trả về index của element đầu tiên
passed điều kiện của callback function, nếu không tìm thấy element nào thỏa
mãn trả về -1.
- Syntax:
  ```
  arr.findIndex((currentValue, index, arr) => {...})
  ```
- Example:
  ```
  const brands = ["mazda", "toyota", "honda", "kia", "toyota"]
  const result = brands.findIndex((brand) => {
    return brand === "toyota"
  })
  console.log(result) // 1
  ```
#### sort
- sort() sắp xếp các phần tử mảng theo thứ tự tăng dần.
- compareFunction(callback):
  + Nếu return về một số < 0 thì a trước b
  + Return về một số > 0 thì b trước a
  + Nếu bằng thì giữ nguyên vị trí
- Syntax:
  ```
  arr.sort((a, b) => a - b)
  ```
- Example:
  ```
  const numbers = [2, 34, 3, 4];
  numbers.sort((a, b) => a - b)
  console.log(numbers) // [2, 3, 4, 34]
  ```
#### concat
- concat() trả về một array mới bằng cách merged tất cả elements của các arrays
lại với nhau.
- Example:
  ```
  const numbers1 = [1, 2, 3]
  const numbers2 = [4, 5, 6]
  const numbers3 = numbers1.concat(numbers2);
  console.log(numbers3); // [1, 2, 3, 4, 5, 6];
  ```
#### reduce
- reduce() thực thi callback trên từng phần tử của mảng, theo thứ tự, chuyển
giá trị trả về từ phép tính trên phần tử trước đó. Kết quả cuối cùng của
tất cả các phần tử mảng là giá trị duy nhất.
- Syntax: 
  ```
  arr.reduce((total, currentValue, currentIndex, arr) => {...}, initialValue)
  // total (required): giá trị ban đầu hoặc giá trị trả về trước đó của hàm
  // currentValue (required): Giá trị của phần tử hiện tại
  // currentIndex (optional): Chỉ mục của phần tử hiện tại
  // arr (optional): mảng mà phần tử hiện tại thuộc về
  // initialValue (optional): giá trị được chuyển cho hàm làm giá trị ban đầu  
  ```
- Example:
  ```
  const arr = [2, 5, 6, 3, 4];
  const result = arr.reduce((total, currentValue) => {
    return total + currentValue;
  })
  console.log(result); // 20
  ```
  
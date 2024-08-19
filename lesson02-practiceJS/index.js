// Array, Object

// 1. Array
const arr = [
  1,
  10,
  'Hello',
  () => {
    console.log('Hello world');
  },
];

/*
    1. Thêm một phần tử vào mảng 
     - Thêm đầu
     - Thêm cuối
     - Thêm vào 1 ví trị bất kì
    2. Xóa 1 phần tử khỏi mảng
     - Thêm đầu
     - Thêm cuối
     - Thêm vào 1 ví trị bất kì
    3. Ghép 2 mảng với nhau
    4. Sắp xếp một mảng
        - Tăng dần theo tiêu chí gì đó ...
        - Giảm dần theo tiêu chí gì đó ...
    5.Tìm kiếm một phần tử trong mảng
*/

const numbers = [10, -7, 6, 100, 70, 5, 12];
numbers.push(100);

console.log(numbers[3]); // 100

// Những hàm mà JS hỗ trợ cho đối tượng Array
// map(), filter(), find(), findIndex(), reduce(), some(), every()
// map

const doubles = [];
for (let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

const doubleUsingMap = numbers.map((item) => item * 2);

console.log('Original array:', numbers);
console.log('Double array:', doubles);
console.log('Double using map:', doubleUsingMap);

// 2. filter
// const numbers = [10, -7, 6, 100, 70, 5, 12];
const evenNumbers = numbers.filter((num) => num >= 50);

console.log('Even numbers:', evenNumbers);

const carts = [
  {
    id: 1,
    name: 'iPhone12 ProMax',
    price: 3000,
    quantity: 1,
  },
  {
    id: 2,
    name: 'HTC One',
    price: 4000,
    quantity: 5,
  },
  {
    id: 3,
    name: 'SamSung Galaxy',
    price: 1000,
    quantity: 10,
  },
];

// Viết 1 function xóa 1 món hàng ra khỏi giỏ hàng dựa vào id

const removeItemFromCart = (cart = [], id) => {
  return cart.filter((cartItem) => cartItem.id !== id);
};

const newCart = removeItemFromCart(carts, 3);
console.log('🚀 ~ newCart:', newCart);

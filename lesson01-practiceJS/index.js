// 1. Variables: let,const and var
/*
    1. - var có tính hoisting  => truy cập đến biến trước khi khởi tạo
       - const, let không được hoisted

    2. var và let có thể re-assign
       const không thể re-assign

    3. Scope: block scope, function scope, global scope
        - let, const phạm vi hoạt động: block scope
        - var: global scope
*/
var greeting; // undefined
var salary;
// var age;

console.log(greeting); // undefined
greeting = 'Hello MindX';
console.log(greeting); //Hello MindX

console.log('Salary:', salary); // undefined

// console.log(area);
let area = 200;
console.log(area);
area = 500;
console.log('Area after re-assign:', area);

// console.log(PI);
const PI = 3.14;
console.log(PI);
// PI = 3.1412;

salary = 2000;
console.log('Salary:', salary);

// Block scope
{
  // Đây là 1 scope ở trong Javascript
  {
    let score = 10;
    console.log('Inside score:', score);
    {
      {
        console.log('Inside Inside score:', score);
      }
    }
  }
  //   console.log('Outside score:', score);
}
// console.log('Outside score:', score);

// console.log('age outside:', age); // undefined
// {
//   console.log('age outside:', age); // undefined
//   {
//     age = 10;
//     console.log('age inside:', age); // 10
//   }
//   console.log('age outside:', age); // 10
// }
// console.log('age outside:', age); // 10

console.log(this);
// syntax
// Naming function
function sayHello(name) {
  // Logic
  console.log('sayHello scope:', this);
  console.log('Hello MindX ', name);
}

// Expression function
const sayHello2 = function (name) {
  console.log('Hello MindX ', name);
};

// arrow function: release: version JS ES6
const arrowFunctionExample = (name) => {
  // Define logic
  console.log('arrowFunctionExample:', this);
  console.log('This is arrow function');
};

arrowFunctionExample();
sayHello2('Phương');
sayHello('Alex');
sayHello('Harry');
sayHello('Messi');
sayHello('CR7');
sayHello('Atonio');
sayHello('Lukaku');
sayHello('Haha');

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;
const a = 20;
const b = 7;
console.log(a, '+', b, '=', add(a, b));
console.log(`${a} + ${b} = ${a + b}`);

// Datatype in Javascript
/*
    1. Primitive datatype (Kiểu nguyên thủy)
        + string
        + number
        + boolean
        + null
        + undefined
        + Symbol
        + BigInt
    2. Non-Primitive datatype (Reference Datatype) (Kiểu tham chiếu)
        + Object, array
        + function
*/
// Array, object
const person = {
  name: 'Harry',
  age: 24,
  address: {
    street: 'Hai Ba Trung',
    postalCode: 23145,
  },
};
const numbers = [1, 10, 5, 7, 20];
const anotherNumbers = [100, 200, 300];

//[1, 10, 5, 7, 20, 100, 200, 300];
// const mergedArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   mergedArray.push(numbers[i]);
// }
// for (let i = 0; i < anotherNumbers.length; i++) {
//   mergedArray.push(anotherNumbers[i]);
// }
// console.log('mergedArray:', mergedArray);

console.log(`Type of numbers ${typeof numbers}`); // object
console.log(`Type of person ${typeof person}`);

// Spread operator
console.log(numbers);
console.log(...numbers);

// ứng dụng: ghép mảng, thêm phần tử vào mảng, xóa phần từ khỏi mảng
let mergedArray = [...numbers, ...anotherNumbers];
console.log('mergedArray:', mergedArray);
// mergedArray.push(999);
// mergedArray = [999, ...mergedArray];

console.log('mergedArray after:', mergedArray);

const studentA = {
  name: 'Harry',
};

const address = {
  street: 'Thanh Cong',
  postalCode: 24124,
};

const student = {
  ...studentA,
  ...address,
};
console.log('🚀 ~ student:', student);

//[Homework] Insert value at Kth in array

// REST OPERATOR
const dynamicAddFunc = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(dynamicAddFunc(2, 3, 4)); // args = [2,3,4]
console.log(dynamicAddFunc(2, 3)); // args = [2,3]
console.log(dynamicAddFunc(2, 3, 10, 2, 4, 5, 7, 3));

// rest + Destructuring
let revenues = [100, 240, 500, 600];
console.log('🚀 ~ revenues:', revenues);
let [firstDayRevenue, ...restRevenues] = revenues;
console.log('🚀 ~ firstDayRevenue:', firstDayRevenue);
console.log('🚀 ~ restRevenues:', restRevenues);

// Destructuring
const employee = {
  employeeName: 'Nguyễn Văn A',
  job: 'Kỹ Sư',
  age: '30',
  company: 'Meta',
  level: 'Senior',
  addr: {
    street: 'Thanh Cong',
    postalCode: 24124,
  },
};
// DRY =  DONT REPEAT YOURSELF
// coding principles
const {
  employeeName,
  age,
  company,
  addr: { street },
} = employee;

console.log(`Hello I am ${employeeName}, 
        I am ${age} years old,
        and currently I work in ${company}. I live in ${street} street`);

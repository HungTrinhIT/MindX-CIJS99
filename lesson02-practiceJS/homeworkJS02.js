/*
    Bài 1: 
    Viết một function Javascript in ra các số từ 1 đến 15 trên 1 dòng thỏa mãn điều kiện sau:

- Nếu số đó chia hết cho 3 ⇒ in ra "Fizz"
- Nếu số đó chia hết cho 5 ⇒ in ra "Buzz"
- Nếu số đó chia hết cho 3 và 5 ⇒ in ra "FizzBuzz"

Output: là một string thõa yêu cầu đề bài như trên.

Test case console.log(fizzBuzz()) → FizzBuzzFizzFizzBuzzFizzFizzBuzz
*/

function fizzBuzz() {
  let result = '';
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz';
    } else if (i % 5 === 0) {
      result += 'Buzz';
    } else if (i % 3 === 0) {
      result += 'Fizz';
    }
  }

  return result;
}
console.log('FizzBuzzFizzFizzBuzzFizzFizzBuzz');
console.log(fizzBuzz());

// Count vowels: e u o a i (không phân biệt hoa thường) E U O A I
// Input: s = "Toi Yeu Viet Nam"
// kiểu dữ liệu đầu vào không phải là string hoặc chuỗi rỗng => 0
// Output: 7

function countVowels(str = '') {
  if (typeof str !== 'string') {
    // throw Error('Type of input is incorrect');
    return 'Type of input is incorrect';
  }

  let count = 0;
  const vowels = ['e', 'u', 'o', 'a', 'i'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char.toLocaleLowerCase())) {
      count += 1;
    }
  }

  return count;
}

console.log(countVowels('anhyeuem')); //→ 4
console.log(countVowels('Viet Nam vo dich. Malaysia tuoi gi :))')); // → 13
console.log(countVowels('')); //→ 0
console.log(countVowels('Javascript is a beautiful programming language')); //→ 17
console.log(countVowels(123)); // → "Dữ liệu đầu vào không hợp lệ!!!"

// ------------------------//
// Bai 3: Viết chương trình xóa các element trùng trong mảng
// Input:  ["one", "one", "one", "two","two", "three", "one"]
// Output: ["one", "two","three"]

function removeDuplicateFromArray(arr = []) {
  if (!Array.isArray(arr)) {
    return 'Kiểu dữ liệu không phải là mảng';
  }

  const uniqueValue = [];

  for (let item of arr) {
    const isExist = uniqueValue.includes(item);
    if (!isExist) {
      uniqueValue.push(item);
      //   uniqueValue = [...uniqueValue, item];
    }
  }

  return uniqueValue;
}

const removeDuplicateFromArrayUsingSet = (arr = []) => [...new Set(arr)];

// OOP = Object Oriented Programming
// => Khởi tạo 1 đối tượng => dùng constructor => dùng từ khóa new

console.log(
  removeDuplicateFromArray(['one', 'one', 'one', 'two', 'two', 'three', 'one'])
);
console.log(
  removeDuplicateFromArrayUsingSet([
    'one',
    'one',
    'one',
    'two',
    'two',
    'three',
    'one',
  ])
);

// console.log(process.env.npm_package_name);
// console.log(process.env.npm_package_version);
// console.log(process.env.npm_package_config_customField);
import path1 from './node.cjs';
console.log(path1);

const arr = ['a', 'b', 'c'];
for (let item of arr) {
  console.log(item);
}
const arr2 = Array.from(arr);
console.log(arr2);
const map = new Map();
console.log(map);

// // export default 100;

// const data = [10,20,30,40,50];
// // export default data;

// function say() {}
// function eat() {}



// let a = 10;  
// const b = 20;  

// console.log(a); // 输出: 10  
// console.log(b); // 输出: 20  

// // a = 30; // 如果取消注释，不会报错，因为let变量可以重新赋值  
// // let a = 40; // 如果取消注释，会报错，因为let不允许在同一作用域内重复声明变量  
// // b = 50; // 如果取消注释，会报错，因为const变量不能被重新赋值  

// // 但是可以修改const对象的属性或数组的元素  
// const obj = { x: 100 };  
// obj.x = 200; // 不会报错，因为只是修改了对象的属性  
// console.log(obj.x); // 输出: 200  

// obj.x = 300
// console.log(obj.x); // 输出: 300  

// const arr = [1, 2, 3];  
// arr[0] = 4; // 不会报错，因为只是修改了数组的元素  
// console.log(arr[0]); // 输出: 4 



// export default {
//   data,
//   say,
//   eat
// }

// export {data}


// const username = '高小乐', age = 19, address = '上海';
// function say() {
//     console.log('say function');
// }

// const user = {
//     username,
//     age,
//     address,
//     say1(){}
// };

import React from 'react';
import ReactDOM from 'react-dom';

const courses = [
    {id: 1, name: 'React'},
    {id: 3, name: 'Vue'},
    {id: 5, name: '小程序'}
  ]
  
  const vDom = (
    <div>
      <h2>前端框架课程列表</h2>  
      <ul>
        {courses.map(c => <li key={c.id}>{c.name}</li>)}  
      </ul>
    </div>
  )
  
  ReactDOM.render(vDom, document.getElementById('root'))


  <!-- react库, 提供React对象 -->
<script src="../js/react.development.js"></script>
<!-- react-dom库, 提供了ReactDOM对象 -->
<script src="../js/react-dom.development.js"></script>
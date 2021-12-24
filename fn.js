// function countDown(time) {
//     var nowTime = +new Date();
//     var inputTime = +new Date(time);
//     var times = (inputTime - nowTime) / 1000; 
//     var d = parseInt(times / 60 / 60 / 24);
//     d = d<10 ? '0' + d : d;
//     var h = parseInt(times / 60 / 60 %24);
//     h = h<10 ? '0' + h : h;
//     var m = parseInt(times / 60 % 60);
//     m = m<10 ? '0' + m : m;
//     var s = parseInt(times % 60);
//     s = s<10 ? '0' + s : s;
//     return d + 'day' + h + 'h' + m  + 'm' + s + 's';
// }
// prompt =  console.log(countDown('2022-5-16 18:00:00'));
// // function reverse (arr) {
//     var newArr = [];
//     for (var i = arr.length - 1; i >=0; i--) {
//         newArr [newArr.length] = arr[i];
//     }
//     return newArr;
// }
// console.log(reverse([1, 2, 3]));

// var str = 'andy';
// str.charAt(3)  
   
// // 遍历string

// for (var i = 0; i< str.length; i++) {
//     console.loe(str.charAt(i));
// }

// var btn = document.querySelector('button');
// var test = document.querySelector('.designer');

// btn.onclick = function(){
//     test.innerHTML = 'And I am a talent';
// }

var btn = document.querySelector('button');
var test = document.querySelector('.designer');

btn.onclick = function () {
    test.innerHTML = 'And I am a talent';
}
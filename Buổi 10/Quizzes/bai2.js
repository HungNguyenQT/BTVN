let arr =[1,2,3,5];
console.log(arr[0]);
console.log(arr[3]);
// cộng phần tử trong mảng có chỉ số 1 và 2
let s = arr[1]+arr[2];
console.log('Tổng 2 phần tử trong mảng có chỉ số 1 và 2:',s);
// hoán đổi giá trị của phần tử có chỉ số 1 và 3
let temp = arr[1];
arr[1] = arr[3];
arr[3] = temp;
console.log("Mảng sau khi hoán đổi:", arr);
let length=5;
let arr = [];
for (let i = 0; i < length; i++) {
    // Tạo một số ngẫu nhiên trong khoảng từ 1 đến 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    arr.push(randomNumber); // Thêm số ngẫu nhiên vào mảng
}
console.log('Mảng sau khi random:"',arr);
for(let j=arr.length;j>1;j--){
    arr.length=j-1;

}
console.log("Mảng sau khi xóa phần tử cuối cùng đến khi độ dài bằng 1 là:",arr);
// xóa phần tử giữa và giữ lại phần tử đầu vs cuối
for(let k=0;k<arr.length;k++){
    if(arr.length>2){
        arr = arr[0], arr[arr.leghth -1];
        break;
    }
}
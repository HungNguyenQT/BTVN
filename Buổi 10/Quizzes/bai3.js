let arr = [1,2,5,6,7,0];
// in ra các số chẵn trong mảng
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        console.log('Các số chẵn trong mảng là:',arr[i]);
    }
}
// Tính tổng các phần tử trong mảng
let sum = 0;
for(let j = 0;j<arr.length;j++){
    sum +=arr[j];
    
}
console.log('Tổng các phần tử trong mảng là:',sum);
// tìm phần tử nhỏ nhất trong mảng
let min = arr[0];
for(let k =0; k<arr.length;k++){
    if(arr[k]<min){
        min = arr[k];
    }
}
console.log('Phần tử nhỏ nhất trong mảng:', min);
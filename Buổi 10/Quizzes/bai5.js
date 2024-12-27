let arr= [1,4];
let n = parseInt(prompt("Nhập vào số (n>2):"));
if(n>2){
    for(let i=0;i<n-arr.length;i++){
       let newArr=['0'];
       for(let j=0;j<arr.length;j++){
        newArr.push(arr[j]);
    }
    arr=newArr;
    }
    console.log('Mảng sau khi thêm phần tử:',arr);  
}
else{
    console.log(' Vui lòng nhập n >2');
}


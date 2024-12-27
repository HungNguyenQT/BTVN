// Khai báo mảng rỗng
let arr = [];

// Nhập số n (giả sử người dùng nhập vào từ prompt, đảm bảo n > 0)
let n = parseInt(prompt("Nhập vào số n (n > 0):"));
if (n > 0) {
    for (let i = 0; i < n; i++) {
        // Thêm số ngẫu nhiên từ 1 đến 100 vào mảng
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    // In mảng sau khi thêm các số ngẫu nhiên
    console.log("Mảng sau khi thêm các số ngẫu nhiên:", arr);
} else {
    console.log("Vui lòng nhập số n lớn hơn 0.");
}

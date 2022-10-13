// hàm init() khởi tạo imgObj -> đặt vị trí và các thuộc tính còn lại
function init() {
    let imgObj = document.querySelector('#myImg');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
// gọi hàm init() khi trình duyệt được tải lần đầu
window.onload = init;
// thêm sự kiện cho button
document.querySelector('#move').addEventListener('click', moveFn);
function moveFn() {
    let imgObj = document.querySelector('#myImg');
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';
}
// สร้างฟังก์ชันสำหรับดึงข้อมูลผู้ใช้งาน
function getUsers() {
    fetch('users_json.php') // เปลี่ยนเป็น URL ของ API หรือไฟล์ JSON ที่คุณใช้
        .then(response => response.json())
        .then(users => {
            // เรียกใช้ฟังก์ชันสำหรับแสดงผู้ใช้งาน
            displayUsers(users);
        })
        .catch(error => console.error('Error fetching users:', error));
}

// สร้างฟังก์ชันสำหรับแสดงข้อมูลผู้ใช้งาน
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // เคลียร์รายการผู้ใช้งานที่มีอยู่ก่อนหน้า

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.Name} - ${user.Email}`;
        userList.appendChild(listItem);
    });
}

// เรียกใช้งานฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', getUsers);

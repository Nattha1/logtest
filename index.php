<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>User List</h1>
    <ul id="user-list">
        <!-- JavaScript will populate this list -->
    </ul>

    <script>
        // Fetch user data from server
        fetch('users_list.php')
            .then(response => response.json())
            .then(users => {
                const userList = document.getElementById('user-list');
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${user.Name} - ${user.Email}`;
                    userList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    </script>
</body>
</html>

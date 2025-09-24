const express = require('express');
const app = express();

const PORT = 3000;
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie White' },
    { id: 6, name: 'Diana Green' },
    { id: 7, name: 'Ethan Blue' },
    { id: 8, name: 'Fiona Black' },
    { id: 8, name: 'George Black' },
    { id: 9, name: 'George Yellow' },
    { id: 10, name: 'Hannah Purple' }
];

app.get('/get-users', (req, res) => {
    res.status(200).json({
        data: {
            message: 'Users retrieved successfully',
            users: users
        },
        status: 'success'
    });
});

app.get('/search-user/:name', (req, res) => {
    const userName = req.params.name;
    const user = users.filter(u => u.name.toLowerCase().includes(userName.toLowerCase()));
    res.status(200).json({
        data: {
            message: `User - ${userName} retrieved successfully`,
            user: user
        },
        status: 'success'
    });
});

app.listen(PORT, () => {
    console.log(`My Backend server is running on port ${PORT}`);
});
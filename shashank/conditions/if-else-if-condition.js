let friend = [
    {
        firstname: 'chandu',
        lastname: 'yadav',
        age: 21,
        college: 'siddhartha institute of scince and technology',
        branch: 'csm',
        phonenumber: 8985981345,
        fathername: 'prakesh',
        mothername: 'yasodha',
        city: 'Tirupati',
        country: 'india',
        hobbies: ['cricket', 'dancind', 'music', 'acting'],
        isMarried: false,
        address: {
            street: 'accord school, RC road',
            city: 'Tirupati',
            state: 'Andhrapradesh'
        },
    },
    {
        firstname: 'mukesh',
        lastname: 'reddy',
        age: 21,
        college: 'siddhartha institute of scince and technology',
        branch: 'csm',
        phonenumber: 9988776655,
        fathername: 'suresh',
        mothername: 'sunitha',
        city: 'Tirupati',
        country: 'india',
        hobbies: ['cricket', 'dancind', 'music', 'acting'],
        isMarried: false,
        address: {
            street: 'balaji colony',
            city: 'Tirupati',
            state: 'Andhrapradesh'
        },
    },
    {
        firstname: 'monalisa',
        lastname: 'joseph',
        age: 21,
        college: 'siddhartha institute of scince and technology',
        branch: 'csm',
        phonenumber: 7265778965,
        fathername: 'joseph',
        mothername: 'mariyam joseph',
        city: 'kerala',
        country: 'india',
        hobbies: ['BTS', 'dancind', 'music', 'acting'],
        isMarried: false,
        address: {
            street: 'green park',
            city: 'kerela',
            state: 'kerela'
        },
    }
]


if (friend[2].firstname == 'monalisa' && friend[2].lastname == 'joseph' && friend[2].age == 22) {
    console.log("monalisa age is not correct");
}
else if (friend[2].firstname == 'monalisa' && friend[2].lastname == 'maria' && friend[2].age == 21) {
    console.log("monasila last name is not correct");
}
else {
    console.log("it is not monalisa profile");
}

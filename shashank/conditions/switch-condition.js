let friend = {
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
    }
}


switch (friend.hobbies[0]) {
    case 'cricket':
        console.log("it is chandu hobbie 1");
        break;
    case 'family vibes':
        console.log("it is chandu hobbie 2");
        break;
    case 'joking':
        console.log("it is chandu hobbie 3");
        break;
    case 'flirting':
        console.log("it is chandu hobbie 4");
        break;
    default:
        console.log("it is chandu hobbie 5");
        break;

}



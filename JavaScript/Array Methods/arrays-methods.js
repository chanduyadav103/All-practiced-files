const bikes = [
    { id: 1, brand: "Royal Enfield", model: "Classic 350", color: "Black", price: 190000, mileage: "35 kmpl", engine: "346cc", fuelType: "Petrol", year: 2023, rating: 4.5 },
    { id: 2, brand: "Bajaj", model: "Pulsar 220F", color: "Red", price: 140000, mileage: "40 kmpl", engine: "220cc", fuelType: "Petrol", year: 2022, rating: 4.2 },
    { id: 3, brand: "TVS", model: "Apache RTR 160", color: "Blue", price: 120000, mileage: "45 kmpl", engine: "160cc", fuelType: "Petrol", year: 2023, rating: 4.0 },
    { id: 4, brand: "Hero", model: "Splendor Plus", color: "Black", price: 75000, mileage: "60 kmpl", engine: "97.2cc", fuelType: "Petrol", year: 2022, rating: 4.3 },
    { id: 5, brand: "Honda", model: "Shine", color: "Silver", price: 80000, mileage: "65 kmpl", engine: "125cc", fuelType: "Petrol", year: 2023, rating: 4.4 },
    { id: 6, brand: "Yamaha", model: "MT-15", color: "Blue", price: 165000, mileage: "45 kmpl", engine: "155cc", fuelType: "Petrol", year: 2023, rating: 4.6 },
    { id: 7, brand: "KTM", model: "Duke 200", color: "Orange", price: 210000, mileage: "35 kmpl", engine: "199.5cc", fuelType: "Petrol", year: 2022, rating: 4.7 },
    { id: 8, brand: "Suzuki", model: "Gixxer SF", color: "Black", price: 145000, mileage: "45 kmpl", engine: "155cc", fuelType: "Petrol", year: 2023, rating: 4.1 },
    { id: 9, brand: "Royal Enfield", model: "Himalayan", color: "Green", price: 220000, mileage: "30 kmpl", engine: "411cc", fuelType: "Petrol", year: 2022, rating: 4.4 },
    { id: 10, brand: "Bajaj", model: "Dominar 400", color: "Black", price: 240000, mileage: "27 kmpl", engine: "373.3cc", fuelType: "Petrol", year: 2023, rating: 4.3 }
];

// const ArrayForEachValue = bikes.forEach((bike, index) => {
//     if (bike.model === 'Himalayan') {
//         console.log('----------------');
//         console.log(`Name: ${bike.brand}`)
//         console.log(`Model: ${bike.model}`)
//         console.log(`Color: ${bike.color}`)
//         console.log('----------------');
//         bike.mileage = "25 kmpl";
//         console.log(index)
//     }
// });

// console.log("ArrayForEachValue:::::::::::", ArrayForEachValue)

// bikes.push({ id: 11, brand: "Jawa", model: "Perak", color: "Black", price: 240000, mileage: "27 kmpl", engine: "373.3cc", fuelType: "Petrol", year: 2023, rating: 4.3 })
// bikes.pop()

const ArrayMapValue = bikes.map((bike, index) => {
    if (bike.year > 2022) {
        return bike
    }
});
// console.log("ArrayMapValue:::::::::::", ArrayMapValue)

const ArrayFilterValue = bikes.filter((bike, index) => {
    if (bike.year < 2022) {
        return bike
    }
});
// console.log("ArrayFilterValue:::::::::::", ArrayFilterValue)

let scienceStudents = [
    { id: 1, name: "Rahul Sharma", age: 20, grade: "A", city: "Mumbai", subjects: ["Math", "Science"], attendance: 95, gender: "Male", hobbies: ["Cricket", "Reading"], email: "rahul@example.com" },
    { id: 6, name: "Sonia Reddy", age: 19, grade: "B", city: "Chennai", subjects: ["Computer Science", "Math"], attendance: 85, gender: "Female", hobbies: ["Photography", "Travel"], email: "sonia@example.com" },

];
const historyStudents = [
    { id: 2, name: "Priya Patel", age: 19, grade: "B", city: "Delhi", subjects: ["History", "English"], attendance: 88, gender: "Female", hobbies: ["Dancing", "Painting"], email: "priya@example.com" },
];
const biologuStudents = [
    { id: 4, name: "Neha Gupta", age: 20, grade: "B+", city: "Hyderabad", subjects: ["Biology", "Math"], attendance: 90, gender: "Female", hobbies: ["Singing", "Yoga"], email: "neha@example.com" },
];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const output = bikes.filter((bike, index) => index !== 9)


console.log(output)

const india = {
    name: "Republic of India",
    capital: "New Delhi",
    population: 1380004385,
    area: 3287263,
    currency: "Indian Rupee (INR)",
    languages: ["Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Malayalam"],
    states: 28,
    unionTerritories: 8,
    independenceYear: 1947,
    nationalAnthem: "Jana Gana Mana",
    largestCity: "Mumbai",
    government: "Federal parliamentary constitutional republic",
    president: "Droupadi Murmu",
    primeMinister: "Narendra Modi",
    nationalAnimal: "Bengal Tiger",
    nationalBird: "Indian Peacock",
    nationalFlower: "Lotus",
    nationalSport: "Hockey"
};

console.log("-----------------------------------------")
for (key in india) {
    console.log(key)
    console.log("-----------------------------------------")
    console.log(india[key])
    console.log(`${key}: ${india[key]}`);

}
console.log("-----------------------------------------")
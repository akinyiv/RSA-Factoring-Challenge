var cities = ["nairobi", "cairo", "cape town", "tunis", "new york", "newark"];

const findCity = function (citesData, query) {
    return citesData.filter(function (city) {
        return city.toLowerCase().includes(query);
    });
};
console.log(findCity(cities, "n"));

var numbers = [23, 14, 27, 30, 1, 2, 3, 9, 100, 255, 191];

var filteredNumbers = numbers.filter(function (num) {
    return num < 27;
});

console.log(filteredNumbers);
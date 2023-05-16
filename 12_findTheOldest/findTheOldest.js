const findTheOldest = function (array) {
    array.forEach(e => !e.yearOfDeath && (e.yearOfDeath = new Date().getFullYear()));
    const orderedAges = array.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1);
    return orderedAges[orderedAges.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

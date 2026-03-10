const findTheOldest = function (people) {
  return people.reduce(
    (oldest, person) => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      }
      const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
      const currentAge = person.yearOfDeath - person.yearOfBirth;
      return currentAge > oldestAge ? person : oldest;
    },
    {
      name: "NOBODY",
      yearOfBirth: 0,
      yearOfDeath: 0,
    },
  );
};

// Do not edit below this line
module.exports = findTheOldest;

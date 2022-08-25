const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  let thisYear = new Date().getFullYear();


const findTheOldest = function(people) {
    people.map(x => {
        
        if(x.yearOfDeath !== undefined) {
            x.age = x.yearOfDeath - x.yearOfBirth;
        }
        if(x.yearOfDeath == undefined) {
            x.age = thisYear - x.yearOfBirth;
            
        }
        
    });

    let oldestPerson;
    let tempAge = 0;
    for (let i = 0; i < people.length; i++) {
        if(people[i].age > tempAge) {
            tempAge = people[i].age
            oldestPerson = people[i];
        }
    }

    return oldestPerson;
    
};

findTheOldest(people);
console.log(people);
// Do not edit below this line
module.exports = findTheOldest;

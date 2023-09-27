//TASK NO1/
function calculatePercentage(number, totalAmount) {
    // Check if the totalAmount is not zero to avoid division by zero error
    if (totalAmount === 0) {
      return 0; // Return 0% if the totalAmount is zero
    }
  
    // Calculate the percentage
    const percentage = (number / totalAmount) * 100;
    return percentage;
  }
  
  
  const number = 25;
  const totalAmount = 200;
  const result = calculatePercentage(number, totalAmount);
  console.log(`The percentage is: ${result}%`);
  //TASK NO 2
// Define an array of person objects
const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

// Printing the information about each person
persons.forEach((person, index) => {
    console.log(`Person ${index + 1}:`);
    console.log(`Name: ${person.personName}`);
    console.log(`Age: ${person.personAge}`);
    console.log(`Income: ${person.personIncome}`);
    console.log("---------------");
});
//Task no 3 printing the properties of object


const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

// Printing properties of each person object
persons.forEach((person, index) => {
    console.log(`Properties of Person ${index + 1}:`);
    for (let prop in person) {
        console.log(prop);
    }
    console.log("---------------");
});

    
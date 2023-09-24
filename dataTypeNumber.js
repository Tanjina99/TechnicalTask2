// create a program that calculates the total number of hours from a  given number of days, use data type number

function calculateTotalHours(days) {
    const hoursPerDay = 24;
    const totalHours = days * hoursPerDay;
    return totalHours;
  }

  const numberOfDays = 5;
  const totalHours = calculateTotalHours(numberOfDays);

  console.log(totalHours);
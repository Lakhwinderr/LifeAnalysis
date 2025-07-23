//create a function to convert date into day of the year
//another functiont to reverse the process
//input -> 2022-07-13
//output -> day

 function checkYear(n) {
    // Check if n is divisible by 4
    if (n % 4 === 0) {
      // If it's divisible by 100, it should also be
      // divisible by 400 to be a leap year
      if (n % 100 === 0) {
        return n % 400 === 0;
      }
      return true;
    }
    return false;
  }

const dateToDay = function (date) {
  //check if that is a leap year
  //store the number of days in an arr
  const daysOfMonthInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfMonthInLeapYear = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];

  function checkYear(n) {
    // Check if n is divisible by 4
    if (n % 4 === 0) {
      // If it's divisible by 100, it should also be
      // divisible by 400 to be a leap year
      if (n % 100 === 0) {
        return n % 400 === 0;
      }
      return true;
    }
    return false;
  }

  let [year, month, day] = date.split('-');
  [year, month, day] = [Number(year), Number(month) - 1, Number(day)];

//   console.log(year, month + 1, day);

  let days = 0;
  if(checkYear(year)){
    for(let i =0; i < month; i++){
        days+=daysOfMonthInLeapYear[i];
    }
    days+=day;
    return days;
  }
  //if not a leap year
  for(let i =0; i < month; i++){
        days+=daysOfMonthInYear[i];
    }
    days+=day;
    return days;
};

console.log(dateToDay('2022-07-13'))
console.log(dateToDay('2022-12-31'))

//our above function works fine, now let us create a function to convert days to date back
//input - day of the year and year

const dayToDate = function(day, year){
     const daysOfMonthInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfMonthInLeapYear = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];


  let count = 0;
    let month = 0;
    let dayOfMonth = 0;

  if(checkYear(year)){
    
    for(let i = 0; i < daysOfMonthInLeapYear.length; i++){
        count+=daysOfMonthInLeapYear[i];
        if(count >= day){
            dayOfMonth = day - (count - daysOfMonthInLeapYear[i]);
            month = i + 1;
            break;
        }
    }

    if(Math.floor(dayOfMonth/10) === 0){
        dayOfMonth = '0'+day;
    }
    if(Math.floor(month/10) === 0){
        month = '0'+month;
    }
    return (year + "-" + month + "-" + dayOfMonth);
  }
  for(let i = 0; i < daysOfMonthInYear.length; i++){
        count+=daysOfMonthInYear[i];
        if(count >= day){
            dayOfMonth = day - (count - daysOfMonthInYear[i]);
            month = i + 1;
            break;
        }
    }

    if(Math.floor(dayOfMonth/10) === 0){
        dayOfMonth = '0'+day;
    }
    if(Math.floor(month/10) === 0){
        month = '0'+month;
    }
    return (year + "-" + month + "-" + dayOfMonth);
}


console.log(dayToDate(194,2022))

//function to add days to a date and return the new date

const addDaysToDate = function(days, date){
    //input - 7, 2022-07-13
    //output - 2022-07-20
    
}
const getSleepHours = day => {
  if(day === 'monday'){
    return 8;
  } else if (day === 'tuesday'){
    return 7;
  } else if (day === 'wednesday'){
    return 6;
  } else if (day === 'thursday'){
    return 7;
  } else if (day === 'friday'){
    return 6;
  } else if (day === 'saturday'){
    return 8;
  } else if (day === 'sunday'){
    return 6;
  }
};

const getActualSleepHours = () => {
 return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours =  getIdealSleepHours();

  if (actualSleepHours === idealSleepHours ){
    console.log (`You got ${actualSleepHours} hours which is the perfect amount of sleep`);
  } else if (actualSleepHours > idealSleepHours ){
    console.log(`You got ${actualSleepHours - idealSleepHours} which means you got more sleep than needed`);
  } else{
    console.log(`You got ${idealSleepHours - actualSleepHours} of sleep dept which means you should get more sleep`) 
  }
};

calculateSleepDebt();
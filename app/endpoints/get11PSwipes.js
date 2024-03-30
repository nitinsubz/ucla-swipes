import getStartDate from './getStartDate';

const options = {
  month: 'long', // Full month name
  day: 'numeric',
  year: 'numeric',
};

const getSwipesConsumer = (date) => {
  if (date.getDay() == 6) {
    return 0;
  } else if (date.getDay() == 0) {
    return 1;
  } else {
    return 2;
  }
};

const get11PSwipes = (mockDate) => {
  let dateData = getStartDate();
  let startDate = dateData.startDate;
  let today = dateData.today;
  const startingSwipes = 121;

  if (!mockDate && today.getTime() < startDate.getTime()) {
    return {
      swipes: startingSwipes,
      exception: '',
    };
  }

  let todayDate = today.toLocaleString('en-US', { ...options, timeZone: "America/Los_Angeles"});
  
  if(mockDate) {
    todayDate = new Date(mockDate).toLocaleString('en-US', options)
  }


  var specialDates = {};

  let total = startingSwipes;
  while (startDate.toLocaleString('en-US', options) != todayDate) {
    total -= getSwipesConsumer(startDate);
    startDate.setDate(startDate.getDate() + 1);
  }
  let except = '';
  if (specialDates[todayDate] != undefined) {
    except =
      'Today you have ' +
      specialDates[todayDate] +
      ' swipe(s) instead of ' +
      getSwipesConsumer(startDate);
  }
  if(total < 0) total = 0;
  return {
    swipes: total,
    exception: except,
  };
};

export default get11PSwipes;

import getStartDate from './getStartDate';

const options = {
  month: 'long', // Full month name
  day: 'numeric',
  year: 'numeric',
};

const getSwipesConsumer = (date) => {
  return 2;
};

const get14PSwipes = (mockDate) => {
  let dateData = getStartDate();
  let startDate = dateData.startDate;
  let today = dateData.today;
  const startingSwipes = 158;

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

  var specialDates = { 'September 20, 2026': 1, 'November 26, 2026': 0, 'November 27, 2026': 0, 'November 28, 2026': 0, 'November 29, 2026': 1 };
  
  let total = startingSwipes;
  
  while (startDate.toLocaleString('en-US', options) != todayDate && total > 0) {
    if (specialDates[startDate.toLocaleString('en-US', options)] != undefined) {
      total -= specialDates[startDate.toLocaleString('en-US', options)];
    } else {
      total -= getSwipesConsumer(startDate);
    }
    startDate.setDate(startDate.getDate() + 1);
  }
  let except = '';
  if (specialDates[todayDate] != undefined) {
    except =
      'Today, you have ' +
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

export default get14PSwipes;

import getStartDate from './getStartDate';

const options = {
  timeZone: 'America/Los_Angeles',
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

const get11PSwipes = () => {
  const startDate = getStartDate();
  const startingSwipes = 121;
  if (new Date().getTime() < startDate.getTime()) {
    return {
      swipes: startingSwipes,
      exception: '',
    };
  }
  var specialDates = {};
  // const startDate = new Date("September 24, 2023");
  const now = new Date().toLocaleString('en-US', options);
  let total = startingSwipes;
  while (startDate.toLocaleString('en-US', options) != now) {
    total -= getSwipesConsumer(startDate);
    startDate.setDate(startDate.getDate() + 1);
  }
  let except = '';
  if (specialDates[now] != undefined) {
    except =
      'Today you have ' +
      specialDates[now] +
      ' swipe(s) instead of ' +
      getSwipesConsumer(startDate);
  }
  return {
    swipes: total,
    exception: except,
  };
};

export default get11PSwipes;

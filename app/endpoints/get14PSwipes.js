const options = {
  timeZone: 'America/Los_Angeles',
  month: 'long', // Full month name
  day: 'numeric',
  year: 'numeric',
};

const getSwipesConsumer = (date) => {
  return 2;
};

const get14PSwipes = ({ startDate }) => {
  const startingSwipes = 151;
  if (new Date().getTime() < startDate.getTime()) {
    return {
      swipes: startingSwipes,
      exception: '',
    };
  }
  var specialDates = { 'January 7, 2024': 1 };
  // const startDate = new Date("September 24, 2023");
  const now = new Date().toLocaleString('en-US', options);
  let total = startingSwipes;
  while (startDate.toLocaleString('en-US', options) != now && total > 0) {
    if (specialDates[startDate.toLocaleString('en-US', options)] != undefined) {
      total -= specialDates[startDate.toLocaleString('en-US', options)];
    } else {
      total -= getSwipesConsumer(startDate);
    }
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

export default get14PSwipes;

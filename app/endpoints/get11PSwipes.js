const options = {
  timeZone: 'America/Los_Angeles',
  month: 'long', // Full month name
  day: 'numeric',
  year: 'numeric',
};

/*
var startDate = new Date("September 24, 2023")
var endDate = new Date()

function ep() {
    var total = 128;
    var ep = {"11/23/2023" : 0, "11/24/2023" : 0, "11/25/2023" : 0, "11/26/2023" : 1}
    var startDate = new Date("September 24, 2023")
    while(startDate.toLocaleDateString() != endDate.toLocaleDateString() && total > 0) {
        if(ep[startDate.toLocaleDateString()]  >= 0) {
            total -= ep[startDate.toLocaleDateString()]
        } else {
            if(startDate.getDay() == 6) {
                total -= 0
            }else if(startDate.getDay() == 0) {
                total -= 1
            } else {
                total -= 2
            }
        }
        startDate.setDate(startDate.getDate()+1)
    }
*/

const getSwipesConsumer = (date) => {
  if (date.getDay() == 6) {
    return 0;
  } else if (date.getDay() == 0) {
    return 1;
  } else {
    return 2;
  }
};

const get11PSwipes = ({ startDate }) => {
  const startingSwipes = 121;
  if (new Date().getTime() < startDate.getTime()) {
    return {
      swipes: startingSwipes,
      exception: '',
    };
  }
  var specialDates = {};
  // const startDate = new Date("September 24, 2023");
  const now = new Date('January 12, 2024').toLocaleString('en-US', options);
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

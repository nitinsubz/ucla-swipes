import getStartDate from "./getStartDate";

  const getTestData = () => {
    let data = [];
    let startData = getStartDate()
    let startDate = startData.startDate;
    for(let i = 0; i < 12; i++) {
        data.push(startDate.toLocaleDateString());
        startDate.setDate(startDate.getDate() + 7);
    }
    

    return data;
  };
  
  export default getTestData;
  
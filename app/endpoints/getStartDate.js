/*
id | quarter | start_date
1    Winter24  01/07/2024   
2    Spring24  04/01/2024  
3    Fall24    09/23/2024  
*/

/*
id | quarter | plan | starting_swipes
1    Winter24  11P    135
2    Winter24  14P    170
3    Winter24  19P    205
4    Spring24  11P    140

*/

/*
Get start date and quarter
SELECT start_date, quarter FROM dates
WHERE start_date < Date.today
ORDER BY start_date DESC
LIMIT 1;
*/

/*
id | quarter  | plan   | date      | actual_swipes | expected_swipes
1    Winter24   14P      1/07/2024   1               2   
2    Winter24   14P      1/21/2024   1               2          
3    Spring24   11P      4/01/2024   1               2  
4    Spring24   19P      4/23/2024   2               3          
*/

/*
SELECT * FROM exceptions
WHERE quarter = '{current_quarter}' AND plan = '{plan}';
*/

const getStartDate = () => {

  return {
    startDate: new Date('March 31, 2024'),
    today: new Date()
  };
};

export default getStartDate;

const getTime = () => {
  const now = new Date();
  const timeZone = 'America/Los_Angeles';
  const hours = now.toLocaleString('en-US', { timeZone, hour: 'numeric' });

  return {
    time: hours,
  };
};

export default getTime;

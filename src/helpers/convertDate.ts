const getDayAndMouth = (dateInString: string) => {
  const date = new Date(`${dateInString}`);

  const day = date.toLocaleString('en-US', { day: 'numeric' });

  const month = date.toLocaleString('en-US', { month: 'short' });

  const year = date.toLocaleString('en-US', { year: 'numeric' });

  return `${day} ${month} ${year}`;
};

export default getDayAndMouth;

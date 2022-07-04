const filterDataBySectionPosition = (position, data) => {
  if (data === undefined) return {};
  if (position === 'all') return data;

  const dataFilteredByPositon = data.filter(
    (section) => section.pozycja === position
  );

  return dataFilteredByPositon;
};

export default filterDataBySectionPosition;

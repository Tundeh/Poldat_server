const dOB = (date) => {
  let dateBirth = new Date(date);
  let dateToday = new Date();
  let age = dateToday.getFullYear() - dateBirth.getFullYear();
  if (
    dateToday.getMonth() < dateBirth.getMonth() ||
    (dateToday.getMonth() === dateBirth.getMonth() &&
      dateToday.getDate() < dateBirth.getDate())
  ) {
    age = age--;
  }
  return age;
};

module.exports = dOB;

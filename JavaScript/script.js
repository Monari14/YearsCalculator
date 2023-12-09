function calculateAge() {
  const birthDay = parseInt(document.getElementById('dia').value, 10);
  const birthMonth = parseInt(document.getElementById('mes').value, 10);
  const birthYear = parseInt(document.getElementById('ano').value, 10);
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  let age = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  document.getElementById('dayLabel').classList.remove('error-label');
  document.getElementById('monthLabel').classList.remove('error-label');
  document.getElementById('yearLabel').classList.remove('error-label');

  if (birthDay > 31 || birthDay < 1) {
    document.getElementById('dayLabel').classList.add('error-label');
    clearResults();
    return;
  }

  if (birthMonth > 12 || birthMonth < 1) {
    document.getElementById('monthLabel').classList.add('error-label');
    clearResults();
    return;
  }

  if (birthYear < 0 || birthYear > currentYear) {
    document.getElementById('yearLabel').classList.add('error-label');
    clearResults();
    return;
  }

  displayResults(age, months, days);
}

function clearResults() {
  document.getElementById('ageResultYears').innerHTML = '<span class="purpleText">--</span> <span class="blackText">years</span>';
  document.getElementById('ageResultMonths').innerHTML = '<span class="purpleText">--</span> <span class="blackText">months</span>';
  document.getElementById('ageResultDays').innerHTML = '<span class="purpleText">--</span> <span class="blackText">days</span>';
}

function displayResults(age, months, days) {
  if (isNaN(age)) {
    age = '--';
  }

  if (isNaN(months)) {
    months = '--';
  } else if (months < 0 || (months === 0 && days < 0)) {
    age--;
    months = 12 + months;
  }

  if (isNaN(days)) {
    days = '--';
  } else if (days < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days = prevMonth + days;
    months--;

    if (months < 0) {
      months = 11;
      age--;
    }
  }

  document.getElementById('ageResultYears').innerHTML = `<span style="color: #864cff">${age}</span> <span style="color: black">years</span>`;
  document.getElementById('ageResultMonths').innerHTML = `<span style="color: #864cff">${months}</span> <span style="color: black">months</span>`;
  document.getElementById('ageResultDays').innerHTML = `<span style="color: #864cff">${days}</span> <span style="color: black">days</span>`;
}

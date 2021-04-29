function getSleepHours(day) {
  if (day === 'monday') {
    return 9;
  } else if (day === 'tuesday') {
      return 7;
  } else if (day === 'wednesday') {
      return 10;
  } else if (day === 'thursday') {
      return 9;
  } else if (day === 'friday') {
      return 9;
  } else if (day === 'saturday') {
      return 9;
  } else if (day === 'sunday') {
      return 9;
  }
}
const getActualSleepHours = () =>
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday')
function getIdealSleepHours() {
  let idealHours = 9;
  return idealHours*7;
}
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
let overOrUnderSleepHours = Math.abs(idealSleepHours - actualSleepHours);
function calculateSleepDebt() {
  if (actualSleepHours === idealSleepHours) {
    console.log('You matched your sleep goal.')
  } else if (actualSleepHours >= idealSleepHours) {
    console.log(`You slept ${overOrUnderSleepHours} hours past your sleep goal.`)
  } else if (actualSleepHours <= idealSleepHours) {
    console.log(`You haven\'t slept enough. Sleep for ${overOrUnderSleepHours} hours more.`)
  }
}
calculateSleepDebt()

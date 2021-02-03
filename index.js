// Write your solution in this file!
// `updateDriverWithKeyAndValue()`- this function should take in three arguments:
//   a `driver` `Object`, a `key` and a `value`. This function should not mutate the
//   `driver` and should return a _new_ `driver` that has an updated
//   `value` for the `key` passed in.

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
     driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
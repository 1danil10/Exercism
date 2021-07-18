//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGA_SEC = 1000000000;
  const GIGA_SEC_IN_MS = GIGA_SEC * 1000;
  const currentDateinMS = date.getTime();
  const expectedDate = new Date(currentDateinMS + GIGA_SEC_IN_MS);
  return new Date(expectedDate);
};

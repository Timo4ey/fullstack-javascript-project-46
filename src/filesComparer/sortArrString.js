const sortArrString = (a, b) => {
  let ans;
  if (a > b) {
    ans = 1;
  } else if (a < b) {
    ans = -1;
  } else {
    ans = 0;
  }
  return ans;
};

export default sortArrString;

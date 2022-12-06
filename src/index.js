import R from "ramda";

import data from "./data.txt";

R.pipe(
  R.split("\n"),
  R.map(parseInt),
  R.groupWith(R.identity),
  R.map(R.filter(R.identity)),
  R.map(R.sum),
  R.apply(Math.max),
  console.log
)(data);

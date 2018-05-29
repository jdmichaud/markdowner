import katex from 'katex';

let counters;

function generateNumbering(counters, level) {
  return counters.slice(1, level).reduce((acc, value) => {
    acc = acc + '.' + value;
    return acc;
  }, '' + counters[0]);
}

export default function numbering(fragment) {
  const m = fragment.match(/(#*)(.*)/);
  const dashes = m[1];
  const title = m[2].trim();
  counters[dashes.length - 1] = counters[dashes.length - 1] + 1;
  counters = counters.slice(0, dashes.length).concat(counters.slice(dashes.length).map(_ => 0));
  return Promise.resolve(`${dashes} ${generateNumbering(counters, dashes.length)} ${title}`);
}

numbering.reset = function () {
  counters = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
}

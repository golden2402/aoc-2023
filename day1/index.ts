// part 1:
console.log(
  (await Bun.file("data.in").text())
    .split("\n")
    .reduce(
      (prev, line) =>
        prev +
        Number(
          [/\d/.exec(line)?.at(0), /(\d)\D*$/.exec(line)?.at(1)]
            .filter((value) => value !== undefined)
            .join(""),
        ),
      0,
    ),
);

// part 2:
const digitMap = new Map<string, number>([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

console.log(
  (await Bun.file("data.in").text()).split("\n").reduce(
    (prev, line) =>
      prev +
      Number(
        [
          line.match(/one|two|three|four|five|six|seven|eight|nine|\d/)?.at(0),
          line
            .split("")
            .toReversed()
            .join("")
            .match(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/g)
            ?.at(0)
            ?.split("")
            .toReversed()
            .join(""),
        ]
          .filter(Boolean)
          .map((value) => value as string)
          .map((value) => digitMap.get(value) ?? value)
          .join(""),
      ),
    0,
  ),
);

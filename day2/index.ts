// part 1:
const allowedColors: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

console.log(
  (await Bun.file("data.in").text()).split("\n").reduce((prev, line) => {
    return (
      prev +
      (line
        .split(":")[1]
        .trim()
        .split(";")
        .reduce(
          (prev, game) =>
            prev &&
            game
              .split(",")
              .reduce(
                (prev, next) =>
                  prev &&
                  Number(next.trim().split(" ")[0]) <=
                    allowedColors[next.trim().split(" ")[1]],
                true,
              ),
          true,
        )
        ? Number(line.split(":")[0].split(" ")[1])
        : 0)
    );
  }, 0),
);

// part 2:
console.log(
  (await Bun.file("data.in").text()).split("\n").reduce((prev, line) => {
    return (
      prev +
      Array.from(
        line
          .split(":")[1]
          .split(/[;,]/)
          .reduce(
            (map, game) =>
              map.set(
                game.trim().split(" ")[1],
                Math.max(
                  Number(game.trim().split(" ")[0]),
                  map.get(game.trim().split(" ")[1]) ?? Number.MIN_VALUE,
                ),
              ),
            new Map<string, number>(),
          )
          .values(),
      ).reduce((prev, next) => prev * next, 1)
    );
  }, 0),
);

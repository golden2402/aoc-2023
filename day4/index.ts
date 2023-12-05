// part 1:
console.log(
  (await Bun.file("data-test.in").text())
    .split("\n")
    .map((card) =>
      card
        .split(":")[1]
        .trim()
        .split("|")
        .map((winningNumbers) => winningNumbers.trim().split(/\s+/)),
    )
    .map((cardData) =>
      Math.floor(
        2 **
          (cardData[0].filter((value) => cardData[1].includes(value)).length -
            1),
      ),
    )
    .reduce((last, current: number) => last + current, 0),
);

// part 2:
console.log(
[[
  (await Bun.file("data.in").text())
    .split("\n")
    .map((card) =>
      card
        .split(":")[1]
        .trim()
        .split("|")
        .map((winningNumbers) => winningNumbers.trim().split(/\s+/)),
    )
    .map((cardData) =>
      cardData[0].filter((value) => cardData[1].includes(value)).length
    )
]]
  .map(([ cardsWon ]) => {
    return cardsWon.reduce(
      (totalCardsWon, currentCardsWon, i) => (
        [
          ...totalCardsWon.slice(0, i + 1),
          ...(
            Array(i + 1).concat(Array(currentCardsWon).fill(totalCardsWon[i]))
              .map((cards, j) => totalCardsWon[j] + (cards || 0))
              .filter((value): value is number => value !== undefined)
          ),
          ...totalCardsWon.slice(i + currentCardsWon + 1)
        ]
      ),
      Array(cardsWon.length).fill(1)
    )
  })
  .map(
    (values) => values.reduce((sum, current) => sum + current, 0)
  )[0]
);
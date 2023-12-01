import re

# part 1:
print(
    sum(
        [
            int(
                re.search(r"(\d)", line).groups()[0]
                + re.search(r"(\d)\D*$", line).groups()[0]
            )
            for line in open("data.in").read().rstrip().split("\n")
        ]
    )
)

# part 2:
digit_map = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}
map_digit = lambda value: digit_map.get(value, value)

print(
    sum(
        [
            int(
                list(
                    map(
                        map_digit,
                        re.search(
                            r"(one|two|three|four|five|six|seven|eight|nine|\d)", line
                        ).groups(),
                    )
                )[0]
                + list(
                    map(
                        map_digit,
                        filter(
                            None,
                            re.findall(
                                r"((?=(one|two|three|four|five|six|seven|eight|nine))|\d)",
                                line,
                            )[-1],
                        ),
                    )
                )[0]
            )
            for line in open("data.in").read().rstrip().split("\n")
        ]
    )
)

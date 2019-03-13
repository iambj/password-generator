import os

count = 0
words = []
with open("words.txt") as f:
    for line in f:
        line = line.strip()
        if len(line) >= 8:
            print()
            words.append("{}".format(line))
            count += 1

print(count, "words.")
print(words)

file = open("words.js", "w")
file.write("words = " + str(words))
file.close()
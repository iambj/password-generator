# Takes a long \n delimited list of words and converts it to a JS file with 1 array filled with said words.
import os
count = 0
words = []
with open("words.txt") as f:
    for line in f:
        line = line.strip()
        # We're only going to used words that are > 8 in length.
        if len(line) >= 8:
            print()
            words.append("{}".format(line))
            count += 1

file = open("words.js", "w")
file.write("words = " + str(words))
file.close()

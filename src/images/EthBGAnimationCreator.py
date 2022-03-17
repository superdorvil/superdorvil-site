import random

file = open("EthOriginalBG.svg", "r")
numOfLines = len(open("EthOriginalBG.svg", "r").readlines())
ethBG = []
durationCount = 0;
duration = str(random.random() + 6)
animateIndex = 0

for x in range(numOfLines):
    line = file.readline()

    if ('path' in line):
        animateIndex = random.randint(0, 2)
        if (durationCount == 6):
            duration = str(random.random() + 6)
            durationCount = 0

        line.replace('/', '')
        ethBG.append(line.replace('/', ''))
        if (animateIndex == 0):
            ethBG.append('      <animate attributeName="fill" values="#FFFFFF;#FFFFFF;#F95700;#FFFFFF;#F95700" dur="' + duration + 's" repeatCount="indefinite" />\n')
        if (animateIndex == 1):
            ethBG.append('      <animate attributeName="fill" values="#FFFFFF;#F95700;#FFFFFF;#F95700#FFFFFF;" dur="' + duration + 's" repeatCount="indefinite" />\n')
        if (animateIndex == 2):
            ethBG.append('      <animate attributeName="fill" values="#F95700;#FFFFFF;#F95700#FFFFFF;#FFFFFF;" dur="' + duration + 's" repeatCount="indefinite" />\n')
        ethBG.append('    </path>\n')

        durationCount = durationCount + 1
    else:
        ethBG.append(line)

file.close()
file = open("EthBG.svg", "w")
file.close()
file = open("EthBG.svg", "a")

for x in ethBG:
    file.write(x)

file.close()

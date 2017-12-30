''' Design an algorithm and write code to remove the duplicate characters in a 
string without using any additional buffer NOTE: One or two additional variables 
are fine An extra copy of the array is not 
FOLLOW UP
Write the test cases for this method '''

import sys

def makeUnique(inputstr):
	if inputstr is None:
		return 
	strD = ''
	copy = []
	for i in inputstr:
		if(i in copy):
			continue
		else:
			copy.append(i)
			strD += i
	print strD


def makeUniqueNoCopy(inputstr):           # Not Working
	if inputstr is None:
		return
	if len(inputstr) < 2:
		return 
	tail = 1
	for i in range(1, len(inputstr)):
		for j in range(tail):
			if(inputstr[i] == inputstr[j]):
				break
		if(j == tail):
			inputstr[tail] == inputstr[i]
			tail += 1
	print inputstr

makeUnique(sys.argv[1])
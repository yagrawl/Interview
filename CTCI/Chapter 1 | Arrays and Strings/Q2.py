''' Write code to reverse a C-Style String (C-String means that “abcd” 
	is represented as  ve characters, including the null character ) '''

import sys

def reverseString(inputstr):
	strR = ''
	for i in range(len(inputstr)):
		strR += inputstr[len(inputstr) - i - 1]
	print strR


def reverseShuffle(inputstr):
	inputstr = list(inputstr)
	length = len(inputstr)
	for i in range(length/2):
		temp = inputstr[i]
		inputstr[i] = inputstr[length - i -1]
		inputstr[length - i - 1] = temp
	print ''.join(inputstr)



reverseString(sys.argv[1])

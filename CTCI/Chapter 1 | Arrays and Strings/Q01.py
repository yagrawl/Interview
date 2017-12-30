# Implement an algorithm to determine if a string has 
# all unique characters. What if you can not use additional data structures?

import sys
# Solution 1
def UniqueArr(inputstr):
	stringarr = []
	for i in inputstr:
		if(i in stringarr):
			print 'Not Unique'
			return
		else:
			stringarr.append(i)
	print 'Unique'

inputstring = 'helo'
UniqueArr(sys.argv[1])
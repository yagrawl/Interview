''' Write a method to decide if two strings are anagrams or not '''

import sys

def MyAnagramCheck(inputstr1, inputstr2):
	count = 0
	for i in inputstr2:
		if i in inputstr1:
			count += 1

	if(count == len(inputstr2) and len(inputstr1) == len(inputstr2)):
		print 'Anagrams'
	else:
		print 'Not Anagrams'
		
def AnagramCheck(inputstr1, inputstr2):
	inputstr1 = ''.join(sorted(inputstr1))
	inputstr2 = ''.join(sorted(inputstr2))
	if(inputstr1 == inputstr2):
		print 'Anagrams'
	else:
		print 'Not Anagrams'


MyAnagramCheck(sys.argv[1], sys.argv[2])


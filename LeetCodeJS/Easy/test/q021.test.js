const q021 = require('../q021');

test('Check 1st', () => {
	var l1 = {val : 1, next : {val : 3, next : {val : 5, next : null}}};
	var l2 = {val : 2, next : {val : 4, next : {val : 6, next : null}}};
  expect(q021(l1, l2).val).toBe(1); 
});

test('Check 2nd', () => {
	var l1 = {val : 1, next : {val : 3, next : {val : 5, next : null}}};
	var l2 = {val : 2, next : {val : 4, next : {val : 6, next : null}}};
  expect(q021(l1, l2).next.val).toBe(2); 
});

test('Check 4th', () => {
	var l1 = {val : 1, next : {val : 3, next : {val : 5, next : null}}};
	var l2 = {val : 2, next : {val : 4, next : {val : 6, next : null}}};
  expect(q021(l1, l2).next.next.next.val).toBe(4); 
});

test('Check l2 empty', () => {
	var l1 = {val : 1, next : {val : 3, next : {val : 5, next : null}}};
	var l2 = {};
  expect(q021(l1, l2).next.next.val).toBe(5); 
});

import pytest

from user import User
from card import Card
from userlist import UserList
from main import *

# Tests for check_luhn
def test_check_luhn_invalid():
    test_user = User('Tom', '1234567890123456', 1000)
    check_card = Card('Credit', 'Tom', 10, test_user)
    assert check_card.check_luhn() == 0

def test_check_luhn_valid():
    test_user = User('Tom', '5454545454545454', 1000)
    check_card = Card('Credit', 'Tom', 10, test_user)
    assert check_card.check_luhn() == 1

# Tests for parser
def test_parser_action():
    command = 'Add Tom 4111111111111111 $1000'
    test_parse = parser(command)
    assert test_parse[0] == 'Add'

def test_parser_user():
    command = 'Add Tom 4111111111111111 $1000'
    test_parse = parser(command)
    assert test_parse[1] == 'Tom'

def test_parser_cardno():
    command = 'Add Tom 4111111111111111 $1000'
    test_parse = parser(command)
    assert test_parse[2] == '4111111111111111'

def test_parser_amount_add():
    command = 'Add Tom 4111111111111111 $1000'
    test_parse = parser(command)
    assert test_parse[3] == 1000

def test_parser_amount_charge():
    command = 'Charge Tom $500'
    test_parse = parser(command)
    assert test_parse[2] == 500

# Check Credit User
def test_credit_user():
    test_user = User('Tom', '4111111111111111', 1000)
    test_activity = Card('Credit', 'Tom', 100, test_user)
    assert test_activity.credit_user().amount == -100

def test_credit_user_valid():
    test_user = User('Tom', '1234567890123456', 1000)
    test_activity = Card('Credit', 'Tom', 100, test_user)
    assert test_activity.credit_user().amount == 'error'

# Check Charge User
def test_charge_user_limit():
    test_user = User('Tom', '4111111111111111', 1000)
    test_activity = Card('Charge', 'Tom', 100, test_user)
    assert test_activity.charge_user().amount == 100

def test_charge_user_exceed_limit():
    test_user = User('Tom', '4111111111111111', 1000)
    test_activity = Card('Charge', 'Tom', 1001, test_user)
    assert test_activity.charge_user().amount == 0

def test_charge_user_valid():
    test_user = User('Tom', '1234567890123456', 1000)
    test_activity = Card('Charge', 'Tom', 100, test_user)
    assert test_activity.charge_user().amount == 'error'

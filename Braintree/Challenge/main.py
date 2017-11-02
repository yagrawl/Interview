import sys
import fileinput

from user import User
from card import Card
from userlist import UserList

def main():

    global data
    data = UserList()
    commands = fileinput.input()
    for command in commands:
        curr_command = parser(command)
        handler(curr_command)
    print_data()

def parser(command):

    parsed_command = command.split()

    # Checking if 'Add'
    if(parsed_command[0] == 'Add'):
        # Input format : Last element is amount
        parsed_command[-1] = int(parsed_command[-1][1:])
    elif(parsed_command[0] == 'Charge' or parsed_command[0] == 'Credit'):
        # Input format : Last element is amount
        parsed_command[-1] = int(parsed_command[-1][1:])
    return parsed_command

def handler(curr_command):

    if(curr_command[0] == 'Add'):
        name = curr_command[1]
        number = curr_command[2]
        limit = curr_command[3]
        new_user = User(name, number, limit)
        data.add_user(new_user)

    elif(curr_command[0] == 'Charge' or curr_command[0] == 'Credit'):
        action = curr_command[0]
        name = curr_command[1]
        amount = curr_command[2]
        new_activity = Card(action, name, amount, data.get_user(name))
        if(action == 'Credit'):
            data.add_user(new_activity.credit_user())
        elif(action == 'Charge'):
            data.add_user(new_activity.charge_user())

def print_data():
    data.print_summary()


if __name__ == '__main__':
    main()


class UserList(object):

    def __init__(self):
        self.user_list = {}

    def add_user(self, user):
        self.user_list[user.name] = user

    def get_user(self, name):
        return self.user_list[name]

    def print_summary(self):
        for key, value in sorted(self.user_list.items()):
            if(self.user_list[key].amount != 'error'):
                print key + ': $' + str(self.user_list[key].amount)
            else:
                print key + ': ' + self.user_list[key].amount

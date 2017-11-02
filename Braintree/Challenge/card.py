
class Card(object):

    def __init__(self, action, name, amount, details):
        self.action = action
        self.name = name
        self.amount = amount
        self.details = details
        self.number = self.details.number
        self.limit = self.details.limit
        self.validity = Card.check_luhn(self)

    def credit_user(self):
        if(self.validity):
            self.details.amount -= self.amount
        else:
            self.details.amount = 'error'
        return self.details

    def charge_user(self):
        if(self.validity):
            if(self.amount + self.details.amount <= self.details.limit):
                self.details.amount += self.amount
        else:
            self.details.amount = 'error'
        return self.details

    def check_luhn(self):
        sum = 0
        parity = len(self.number) % 2
        for i, digit in enumerate([int(x) for x in self.number]):
            if i % 2 == parity:
                digit *= 2
                if digit > 9:
                    digit -= 9
            sum += digit
        return sum % 10 == 0

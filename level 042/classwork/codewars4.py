def is_isogram(string):
    string = string.lower()
    counter = 0
    for letter in string:
        count = string.count(letter)
        counter += count
    return counter == len(string)
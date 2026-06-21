def is_pangram(s):
    c = 0
    s = s.lower()
    s = set(s)
    for i in s:
        if i.isalpha():
            c += 1
    if c == 26:
        return True
    else:
        return False

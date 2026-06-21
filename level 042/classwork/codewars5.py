def remove_duplicate_words(s):
    s = s.split()
    s = dict.fromkeys(s)
    return " ".join (list(s))
print(remove_duplicate_words("my cat is my cat fat"))

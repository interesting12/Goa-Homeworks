def to_weird_case(string):
    words = string.split()
    sentence = []
    for i in words:
        new_word = ""
        for j in range(len(i)):
            if j % 2:
                new_word += i[j].lower()
            else:
                new_word += i[j].upper()
        sentence.append(new_word)
    return ' '.join(sentence)
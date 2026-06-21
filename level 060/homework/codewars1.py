def camel_case(s):
    s = s.split()
    return "".join([word.capitalize() for word in s])
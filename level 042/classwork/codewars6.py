def vaporcode(s):
    s = s.replace(" ","")
    
    res = ""
    for char in s.upper():
        res += char + "  "
    
    return res[:-2]



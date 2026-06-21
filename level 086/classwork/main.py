#codewars1 
def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num
        
#codewars2 
def array_diff(a, b):
    new_list = []
    for i in a: 
        if i not in b:
            new_list.append(i)
    return new_list
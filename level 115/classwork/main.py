def func(lst, target):
    if len(lst) == 0:
        return 0
    for i in range(len(lst)):
        if lst[i] == target:
            return i 
    return 0
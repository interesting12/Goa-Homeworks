def non_repeating(str):
    count = {}
    for i in str:
        if i in count:
            count[i] += 1
        else:
            count[i] = 1
    
    for i in str:
        if count[i] == 1:
            return i
    return False

print(non_repeating('hannah'))  #false
print(non_repeating('abbia'))   #1

def counter(string):
    result = {} 
    for i in string:
        if i in result:
            result[i] += 1
        else:
            result[i] = 1
            
    return result

input = "აბბა"
output = counter(input)
print(output)
def has_unique_characters(string):
    
    return len(set(string)) == len(string)


test_case = "stage"
output = has_unique_characters(test_case)
print(output) 

test_case = "staggea"
output = has_unique_characters(test_case)
print(output) 

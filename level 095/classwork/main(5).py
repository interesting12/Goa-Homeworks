def non_repeating_i(string):
    count = {}

    for i in string:
        if i in count:
            count[i] += 1
        else:
           count[i] = 1

    for i in string:
        if count[i] == 1:
            return i
        
test_case = "stage"
output = non_repeating_i(test_case)
print(output)

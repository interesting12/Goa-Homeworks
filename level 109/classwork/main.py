def func(operation, a, b, *rest):
    if operation == "add":
        result = a + b
    elif operation == "minus":
        result = a - b
    elif operation == "multiply":
        result = a * b
    else:
        raise ValueError("Invalid operation. Supported operations: add, minus, multiply.")
    
    for num in rest:
        if operation == "add":
            result += num
        elif operation == "minus":
            result -= num
        elif operation == "multiply":
            result *= num
    
    return result

print(func("add", 1, 7, 2, 1))        #  11
print(func("minus", 10, 3, 2))        # 5
print(func("multiply", 2, 3, 4))      #  24

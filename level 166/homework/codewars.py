# 1
# def divisible_by(numbers, divisor):
#     res = []
#     for i in numbers:
#         if i % divisor == 0:
#             res.append(i)
#     return res

# 2
# def stringy(size):
#     result = ""
#     for i in range(size):
#         result += "1" if i % 2 == 0 else "0"
#     return result

# 3
# def is_palindrome(n):
#     return str(n) == str(n)[::-1]


# def palindrome_chain_length(n):
#     steps = 0

#     while not is_palindrome(n):
#         n = n + int(str(n)[::-1])
#         steps += 1

#     return steps
# 4
# def is_valid_IP(string):
#     ip_list = string.split(".")
#     for i in ip_list:
#         if i.isdigit() == False or len(ip_list) != 4:
#             return False 
#         if i.startswith("0") and len(i) > 1 or int(i) > 255:
#             return False 
#     return True 
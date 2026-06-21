# 1
# def calculator(a, b, op):

#     if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
#         return "unknown value"

#     if op == "+":
#         return a + b
#     elif op == "-":
#         return a - b
#     elif op == "*":
#         return a * b
#     elif op == "/":
#         if b == 0:
#             return "unknown value"
#         return a / b

#     return "unknown value"

#2
# def kata_13_december(lst): 
#     res = []
#     for i in lst:
#         if i % 2 != 0:
#             res.append(i)
#     return res

# 3
# def replace_exclamation(st):
#     res = ""
#     vowels = "aeiouAEIOU"
    
#     for i in st:
#         if i in vowels:
#             res += "!"
#         else:
#             res += i
            
# 4
# def format_poem(poem):
#     splited = poem.split('. ')
#     for i in range(len(splited)):
#         if not splited[i].endswith('.'):
#             splited[i] += '.'
#     return '\n'.join(splited)  


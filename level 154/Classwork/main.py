# def even_chars(st): 
#     if len(st) < 2 or len(st) > 100:
#         return "invalid string"
    
#     lst = []
#     index = 1 
#     while index < len(st):
#         lst.append(st[index])
#         index += 2

#     return lst

#2
# def replace_nth(text, n, old_value, new_value):
#     if n <= 0:
#         return text

#     res = []
#     count = 0 

#     for i in text:
#         if i == old_value:
#             count += 1
#             if count % n == 0:
#                 res.append(new_value)
#             else:
#                 res.append(i)
#         else:
#             res.append(i)

#     if count < n:
#         return text

#     return ''.join(res)
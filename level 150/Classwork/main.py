# def name_shuffler(str_):
#     splited = str_.split()
#     return ' '.join(splited[::-1])

# 2
# def get_real_floor(n):
#     if n > 13:
#         return n - 2
#     elif n > 0:
#         return n - 1
#     else:
#         return n

# 3 def xor(a,b):
#     if a == b:
#         return False
#     else:
#         return True

# 4
# def position(letter):
#     alphabet = 'abcdefghijklmnopqrstuvwxyz'
#     index = 0
#     for char in alphabet:
#         index += 1
#         if char == letter:
#             return f"Position of alphabet: {index}"

# 5
# def get_char(n):
#     return chr(n)



# 6
# def round_to_five(arr):
#     result = []
#     for x in arr:
#         q = x / 5
#         if q - int(q) >= 0.5:
#             nearest = (int(q) + 1) * 5
#         else:
#             nearest = int(q) * 5
#         result.append(nearest)
#     return result

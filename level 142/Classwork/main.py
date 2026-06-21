# #1
# def format_poem(poem):
#     splited = poem.split('. ')
#     for i in range(len(splited)):
#         if not splited[i].endswith('.'):
#             splited[i] += '.'
#     return '\n'.join(splited)  

#2
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

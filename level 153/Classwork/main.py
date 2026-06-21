# #1
# # def most_frequent_item_count(collection):
# #     if not collection:
# #         return 0

# #     max_count = 0

# #     for item in collection:
# #         count = collection.count(item)
# #         if count > max_count:
# #             max_count = count

# #     return max_count

# 2
# def remove_exclamation_marks(s):
#     r = s.replace("!", "")
#     return r

# 3
# def remove_every_other(my_list):
#     return my_list[::2]
# 3
# def fix_parentheses(strng):
#     open_needed = 0
#     balance = 0

#     for ch in strng:
#         if ch == "(":
#             balance += 1
#         else:
#             balance -= 1

#         if balance < 0:
#             open_needed += 1
#             balance = 0

#     close_needed = balance

#     return "(" * open_needed + strng + ")" * close_needed
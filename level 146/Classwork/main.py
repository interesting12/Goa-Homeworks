#1
# def most_frequent_item_count(collection):
#     if not collection:
#         return 0

#     max_count = 0

#     for item in collection:
#         count = collection.count(item)
#         if count > max_count:
#             max_count = count

#     return max_count

# 2
# def sum_args(*args):
#     return sum(args)

#3
# def sum_digits(number):
#     number = abs(number)
#     total = 0
    
#     while number > 0:
#         digit = number % 10
#         total += digit
#         number = number // 10
        
#     return total

#4
# def replace_exclamation(st):
#     res = ""
#     vowels = "aeiouAEIOU"
    
#     for i in st:
#         if i in vowels:
#             res += "!"
#         else:
#             res += i
          
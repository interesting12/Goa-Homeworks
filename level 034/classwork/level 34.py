# def find_shorts(s):
#     list1 = [ ]

#     for i in s:
#         new_world = ""
#         if i != " ":
#             new_world += i 
#         else:
#             list1.append(new_world)
#             new_world = ""
#     word_len = len(list1[0])
#     for i in list1
#     if len(i) < word_len:
#         word_len = len(i)
#     return word_len


def find_short(s):  
    list1 = s.split(" ") 
    word_len = len(list1[0]) 
    for i in list1:
        if len(i) < word_len: 
            word_len = len(i)
    return word_len 

print(find_short("Hello i am Georg and i from georgia")) 
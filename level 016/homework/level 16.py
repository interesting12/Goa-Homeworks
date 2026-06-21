# fruit=["banana", "apple", "orange"]
# print(fruit)

# #Access Items
# python_list = ["banana", "apple", "orange", "bmw", "mercedes", "html", "css", "js" ]
# # print(python_list[5])
# # print(python_list[2])
# # print(python_list[3])
# # print(python_list[7])
# # print(python_list[1])

# # change item
# python_list[1] = "lemmon"
# python_list[2:3] = ["cherry", "nissan", ]

# print(python_list)


# #add item
# python_list.insert(2, "watermelon")
# python_list.append("php")
# python_list.extend(fruit)
# print(python_list)

# #remove item

# python_list.remove("mercedes")
# python_list.pop(1)
# del python_list [3]
# python_list.clear()
# print(python_list)

# #loop in list

# new_list = ["js", "css", "html", "python"]
# for i in new_list:
#     print(i)

# for i in range(len(new_list)):
#     print(new_list[i])

    
# otherlist = ["orange", "banana", "cherry"]
# i = 0
# while i < len(otherlist):
#   print(otherlist[i])
#   i = i + 1
# [print(i) for i in otherlist]

# #List Comprehension
# list1 = [ "bmw", "mercedes", "opel", "audi"]
#  #newlist = [i for i in list1 if "c" in i ]
#  #newlist = [i for i in range(10) if i < 4]
# #newlist = [i.upper() for i in list1]
# #newlist = ["hello"  for i in list1 ]
# newlist = [ i if i != "bmw" else "orange" for i in list1]

# # for i in list1:
# #     if "c" in i:
# #         newlist.append(i)

# print(newlist)
#sort lisat


# list2 = [12, 67, 34, 64, 76, 123 ]
# # list2.sort()
# # list2.sort(reverse=True)
# list2.reverse()
# print(list2)

# list3 = ["apple", "orange", "bannana"]
# # mylist = list(list3)
# mylist = list3.copy()
# print(mylist)

#join list


# list4 = ["a", "b", "c"]
# list5 = [1, 2, 3]
# # list6 = list4 + list5
# # print(list6)

# for i in list5:
#     list4.append(i)

# print(list4)

# list4.extend(list5)
# print(list4)


# familly = ["giorgi", "anastasia", "mari", "merab", "eteri" ]

# print(familly[0])
# print(familly[1])
# print(familly[2])
# print(familly[3])
# print(familly[4])


# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]
# print(numbers[0])
# print(len(numbers) )


# nums = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
# nums[2] = 1
# nums[4] = 1
# nums[6] = 1
# nums[8] = 1
# nums[10] = 1
# print(nums) 

name = input("Enter your name : ")
lastname = input("Enter your lastname: ")
age = int(input("Enter your age : "))
adress = input("Enter your adress: ")
email = input("Enter your email: ")

user_input = [name, lastname, age, adress, email]

print(user_input)
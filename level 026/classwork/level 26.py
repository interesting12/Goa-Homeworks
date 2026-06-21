# name = input("Enter your name: ")
# print(name.upper())


# # upper() - სტრინგის ყველა ასოს გარდაქმნის დიდ ასოდ 
# # capitalize() - სტრინგის პირველ ასოს გარდაქმნის დიდ ასოდ

# # მეთოდი არის ფუნქცია რომელიც გამოიყენება კონკრეტული ტიპის მონაცემთან



                    #2

# sentence = "hello i'm Georg and i'm 16 years old"
# count = sentence.count("o")
# print(count)

# # count() - ითვლის წინადადებაში ასოს ან სიტყვის რაოდენობას 

# name = "GIORGI"
# print(name.lower())

# # lower() - მეთოდი რომელიც დიდ ასოსებს აპატარავებს, 


                                #3
# sentence = "hello my brother"

# find = sentence.find("my")
# print(find)
# index = sentence.index("my")
# print(index)

# # find() და index() - მეთოდები  გამოიყენება სტრინგში რაიმე სიტყვის/ასოს ინდექსის საპოვნელად 
# """ find() - ცოტათ განსხვავდება index() - ისგან რადგან, თუ find მეთოდი სტრინგში ვერ იპოვის
# ჩვენს მითითებულ სიტყვას/ასოს, ამ შემთხვევაში გამოიტანს შედეგად -1, ხოლო index() მეთოდი 
# ამ შემთხვევაში ერორს გამოიტანს"""



                                            #4

# emails = []
# count = int(input("How many emails do  you want to enter: "))

# for i in range(count):
#     email = input("enter your email: ")

#     if email.endswith("@gmail.com"):
#         emails.append(email)
#         print("correct")
#     else:
#         print("incorrect")

# print(emails)
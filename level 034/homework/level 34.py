# def find_short(s):  #  შევქმენით ფუნქცია სახელად find_short  და მივანიჭეთ ერთი პარამეტრი (s)
#     list1 = s.split(" ") # შევქმენით სია list1 რომელსაც ვუბრძანეთ, რომ (s) პარამეტრში მიღებული str მონაცემი დაეყო " " გამოტოვებული ადგილით(ანუჩვენი სტრინგი დაიყოფა ფგამოტოვებული ადგილით)
#     word_len = len(list1[0]) #დავადეკრალილეთ შემდეგი ცვლადი word_len რომელიც გავუტოლეთ list1 - ში მენულე ინდექსზე მყოფ ელემენტს.
#     for i in list1: # შემდეგ list1 -ს გადავუარეთ  for loop-ის საშუალებით
#         if len(i) < word_len: # თუ i - ს სიტყვების რაოდენობა ნაკლებია word_len-ზე მაშინ  word_len = len(i)- ანუ i-ს სიტყვების რაოდენობას 
#             word_len = len(i)
#     return word_len # დავაბრუნოთ word_len 

# print(find_short("Hello i am Georg and i from georgia")) 
#ჩვენ (s) პარამეტრს გადავეცით ეს წინადადება, ჩვენი ფუნქცია კი ამ წინადადებიდან ამოარჩევს ყველაზე პატრარა სიტყვას
# და დაგვიბრუნებს ამ სიტყვის ასოთა რაოდენობას


# 10 string 

name = "Georgi"
print(name.split("r"))

surname = "Shavadze"
print(name.split("v"))

words = "hello world"
print(words.split("o"))

sd = "money"
print(sd.split("n"))

df = "bye"
print(df.split("y"))

goa = "Goal Oriented Academy"
print(goa.split(" "))

num1 = "one"
print(num1.split("n"))

num2 = "two"
print(num2.split("w"))

num3 = "three"
print(num3.split("r"))

num4 = "four"
print(num4.split("o"))
# 1. **შეადგინეთ ფუნქცია, რომელიც აფასებს მათემატიკურ გამოსახულებას სტრიქონად (მაგ., "3 + 5 * (2 - 8)") და აბრუნებს შედეგს.**

def math(nums, num2):
    sum = nums + num2 
    print(str(nums) + " + " + str(num2) + " = ")
    print(sum)
    
math(4, 6)



# 2. **დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონების სიას და აბრუნებს ამ სტრიქონების სიას სიგრძის მიხედვით დალაგებული.**

def too_strings(strings):
    sorted_strings = sorted(strings, key=len)
    return sorted_strings

original = ["apple", "orange", "banana", "pear", "grape"]
shorted = too_strings(original)


print("First list:", original)
print("Sorted list by length:", shorted)




# 3. **შექმენით ფუნქცია, რომელიც იღებს სტრიქონს და აბრუნებს ლექსიკონს თითოეული სიმბოლოს რაოდენობით სტრიქონში.**

def sorted_list(string):
    count = {}
    
    for char in string:
        if char in count:
            count[char] += 1
        else:
            count[char] = 1
            
    return count

string = "hello"
result = sorted_list(string)
print(f"Character counts in '{string}': {result}")


# 4. **განსაზღვრეთ ფუნქცია, რომელიც აერთიანებს ორ დალაგებულ სიას ერთ დალაგებულ სიაში ჩაშენებული დალაგების ფუნქციების გარეშე.**

def another_sorted_list(list1, list2):
    sorted_list = []
    i, j = 0, 0
    
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            sorted_list.append(list1[i])
            i += 1
        else:
            sorted_list.append(list2[j])
            j += 1
    
    sorted_list.extend(list1[i:])
    sorted_list.extend(list2[j:])
    
    return sorted_list

list1 = [3, 5, 7, 9, 11]
list2 = [2, 4, 6, 8, 10]
sorted_list = another_sorted_list(list1, list2)
print("Sorted list:", sorted_list)



# # 1. შექმენით ფუნქცია, რომელიც იღებს რაიმე რიცხვს და აბრუნებს მასზე 5'ით მეტს.
def numbers(num):
    print(num + 5)

numbers(2)

# # 2. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ ნამრავლს
def multiply(nums, num2):
    print(nums * num2)

multiply(2, 6)

# # 3. შექმენით ფუნქცია, რომელიც იღებს string'ს ამ string'ის სიგრძეს (გამოიყენეთ ფუნქცია len()).

def string(name):
    print(len(name))

string("giorgi")

# # 4. შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და აბრუნებს ამ string'ების სიგრძეების list'ს (გამოიყენეთ ფუნქცია len()).
strings = ["python", "css", "html", "javascript", "php", "c++"]
def lists_of_strings(strings):
    
    strings_len = []    

    lenght = (len(strings [0]) )
    lenght1 = (len(strings [1]) )
    lenght2= (len(strings [2]) )
    lenght3 = (len(strings [3]) )
    lenght4 = (len(strings [4]) )
    lenght5 = (len(strings [5]) )
    

    strings_len.append(lenght )
    strings_len.append(lenght1 )
    strings_len.append(lenght2 )
    strings_len.append(lenght3 )
    strings_len.append(lenght4 )
    strings_len.append(lenght5 )
    print(strings)
    print(strings_len )

lists_of_strings(strings)


# strings = ["python", "css", "html", "javascript", "php", "c++"]
# def lists_of_strings():
#     strings_len = []
   
#     for lenght in strings_len:
            
#         lenght = len(strings)
#         strings_len.append(lenght)
#         print(strings)
#         print(strings_len)
       
# lists_of_strings()



# # 5. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და მარჯვნიდანაც მაგალითად: "wow") და სხვა შემთხვევაში False-ს.

def is_palindrome():
    string = input("Enter something (integer/string): ")
    if string[::-1] == string:
        print("it is palindrome")
    else:
        print("it is not palindrome")

is_palindrome()

# 6. შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.


def lenght_of_strings(strings):
    strings = ["asda ", "asdsad", "asds" ]
    lenght = []
    for i in strings:
        lenght1 = len(strings[0])
        lenght2 = len(strings[1])
        lenght3 = len(strings[2])

        
        






# 7. შექმენით ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის factorial'ს (რა არის ფაქტორიალი: https://en.wikipedia.org/wiki/Factorial).

def factorial(nums):
    nums = int(input("Enter number: "))
    factorial_list = []
    factorial = nums * -1 
    factorial_list.append(factorial)
    print(factorial_list)

factorial(1)


# 8. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მაქსიმალური რიცხვების ჯამს.
def integers():
    ints1 = [1, 2, 3, 4]
    ints2 = [2, 4, 6, 8]

    maximum = max(ints1)
    maximum1 = max(ints2)
    print(maximum + maximum1)

integers()

# # 9. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მინიმალური რიცხვების სხვაობას.

def integers():
    ints1 = [1, 2, 3, 4]
    ints2 = [2, 4, 6, 8]

    minimum = min(ints1)
    minimum1 = min(ints2)
    print(minimum + minimum1)

integers()
# # 10. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ამ სიაში მაქსიმალური და მინიმალური რიცხვების სხვაობას.
def integers():
    ints1 = [1, 2, 3, 4]
    ints2 = [2, 4, 6, 8]

    minimum = min(ints1)
    maximum = max(ints2)
    print(maximum - minimum)

integers()
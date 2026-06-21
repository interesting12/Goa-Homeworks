# # Task1 While loop

num = 0

while num <= 10:
    user_input = int(input("Enter number beetwen 1-10: "))
    if user_input == 8:
        print("You won")
    
    else:
        print("try again")


# # 2 

pincode = 12345
authorization = False

while authorization != True:
    user_input1 = int(input("Enter your pincode:  "))
    if user_input1 == 12345:
        print("Access granted")
        authorization = True
    else:
        print("Incorrect pincode try again")


# # 3 registration
user_input2 = input("Enter new username: ")
user_input3 = input("Enter new password: ")
sign_in = False

print(" Now sign in")

while sign_in != True: 
    user_name = input("enter your username: ")
    if user_name == user_input2:
       print("correct")
    else:
        print("try again")

    password = input("Enter your password: ")
    
    if password == user_input3:
        print("You are loggined successfully ")
        authorized = True
    else:
        print("try again")




# # 4 door lock


door_pincode = 2333
lock = False
 
while lock != True:
    pincode = int(input("Enter door pincode: "))
    if pincode == door_pincode:
        print("Door is open")
    else:
        print("incorrect pincod, try again")

# #5 about me
while True:
    print("1. My name")
    print("2. My lastname ")
    print("3. My age ")
    print("4. My height " )
    print("5. My Emaill ")
    print("6. My phone number ")
    choice = input("Enter choice (1/2/3/4/5): ")
    
    if choice == '1':
        print("giorgi")
    elif choice == '2':
        print("shavadze")
    elif choice == '3':
        print("16")
    elif choice == "3":
        print("174")
    elif choice == '4':
        print("giorgishavadze09@gmail.com")
    elif choice == "5":
        print("532 32 32 32")
        break
    else:
        print("Invalid choice. Please enter 1, 2, 3, 4, or 5.")

# Task 2 for loop

#1
#task 2დავპრინტოთ პირველი 10 ნატურალური რიცხვი 

for i in range(1, 11):
    print(i)

# 2 ლუწი რიცხვები

i = 1
for i in range(1, 51):
    if i % 2 == 0:
        print(i)

# 3 კენტი რიცხვები

i = 1
for i in range(1,51):
    if i % 2 == 1:
        print(i)

#4

fruits = ["apple", "bannana", "orrange", "lemmon" ]

for i in fruits:
    print(i)

#5

# Sum all elements in a list of numbers
numbers = [1, 2, 3, 4, 5]
sum = 0
for i in numbers:
    sum += i
print(f"The sum of numbers is: {sum} ")
         
    
 

#Task 3 if-else

#1
age = int(input("Enter your age: "))

if age >= 18:
    print("You are adult")
else:
    print("You aren't adult")

#2
numberr1 = int(input("Enetr number: "))
number2 = int(input("Enter second number: "))

if numberr1 > number2:
    print(number2, numberr1)
else:
    print(numberr1, number2)

#3
correct_password = "giorgi123" 
input_password = input("Enter your password: ")

if input_password == correct_password:
    print("Acceses granted")
else:
    print("Incorrect password")
    
#4
x = int(input("Enter number: "))
y = int(input("Enter second number: "))

if x > y:
    print("x bigger than y")
else:
    print("y bigger than x ")
    
    
#5


number = int(input("Enter number: "))

if number % 2 == 0:
    print("Number is even.")
else:
    print("number is odd.")
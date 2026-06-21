# # Task 1 გამოიტანეთ რიცხვები 0-დან 20-ის ჩათვლით 
for i in range(1,21):
    print(i)

# Task 2 მომხმარებელს შემოატანინეთ რიცხვი და დაპრინტეთ შემოტანილი რიცხვი ლუწია თუ არა თუ ლუწია დაუპრინტეთ "Number is even" 

numbers = int(input("Enter number: "))

if numbers % 2 == 0:
    print("number is even")
else:
    print("number isn't even ")

# # Task 3 დაპრინტეთ 20-მდე ლუწი რიცხვები

for i in range(1,21):
    if i % 2 == 0:
        print(i)


# Task 4 50-იდან 100-ის ჩათვლით არსებული ყველა რიცხვი დააჯამეთ for ციკლის გამოყენებით.
sum = 0

for i in range(50, 101):
    sum += i

print("sum of numbers up 50-100 is", sum )

# Task 5 დაწერეთ ალგორითმი რომელიც ბეჭდავს 5-ის ჯერად რიცხვებს 1-დან 50-ის ჩათვლით

for i in range(1, 51):
    if i % 5 == 0:
        print(i)

"""Task 6 მომხმარებელს input-ის გამოყენებით შემოატანინეთ ორი რიცხვი. 
შემდეგ შეამოწმეთ რომელია უდიდესი და გამოიყენეთ for ციკლი: უმცირესიდან
უდიდესამდე დაპრინტეთ ყველა რიცხვი"""

num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))

if num1 > num2:
        print(num2, num1)
elif num2 > num1:
        print(num1, num2)

# Task 7 დაწერეთ ალგორითმი, რომელიც დაბეჭდავს 5-იდან ათის ჩათვლით რიცხვების ნამრავლს for loop-ის გამოყენებით.
product = 1

for i in range(5, 11):
    product *= i   
      
print( "the product of numbers 5-10 is: ", product )

# Task 8BOSS: For loop დახმარებით ეცადეთ, რომ სიტყვა დაპრინტოთ საპირისპირო მიმართულებით


string = "giorgi shavadze"
for i in range(len (string) -1, 0-1, -1):
    print(string[i])


   
    


      
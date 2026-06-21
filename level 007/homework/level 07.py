# Task 1 კონვერტაციის ფუნქციები 

# str()   "string"
str1 = str(5)
str2 = str(7.8)
str3 = str(87)
str4 = str(int("5"))
str5 = str(float("6.6"))

#int()"integer"

int1 = int("3")
int2 = int(2.6)
int3 = int(str(5))
int4 = int(float("7.5"))
int5 = int(3.2)

#float() "float"

float1 = float("6.7")
float2 = float(4)
float3 = float(int("7"))
float4 = float(str("7.2"))
float5 = float(7.7)

#Task2  არითმეტიკული ოპერაციები (+, -, *, /, // და %)

#დავადეკლარილოთ ცვლადი რომლის საშუალებითაც მომხმარებელს შემოვატანინებთ 5 რიცხვს 

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
num4 = int(input("Enter fourth number: "))
num5 = int(input("Enter fifth number: ")) 

addition = num1 + num2
subtraction = num2 - num3
multiply = num3 * num4
divide  = num4 / num5
duble_divide = num5 // num3
percent_divide = num4 % num2

print(addition)
print(subtraction)
print(multiply)
print(divide)
print(duble_divide)
print(percent_divide)
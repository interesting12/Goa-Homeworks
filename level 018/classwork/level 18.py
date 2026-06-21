numlist = []

for i in range(1, 10):
    numlist.append(i)

print(numlist)
print(len(numlist))

# task 2
num1 = int(input("Enter number: "))
num2 = int(input("Enter second number: "))
list2 = []

for i in range(num1, num2):
    list2.append(i)

print(list2)

#task3 

start = int(input("Enter start number : "))
end = int(input("Enter end number : "))

list3 = []

for i in range(start, end):
    list3.append(i)
    
print(list3)
print(min(list3))
print(max(list3))
print(sum(list3))


#task
count = int(input("Enter quanity of how many numbers do you want to enter: "))

list4 = []

for i in range(count):
    num = int(input("Enter number "  + str(i + 1 ) +  ":"))
    list4.append(num)
print(sum(list4))



# task
cars = ["nissan", "toyota", "honda", "subaru", "mitsubish"]

lenght = len(cars)

print(cars[0:3])
print(cars[3:5])
print(cars[lenght - 2])
print(cars[lenght - 3])

#task
names = ["giorgi", "luka", "nika", "lado", "giorgi"]

for name in names:
    if name == "giorgi":
        print("hello admin")
    else:
        print("hello user")

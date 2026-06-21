# # Task1 0-იდან 20-ის ჩათვლით დაპრინტეთ ყველა მთელი რიცხვი

for i in range(0, 21):
    print(i )

# #task 2 დაპრინტეთ პირველი 10 ნატურალური რიცხვი 

for i in range(1, 11):
    print(i)

# Task 3 დაპტინტეთ 0-იდან 100-ის ჩათვლით ლუწი რიცხვები
 
i = 1
for i in range(1, 100 + 1):
    if i % 2 == 0:
        print(i)

# Task 4 შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი 
number = float(input("Enter number: "))

if number > 0:
    print(number, "is positive")
elif number < 0:
    print(number, "is negative")
else:
    print(number, "is zero")

# Task 5 შემოატანინეთ მომხმარებელს მისი ასაკი თუ მისი ასაკი 18 წელზე მეტია დაუპრინტეთ “you are adult” თუ 18 წელზე ნაკლები “you are virgin”
name = int(input("Enter your age: "))

if name >= 18:
    print("You are adult! ")
elif name < 18:
    print("You are virgin ")

#Task 6 კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით

day = int(input("Enter number beetwen 1-7: "))

if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3: 
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("Only number beetwen 1-7")
    
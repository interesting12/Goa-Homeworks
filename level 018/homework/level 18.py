#1
members = int(input("How many member are in your family: "))

adult = []
child = []
for i in range(members):
    num = int(input("Enter family member's ages "  + str(i + 1 ) +  ":"))
    if num >= 18:
        adult.append(num)
    else:
        child.append(num)
        

# 2
print("Adult members")
print(adult)

print("children")
print(child)


adjectives = ["red", "big", "small"]
things = ["ball", "car", "laptop"]

for x in adjectives:
  for y in things:
    print(x, y)



# 3
collages = ["goa", "novator", "it academy step", "smart academy", "Other..."]
print(collages)
user_input = input("Wich academy do you study?")
for i in collages:
    if user_input == "goa":
        print("You are CHAD")
        break
    else:
        print("You are VIRGIN")
        break
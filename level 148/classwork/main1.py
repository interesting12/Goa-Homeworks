def multiplate(num):
    count = 0
    while num >= 10:
        x = 1
        for i in str(num):
            x *= int(i)
        num = x
        count += 1
    return count

print(multiplate(39)) #3
print(multiplate(34))#2
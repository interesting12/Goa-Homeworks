# 2) შექმენით ფნქცია hello() სადაც print ფუნქციის გამოყენებით გამოიტანთ  "GOA Best!" 

def hello():
    print("Goa Best")

hello()


# 3) შექმენით ფუნქცია sum რომელიც მიიღებს ორ არგუმენთ მაგ: a , b  და შემდეგ print-ის გამოყენებით გამოიტანთ მათ ჯამს

def sum(a, b):
    print(a + b)

sum(1, 5)


# 4) შექმენით ფუნქცია to_string რომელიც მიიღებს ერთ არგუმენტს მაგალითად value  რომელსაც დაბეჭდავთ სტრინგად str-ის გამოყენებით

def to_string(value):
    print(str(value))

to_string(2)
# 5) შექმენით ფუნქცია print_type რომელიც მიიღებს ერთ არგუმენტს და შემდეგ built-in function  type() გამოყებით შეამოწმებთ მის მონაცემთა ტიპს და გამოიტანთ ეკრანზე

def print_type(name):
    print(type(name))

print_type("girogi")
# 6) შექმენთ ფუნქცია to_integer რომელიც მიიღებს ერტ არგუმენტს მაგალითად value ისევ და შემდეგ print-ის გამოყენებით გამოიტანეთ ინტეჯერად int ფუნქციით

def to_integer(value):
    print(int(value))

to_integer("6")






# 3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია,
#  თქენი დავალებაა შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან  # 
def odd_index_sum(numbers):
    return sum(numbers[i] for i in range(1, len(numbers), 2))

result = odd_index_sum([1, 2, 3, 4, 5, 6])
print(result) 
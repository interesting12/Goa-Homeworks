# # 1) შექმენით ფუნქციოა სახელად filter_odd რომელსაც გადაეცემა ერთი
# #  არგუმენტი და ეს არის რიცხვების სია, თვქენი დავალებაა დააბრუნოთ 
# # ფუნქციიდან ახალი სია სადაც მხოლოდ იქნება ლუწი რიცხვები მოცემული
# #  (აგრეთვე ახსენით რა არის ფუნქცია, პარამეტრი, არგუყმენტი და რგორო უნდა გამოვიძახოთ ის)


# def filter_odd (num_list):
#     even = []
#     for i in num_list:
#         if i % 2 == 0:
#             even.append(i)

#     return even
        
    

# result = filter_odd([1, 2, 3, 4, 5, 6])
# print(result)
     
# #   2) შექმენით ფუნქცია სახელად even_sum, რომელსაც 
# # გადასცემთ რიცხვების სია, თქვენი დავალებაა ამ სიაში შეკრიბოთ
# #  ლუწი რიცხზვები და მიღებული ჯამი დააბრუნოთ ფუნქციიდან

# def even_sum(numbers_list):
#     even_numbers = []
#     for i in numbers_list:
#         if i % 2 == 0:
#             even_numbers.append(i)
            
#     numbers_sum = sum(even_numbers)
#     print(f"numbers sum: {numbers_sum}")

#     return even_numbers


# result = even_sum([1, 2, 3, 4, 5, 6 ])
# print(result)






# 3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია,
#  თქენი დავალებაა შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან  # 
def odd_index_sum(numbers):
    return sum(numbers[i] for i in range(1, len(numbers), 2))

result = odd_index_sum([1, 2, 3, 4, 5, 6])
print(result)  

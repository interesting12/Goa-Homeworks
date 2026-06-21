# 1
# def invert_hash(dictionary):
#     result = {}
#     for key, value in dictionary.items():
#         result[value] = key
#     return result
# 2
# def age(x, y):
#     brother = x / (y - 1)
#     julie = y * brother
#     return julie

# 3
# def strong_enough(earthquake, age):
#     magnitude = 1

#     for shockwave in earthquake:
#         magnitude *= sum(shockwave)

#     strength = 1000 * (0.99 ** age)

#     return "Safe!" if strength >= magnitude else "Needs Reinforcement!"
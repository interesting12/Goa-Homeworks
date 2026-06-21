# def matrixify(name):
#     if len(name) == 0:
#         return "name must be at least one letter"

#     n = 1

#     while n * n < len(name):
#         n += 1

#     name = name.ljust(n * n, ".")

#     matrix = []

#     for i in range(0, len(name), n):
#         matrix.append(list(name[i:i + n]))

#     return matrix
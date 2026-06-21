def max_sum(n = 1):
    n = list(map(int, input("Enter list numbers (use space between nums): ").split()))
    
    n.sort(reverse=True)
    res = n[0] + n[1]
    
    return res


print(max_sum())

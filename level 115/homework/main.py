def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  
    return result

print(sum_digits(123))  # მოსალოდნელი შედეგი: 6 (1 + 2 + 3)
print(sum_digits(405))  # მოსალოდნელი შედეგი: 9 (4 + 0 + 5)

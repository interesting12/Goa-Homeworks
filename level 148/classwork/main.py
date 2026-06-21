def longest_vowel(string):
    vowels = 'aeiouAEIOU'  
    longest = 0
    current = 0

    for i in string:
        if i in vowels:
            current += 1
            if current > longest:
                longest = current
        else:
            current = 0

    return longest

print(longest_vowel('laja'))   
print(longest_vowel('kaali'))
print(longest_vowel('aaaAA'))  

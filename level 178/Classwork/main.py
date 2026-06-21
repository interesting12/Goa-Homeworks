# 1
# def descending_order(num):
#     return int(''.join(sorted(str(num), reverse=True)))

# 2
# def ordered_count(inp):
#     result = []
#     freq = {}
    
#     for ch in inp:
#         if ch in freq:
#             freq[ch] += 1
#         else:
#             freq[ch] = 1
#             result.append(ch)
    
#     return [(ch, freq[ch]) for ch in result]

# 3
# def printer_error(s):
#     errors = 0
#     for char in s:
#         if char < 'a' or char > 'm':
#             errors += 1
#     return f"{errors}/{len(s)}"